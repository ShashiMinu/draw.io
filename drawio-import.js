/**
 * Parse diagrams.net (.drawio / .xml) into a bundle this sketch app can apply.
 * iconFilenameToTypeKey: map lowercased SVG filename (e.g. "virtualmachine.svg") -> app typeKey
 */
(function (global) {
  "use strict";

  function parseMxStyle(style) {
    var out = {};
    String(style || "")
      .split(";")
      .forEach(function (part) {
        var i = part.indexOf("=");
        if (i === -1) return;
        var k = part.slice(0, i).trim();
        var v = part.slice(i + 1).trim();
        if (k) out[k] = v;
      });
    return out;
  }

  function decodeMxValue(v) {
    if (v == null) return "";
    var s = String(v);
    try {
      var ta = document.createElement("textarea");
      ta.innerHTML = s;
      return ta.value;
    } catch (e) {
      return s.replace(/&#xa;/gi, "\n").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&amp;/g, "&");
    }
  }

  function basenameFromUrl(url) {
    try {
      var u = String(url).split("?")[0].split("#")[0];
      var slash = u.lastIndexOf("/");
      return (slash >= 0 ? u.slice(slash + 1) : u).toLowerCase();
    } catch (e) {
      return "";
    }
  }

  function extractImageUrl(styleObj) {
    var raw = styleObj.image;
    if (!raw) return "";
    try {
      return decodeURIComponent(raw);
    } catch (e) {
      return raw;
    }
  }

  function extractModelXmlString(xmlText) {
    var t = String(xmlText || "").trim();
    if (t.indexOf("<mxGraphModel") >= 0) {
      var start = t.indexOf("<mxGraphModel");
      var end = t.lastIndexOf("</mxGraphModel>");
      if (end >= 0) return t.slice(start, end + "</mxGraphModel>".length);
    }
    var parser = new DOMParser();
    var doc = parser.parseFromString(t, "text/xml");
    var de = doc.documentElement;
    if (de && de.nodeName === "parsererror") return null;
    var diagram = doc.querySelector("mxfile > diagram") || doc.querySelector("diagram");
    if (!diagram) return null;
    var inner = (diagram.textContent || "").trim();
    if (inner.indexOf("<mxGraphModel") === 0) return inner;
    if (inner.length > 80 && /^[A-Za-z0-9+/=\s]+$/.test(inner.replace(/\s/g, ""))) {
      var b64 = inner.replace(/\s/g, "");
      if (typeof global.pako !== "undefined") {
        try {
          var bin = Uint8Array.from(atob(b64), function (c) {
            return c.charCodeAt(0);
          });
          var u = global.pako.inflateRaw(bin, { to: "string" });
          if (u.indexOf("<mxGraphModel") >= 0) return u;
        } catch (e1) {
          /* fall through */
        }
        try {
          var bin2 = Uint8Array.from(atob(b64), function (c) {
            return c.charCodeAt(0);
          });
          var u2 = global.pako.inflate(bin2, { to: "string" });
          if (u2.indexOf("<mxGraphModel") >= 0) return u2;
        } catch (e2) {
          /* fall through */
        }
      }
    }
    var embedded = diagram.querySelector("mxGraphModel");
    if (embedded) return new XMLSerializer().serializeToString(embedded);
    return null;
  }

  function edgeStyleFromMx(st) {
    var s = "";
    Object.keys(st).forEach(function (k) {
      s += k + "=" + st[k] + ";";
    });
    if (s.indexOf("orthogonalEdgeStyle") >= 0) return "orthogonal";
    if (st.curved === "1" || s.indexOf("curved=1") >= 0) return "curved";
    return "straight";
  }

  /**
   * @returns {{ cells: Array<{mxId:string,payload:object}>, edges: Array<{fromMx:string,toMx:string,style:string}>, note: string }}
   */
  function parseDrawioForOciSketch(xmlText, iconFilenameToTypeKey) {
    var map = iconFilenameToTypeKey || {};
    var modelXml = extractModelXmlString(xmlText);
    if (!modelXml) {
      return {
        cells: [],
        edges: [],
        note: "Could not read diagram data. Save as .drawio from diagrams.net or use uncompressed XML.",
      };
    }
    var doc = new DOMParser().parseFromString(modelXml, "text/xml");
    if (doc.documentElement && doc.documentElement.nodeName === "parsererror") {
      return { cells: [], edges: [], note: "Invalid XML in diagram." };
    }
    var root = doc.querySelector("mxGraphModel > root") || doc.querySelector("root");
    if (!root) {
      return { cells: [], edges: [], note: "No mxGraphModel root found." };
    }
    var cells = [];
    var edges = [];
    var warnings = [];

    Array.from(root.querySelectorAll("mxCell")).forEach(function (cell) {
      var mxId = cell.getAttribute("id");
      if (!mxId || mxId === "0" || mxId === "1") return;
      var isEdge = cell.getAttribute("edge") === "1";
      if (isEdge) {
        var src = cell.getAttribute("source");
        var tgt = cell.getAttribute("target");
        if (src && tgt) {
          edges.push({ fromMx: src, toMx: tgt, style: edgeStyleFromMx(parseMxStyle(cell.getAttribute("style") || "")) });
        }
        return;
      }
      if (cell.getAttribute("vertex") !== "1") return;
      var geo = cell.querySelector("mxGeometry");
      if (!geo) return;
      if (geo.getAttribute("relative") === "1" && !geo.getAttribute("x")) return;
      var x = parseFloat(geo.getAttribute("x") || "0") || 0;
      var y = parseFloat(geo.getAttribute("y") || "0") || 0;
      var w = parseFloat(geo.getAttribute("width") || "120") || 120;
      var h = parseFloat(geo.getAttribute("height") || "80") || 80;
      var label = decodeMxValue(cell.getAttribute("value") || "").trim();
      var styleStr = cell.getAttribute("style") || "";
      var st = parseMxStyle(styleStr);

      if (st.shape === "image" || /\bshape=image\b/.test(styleStr)) {
        var imgUrl = extractImageUrl(st);
        var file = basenameFromUrl(imgUrl);
        var typeKey = map[file];
        if (typeKey) {
          cells.push({
            mxId: mxId,
            payload: {
              kind: "oci",
              typeKey: typeKey,
              x: x,
              y: y,
              customLabel: label || "",
            },
          });
          return;
        }
        warnings.push("Unrecognized image shape " + (file || "(no url)") + " — imported as box.");
      }

      var rounded = st.rounded === "1" || /\brounded=1\b/.test(styleStr);
      var shapeType = "rect";
      if (st.shape === "note" || /\bshape=note\b/.test(styleStr)) shapeType = "note";
      else if (rounded) shapeType = "roundrect";

      var fill = st.fillColor || "rgba(148,163,184,0.12)";
      var stroke = st.strokeColor || "#94a3b8";
      var rad = parseFloat(st.arcSize || "0") || (rounded ? 16 : 4);

      cells.push({
        mxId: mxId,
        payload: {
          kind: "shape",
          shapeType: shapeType,
          x: x,
          y: y,
          shapeW: Math.max(40, Math.round(w)),
          shapeH: Math.max(32, Math.round(h)),
          shapeFill: fill,
          shapeStroke: stroke,
          shapeRadius: shapeType === "roundrect" ? rad : shapeType === "note" ? 6 : 4,
          customLabel: label || (shapeType === "note" ? "Note" : shapeType === "roundrect" ? "Rounded box" : "Box"),
        },
      });
    });

    var note = "";
    if (warnings.length) note = warnings.slice(0, 3).join(" ");
    return { cells: cells, edges: edges, note: note };
  }

  global.parseDrawioForOciSketch = parseDrawioForOciSketch;
})(typeof window !== "undefined" ? window : this);
