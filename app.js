(function () {
  "use strict";

  var TYPE_DEF = {
    internet: {
      label: "Internet",
      cat: "net",
      w: 120,
      h: 44,
      rounded: 1,
      fill: "#1e3a4f",
      stroke: "#3b82a6",
    },
    onprem: {
      label: "On-premises",
      cat: "net",
      w: 120,
      h: 44,
      rounded: 1,
      fill: "#1e3a4f",
      stroke: "#3b82a6",
    },
    fastconnect: {
      label: "FastConnect",
      cat: "net",
      w: 130,
      h: 44,
      rounded: 1,
      fill: "#1e3a4f",
      stroke: "#3b82a6",
    },
    drg: {
      label: "Dynamic Routing Gateway",
      cat: "net",
      w: 160,
      h: 44,
      rounded: 1,
      fill: "#1e3a4f",
      stroke: "#3b82a6",
    },
    vcn: {
      label: "VCN",
      cat: "net",
      w: 100,
      h: 40,
      rounded: 0,
      fill: "#152535",
      stroke: "#60a5fa",
    },
    igw: {
      label: "Internet Gateway",
      cat: "net",
      w: 140,
      h: 44,
      rounded: 1,
      fill: "#1e3a4f",
      stroke: "#3b82a6",
    },
    nat: {
      label: "NAT Gateway",
      cat: "net",
      w: 130,
      h: 44,
      rounded: 1,
      fill: "#1e3a4f",
      stroke: "#3b82a6",
    },
    svcgw: {
      label: "Service Gateway",
      cat: "net",
      w: 150,
      h: 44,
      rounded: 1,
      fill: "#1e3a4f",
      stroke: "#3b82a6",
    },
    lpg: {
      label: "Local Peering Gateway",
      cat: "net",
      w: 170,
      h: 44,
      rounded: 1,
      fill: "#1e3a4f",
      stroke: "#3b82a6",
    },
    subnet: {
      label: "Subnet",
      cat: "net",
      w: 110,
      h: 40,
      rounded: 1,
      fill: "#1e3a4f",
      stroke: "#3b82a6",
    },
    lb: {
      label: "Load Balancer",
      cat: "net",
      w: 130,
      h: 44,
      rounded: 1,
      fill: "#1e3a4f",
      stroke: "#3b82a6",
    },
    dns: {
      label: "DNS",
      cat: "net",
      w: 90,
      h: 40,
      rounded: 1,
      fill: "#1e3a4f",
      stroke: "#3b82a6",
    },
    compute: {
      label: "Compute",
      cat: "comp",
      w: 110,
      h: 44,
      rounded: 1,
      fill: "#1e2f1e",
      stroke: "#4caf50",
    },
    oke: {
      label: "OKE",
      cat: "comp",
      w: 90,
      h: 40,
      rounded: 1,
      fill: "#1e2f1e",
      stroke: "#4caf50",
    },
    fn: {
      label: "Functions",
      cat: "comp",
      w: 110,
      h: 40,
      rounded: 1,
      fill: "#1e2f1e",
      stroke: "#4caf50",
    },
    apigw: {
      label: "API Gateway",
      cat: "comp",
      w: 120,
      h: 44,
      rounded: 1,
      fill: "#1e2f1e",
      stroke: "#4caf50",
    },
    bvc: {
      label: "Block Volume",
      cat: "data",
      w: 120,
      h: 44,
      rounded: 1,
      fill: "#2f1e3a",
      stroke: "#ab47bc",
    },
    os: {
      label: "Object Storage",
      cat: "data",
      w: 130,
      h: 44,
      rounded: 1,
      fill: "#2f1e3a",
      stroke: "#ab47bc",
    },
    fs: {
      label: "File Storage",
      cat: "data",
      w: 120,
      h: 44,
      rounded: 1,
      fill: "#2f1e3a",
      stroke: "#ab47bc",
    },
    dbsystem: {
      label: "DB System",
      cat: "data",
      w: 110,
      h: 44,
      rounded: 1,
      fill: "#2f1e3a",
      stroke: "#ab47bc",
    },
    atp: {
      label: "Autonomous DB",
      cat: "data",
      w: 130,
      h: 44,
      rounded: 1,
      fill: "#2f1e3a",
      stroke: "#ab47bc",
    },
    exadata: {
      label: "Exadata",
      cat: "data",
      w: 100,
      h: 40,
      rounded: 1,
      fill: "#2f1e3a",
      stroke: "#ab47bc",
    },
    iam: {
      label: "IAM",
      cat: "id",
      w: 90,
      h: 40,
      rounded: 1,
      fill: "#3a2e1e",
      stroke: "#f59e0b",
    },
    idcs: {
      label: "IDCS / Identity",
      cat: "id",
      w: 130,
      h: 44,
      rounded: 1,
      fill: "#3a2e1e",
      stroke: "#f59e0b",
    },
    vault: {
      label: "Vault",
      cat: "id",
      w: 90,
      h: 40,
      rounded: 1,
      fill: "#3a2e1e",
      stroke: "#f59e0b",
    },
    waf: {
      label: "WAF",
      cat: "id",
      w: 80,
      h: 40,
      rounded: 1,
      fill: "#3a2e1e",
      stroke: "#f59e0b",
    },
    cg: {
      label: "Cloud Guard",
      cat: "id",
      w: 120,
      h: 44,
      rounded: 1,
      fill: "#3a2e1e",
      stroke: "#f59e0b",
    },
    monitoring: {
      label: "Monitoring",
      cat: "obs",
      w: 120,
      h: 44,
      rounded: 1,
      fill: "#1e2a3a",
      stroke: "#38bdf8",
    },
    logging: {
      label: "Logging",
      cat: "obs",
      w: 100,
      h: 40,
      rounded: 1,
      fill: "#1e2a3a",
      stroke: "#38bdf8",
    },
    notifications: {
      label: "Notifications",
      cat: "obs",
      w: 120,
      h: 44,
      rounded: 1,
      fill: "#1e2a3a",
      stroke: "#38bdf8",
    },
    scan: {
      label: "Vulnerability Scanning",
      cat: "id",
      w: 170,
      h: 44,
      rounded: 1,
      fill: "#3a2e1e",
      stroke: "#f59e0b",
    },
  };

  /** OCI SVGs from Oracle oci-designer-toolkit palette (UPL-2.0): https://github.com/oracle/oci-designer-toolkit */
  var OCI_ICON_BASE =
    "https://raw.githubusercontent.com/oracle/oci-designer-toolkit/master/okitclassic/okitserver/static/okit/palette/svg/";

  function ociIconFile(file) {
    return OCI_ICON_BASE + file;
  }

  var ICON_BY_TYPE = {
    internet: "CloudService.svg",
    onprem: "CustomerPremises.svg",
    fastconnect: "FastConnect.svg",
    drg: "DynamicRoutingGatewayDRG.svg",
    vcn: "VirtualCloudNetworkVCN.svg",
    igw: "InternetGateway.svg",
    nat: "NATGateway.svg",
    svcgw: "ServiceGateway.svg",
    lpg: "LocalPeeringGatewayLPG.svg",
    subnet: "NetworkSecurityGroup.svg",
    lb: "LoadBalancerLB.svg",
    dns: "DomainNameSystemDNS.svg",
    compute: "VirtualMachine.svg",
    oke: "ContainerEngineForKubernetes.svg",
    fn: "Functions.svg",
    apigw: "APIGateway.svg",
    bvc: "BlockStorage.svg",
    os: "ObjectStorage.svg",
    fs: "FileStorage.svg",
    dbsystem: "DatabaseSystemDBS.svg",
    atp: "AutonomousTransactionProcessingATP.svg",
    exadata: "ExadataDatabaseSystem.svg",
    iam: "IAM.svg",
    idcs: "UserGroup.svg",
    vault: "Vault.svg",
    waf: "WebApplicationFirewall.svg",
    cg: "CloudGuard.svg",
    monitoring: "Monitoring.svg",
    logging: "Logging.svg",
    notifications: "Notifications.svg",
    scan: "Audit.svg",
  };

  var NODE_BOX_W = 108;
  var NODE_BOX_H = 96;

  function layoutDef(typeKey) {
    var d = TYPE_DEF[typeKey] || TYPE_DEF.compute;
    var file = ICON_BY_TYPE[typeKey] || ICON_BY_TYPE.compute;
    return {
      cat: d.cat,
      label: d.label,
      fill: d.fill,
      stroke: d.stroke,
      rounded: d.rounded,
      iconUrl: ociIconFile(file),
    };
  }

  var PHRASES = [];
  function reg(key, list) {
    list.forEach(function (p) {
      PHRASES.push({ key: key, phrase: p.toLowerCase().replace(/\s+/g, " ").trim() });
    });
  }

  reg("internet", ["internet", "public internet"]);
  reg("onprem", ["on-premises", "onpremises", "on prem", "onprem", "data center", "datacenter"]);
  reg("fastconnect", ["fastconnect", "fast connect", "fc "]);
  reg("drg", ["dynamic routing gateway", "drg"]);
  reg("vcn", ["virtual cloud network", "vcn"]);
  reg("igw", ["internet gateway", "igw"]);
  reg("nat", ["nat gateway", "nat "]);
  reg("svcgw", ["service gateway", "svc gateway", "service gw"]);
  reg("lpg", ["local peering gateway", "local peering"]);
  reg("subnet", ["private subnet", "public subnet", "subnet"]);
  reg("lb", ["load balancer", "layer 7", "layer7", "l7 lb", "lb "]);
  reg("dns", ["dns"]);
  reg("compute", ["compute instance", "compute instances", "compute", "vm", "virtual machine"]);
  reg("oke", ["oracle kubernetes engine", "kubernetes engine", "oke", "kubernetes"]);
  reg("fn", ["functions", "function"]);
  reg("apigw", ["api gateway", "apigw"]);
  reg("bvc", ["block volume", "block storage"]);
  reg("os", ["object storage", "bucket"]);
  reg("fs", ["file storage", "nfs"]);
  reg("dbsystem", ["base database", "db system", "oracle db"]);
  reg("atp", ["autonomous database", "autonomous db", "atp", "adb"]);
  reg("exadata", ["exadata", "exadata cloud"]);
  reg("iam", ["identity and access management", "iam"]);
  reg("idcs", ["idcs", "identity cloud"]);
  reg("vault", ["key vault", "vault"]);
  reg("waf", ["web application firewall", "waf"]);
  reg("cg", ["cloud guard"]);
  reg("monitoring", ["monitoring", "grafana", "zabbix", "metrics"]);
  reg("logging", ["logging", "log analytics"]);
  reg("notifications", ["notifications", "ons"]);
  reg("scan", ["vulnerability", "scanning"]);

  PHRASES.sort(function (a, b) {
    return b.phrase.length - a.phrase.length;
  });

  var PALETTE_GROUPS = [
    {
      title: "Networking",
      keys: [
        "internet",
        "onprem",
        "fastconnect",
        "drg",
        "vcn",
        "igw",
        "nat",
        "svcgw",
        "lpg",
        "subnet",
        "lb",
        "dns",
      ],
    },
    { title: "Compute", keys: ["compute", "oke", "fn", "apigw"] },
    { title: "Data", keys: ["bvc", "os", "fs", "dbsystem", "atp", "exadata"] },
    { title: "Identity & security", keys: ["iam", "idcs", "vault", "waf", "cg", "scan"] },
    { title: "Observability", keys: ["monitoring", "logging", "notifications"] },
  ];

  var nodes = [];
  var edges = [];
  var history = [];
  var nextUid = 1;
  var selectedUid = null;
  var dragState = null;

  function isShapeNode(n) {
    return n && n.kind === "shape";
  }

  function edgeDrawStyle(e) {
    return e.style || "straight";
  }

  function newEdgeStyle() {
    var sel = $("connector-style");
    return (sel && sel.value) || "straight";
  }

  function normalizeImportedEdges() {
    edges.forEach(function (e) {
      if (!e.style) e.style = "straight";
    });
  }

  function normalizeImportedNodes() {
    nodes.forEach(function (n) {
      if (!n.kind) n.kind = isShapeNode(n) ? "shape" : "oci";
    });
  }

  function edgePathD(ax, ay, bx, by, style) {
    if (style === "orthogonal") {
      var mx = (ax + bx) / 2;
      return "M " + ax + " " + ay + " L " + mx + " " + ay + " L " + mx + " " + by + " L " + bx + " " + by;
    }
    if (style === "curved") {
      var cx = (ax + bx) / 2;
      var cy = (ay + by) / 2 - Math.min(120, Math.abs(bx - ax) * 0.25);
      return "M " + ax + " " + ay + " Q " + cx + " " + cy + " " + bx + " " + by;
    }
    return "M " + ax + " " + ay + " L " + bx + " " + by;
  }

  function $(id) {
    return document.getElementById(id);
  }

  function uid() {
    return "n" + nextUid++;
  }

  function snapshot() {
    return JSON.stringify({ nodes: nodes, edges: edges, nextUid: nextUid });
  }

  function restore(json) {
    var o = JSON.parse(json);
    nodes = o.nodes;
    edges = o.edges;
    nextUid = o.nextUid || nextUid;
    selectedUid = null;
    normalizeImportedNodes();
    normalizeImportedEdges();
    renderAll();
  }

  function pushHistory() {
    history.push(snapshot());
    if (history.length > 40) history.shift();
    $("btn-undo").disabled = false;
  }

  function undo() {
    if (history.length === 0) return;
    var prev = history.pop();
    restore(prev);
    $("btn-undo").disabled = history.length === 0;
  }

  function nodeCenter(uid) {
    var el = document.querySelector('.node[data-uid="' + uid + '"]');
    var canvas = $("canvas");
    if (!el || !canvas) return null;
    var er = el.getBoundingClientRect();
    var cr = canvas.getBoundingClientRect();
    return {
      x: er.left - cr.left + er.width / 2 + canvas.scrollLeft,
      y: er.top - cr.top + er.height / 2 + canvas.scrollTop,
    };
  }

  function renderEdges() {
    var svg = $("edges-svg");
    if (!svg) return;
    while (svg.firstChild) svg.removeChild(svg.firstChild);
    var w = Math.max($("nodes-layer").scrollWidth, 1400);
    var h = Math.max($("nodes-layer").scrollHeight, 900);
    svg.setAttribute("width", w);
    svg.setAttribute("height", h);
    edges.forEach(function (e, idx) {
      var a = nodeCenter(e.from);
      var b = nodeCenter(e.to);
      if (!a || !b) return;
      var st = edgeDrawStyle(e);
      var d = edgePathD(a.x, a.y, b.x, b.y, st);
      var path = document.createElementNS("http://www.w3.org/2000/svg", "path");
      path.setAttribute("d", d);
      path.setAttribute("fill", "none");
      path.setAttribute("stroke", "rgba(139,152,165,0.9)");
      path.setAttribute("stroke-width", "2");
      path.setAttribute("stroke-linejoin", "round");
      path.setAttribute("stroke-linecap", "round");
      path.dataset.edgeIndex = String(idx);
      path.style.pointerEvents = "none";
      svg.appendChild(path);
      var hit = document.createElementNS("http://www.w3.org/2000/svg", "path");
      hit.setAttribute("d", d);
      hit.setAttribute("fill", "none");
      hit.setAttribute("stroke", "transparent");
      hit.setAttribute("stroke-width", "14");
      hit.style.cursor = "pointer";
      hit.dataset.edgeIndex = String(idx);
      hit.addEventListener("click", function (ev) {
        ev.stopPropagation();
        cycleEdgeStyle(idx);
      });
      svg.appendChild(hit);
    });
  }

  function cycleEdgeStyle(idx) {
    var e = edges[idx];
    if (!e) return;
    pushHistory();
    var order = ["straight", "orthogonal", "curved"];
    var i = order.indexOf(edgeDrawStyle(e));
    e.style = order[(i + 1) % order.length];
    renderAll();
    $("mode-label").textContent = "Connector style: " + e.style + " (click line to cycle)";
  }

  function renderNodes() {
    var layer = $("nodes-layer");
    if (!layer) return;
    layer.innerHTML = "";
    nodes.forEach(function (n) {
      var el = document.createElement("div");
      el.dataset.uid = n.uid;
      el.style.left = n.x + "px";
      el.style.top = n.y + "px";
      if (isShapeNode(n)) {
        el.className = "node node--shape shape-" + (n.shapeType || "rect");
        el.style.width = (n.shapeW || 200) + "px";
        el.style.minHeight = (n.shapeH || 100) + "px";
        el.style.background = n.shapeFill || "rgba(255,255,255,0.06)";
        el.style.borderColor = n.shapeStroke || "#64748b";
        el.style.borderRadius = (n.shapeRadius != null ? n.shapeRadius : 8) + "px";
        var cap = document.createElement("div");
        cap.className = "node-label shape-label";
        cap.textContent = n.customLabel || (n.shapeType === "note" ? "Note" : "Box");
        el.appendChild(cap);
      } else {
        var ld = layoutDef(n.typeKey);
        el.className = "node node--icon cat-" + ld.cat;
        el.style.width = NODE_BOX_W + "px";
        el.style.minHeight = NODE_BOX_H + "px";
        var img = document.createElement("img");
        img.className = "node-icon";
        img.src = ld.iconUrl;
        img.alt = "";
        img.loading = "lazy";
        img.referrerPolicy = "no-referrer";
        img.draggable = false;
        var cap2 = document.createElement("div");
        cap2.className = "node-label";
        cap2.textContent = n.customLabel || ld.label;
        el.appendChild(img);
        el.appendChild(cap2);
      }
      if (n.uid === selectedUid) el.classList.add("selected");
      el.addEventListener("mousedown", onNodeMouseDown);
      el.addEventListener("click", onNodeClick);
      el.addEventListener("dblclick", onNodeDblClick);
      layer.appendChild(el);
    });
    requestAnimationFrame(renderEdges);
  }

  function renderAll() {
    renderNodes();
  }

  function onNodeMouseDown(e) {
    if (e.button !== 0) return;
    e.stopPropagation();
    var uid = e.currentTarget.dataset.uid;
    var n = nodes.find(function (x) {
      return x.uid === uid;
    });
    if (!n) return;
    pushHistory();
    dragState = {
      uid: uid,
      startX: e.clientX,
      startY: e.clientY,
      origX: n.x,
      origY: n.y,
    };
    document.addEventListener("mousemove", onDragMove);
    document.addEventListener("mouseup", onDragUp);
  }

  function onDragMove(e) {
    if (!dragState) return;
    var n = nodes.find(function (x) {
      return x.uid === dragState.uid;
    });
    if (!n) return;
    n.x = dragState.origX + (e.clientX - dragState.startX);
    n.y = dragState.origY + (e.clientY - dragState.startY);
    var el = document.querySelector('.node[data-uid="' + n.uid + '"]');
    if (el) {
      el.style.left = n.x + "px";
      el.style.top = n.y + "px";
    }
    renderEdges();
  }

  function onDragUp() {
    dragState = null;
    document.removeEventListener("mousemove", onDragMove);
    document.removeEventListener("mouseup", onDragUp);
  }

  function onNodeClick(e) {
    var uid = e.currentTarget.dataset.uid;
    if (e.shiftKey && selectedUid && selectedUid !== uid) {
      pushHistory();
      var exists = edges.some(function (x) {
        return x.from === selectedUid && x.to === uid;
      });
      if (!exists) edges.push({ from: selectedUid, to: uid, style: newEdgeStyle() });
      selectedUid = uid;
      renderAll();
      $("mode-label").textContent = "Linked " + selectedUid;
      return;
    }
    selectedUid = uid;
    renderAll();
    $("mode-label").textContent = "Selected · Shift+click another node to connect";
  }

  function onNodeDblClick(e) {
    var uid = e.currentTarget.dataset.uid;
    var n = nodes.find(function (x) {
      return x.uid === uid;
    });
    if (!n) return;
    var defLabel = isShapeNode(n)
      ? n.customLabel || (n.shapeType === "note" ? "Note" : "Box")
      : (n.customLabel || layoutDef(n.typeKey).label);
    var label = window.prompt("Label", defLabel);
    if (label != null && label.trim()) {
      pushHistory();
      n.customLabel = label.trim();
      var cap = e.currentTarget.querySelector(".node-label");
      if (cap) cap.textContent = n.customLabel;
    }
  }

  function addNode(typeKey, x, y) {
    pushHistory();
    var def = TYPE_DEF[typeKey];
    if (!def) typeKey = "compute";
    nodes.push({
      uid: uid(),
      kind: "oci",
      typeKey: typeKey,
      x: x || 80 + (nodes.length % 5) * 200,
      y: y || 80 + Math.floor(nodes.length / 5) * 100,
    });
    renderAll();
  }

  function shapePreset(shapeType) {
    var presets = {
      rect: {
        w: 220,
        h: 130,
        fill: "rgba(148,163,184,0.12)",
        stroke: "#94a3b8",
        r: 4,
        label: "Rectangle",
      },
      roundrect: {
        w: 220,
        h: 120,
        fill: "rgba(30,58,79,0.55)",
        stroke: "#60a5fa",
        r: 16,
        label: "Rounded box",
      },
      note: {
        w: 200,
        h: 110,
        fill: "rgba(250,204,21,0.18)",
        stroke: "#facc15",
        r: 6,
        label: "Note",
      },
    };
    return presets[shapeType] || presets.rect;
  }

  function addShape(shapeType, x, y) {
    pushHistory();
    var st = shapeType || "rect";
    var p = shapePreset(st);
    nodes.push({
      uid: uid(),
      kind: "shape",
      shapeType: st,
      x: x || 100 + (nodes.length % 4) * 240,
      y: y || 120 + Math.floor(nodes.length / 4) * 140,
      shapeW: p.w,
      shapeH: p.h,
      shapeFill: p.fill,
      shapeStroke: p.stroke,
      shapeRadius: p.r,
      customLabel: p.label,
    });
    renderAll();
  }

  function buildPalette() {
    var host = $("palette-groups");
    if (!host) return;
    host.innerHTML = "";
    var shapesWrap = document.createElement("div");
    shapesWrap.className = "palette-group";
    shapesWrap.innerHTML = "<h3>Boxes &amp; notes</h3>";
    [
      { st: "rect", label: "Rectangle" },
      { st: "roundrect", label: "Rounded box" },
      { st: "note", label: "Sticky note" },
    ].forEach(function (item) {
      var b = document.createElement("button");
      b.type = "button";
      b.className = "pal-item pal-item-shape";
      b.textContent = item.label;
      b.addEventListener("click", function () {
        addShape(item.st);
      });
      shapesWrap.appendChild(b);
    });
    host.appendChild(shapesWrap);

    PALETTE_GROUPS.forEach(function (g) {
      var wrap = document.createElement("div");
      wrap.className = "palette-group";
      wrap.innerHTML = "<h3>" + g.title + "</h3>";
      g.keys.forEach(function (key) {
        var def = TYPE_DEF[key];
        if (!def) return;
        var ld = layoutDef(key);
        var b = document.createElement("button");
        b.type = "button";
        b.className = "pal-item cat-" + def.cat;
        var pi = document.createElement("img");
        pi.className = "pal-thumb";
        pi.src = ld.iconUrl;
        pi.alt = "";
        pi.loading = "lazy";
        pi.referrerPolicy = "no-referrer";
        pi.draggable = false;
        var tx = document.createElement("span");
        tx.className = "pal-text";
        tx.textContent = def.label;
        b.appendChild(pi);
        b.appendChild(tx);
        b.addEventListener("click", function () {
          addNode(key);
        });
        wrap.appendChild(b);
      });
      host.appendChild(wrap);
    });
  }

  function normalizePrompt(s) {
    return s
      .toLowerCase()
      .replace(/[^\w\s]/g, " ")
      .replace(/\s+/g, " ")
      .trim();
  }

  function matchPromptKeys(text) {
    var t = normalizePrompt(text);
    var keys = [];
    var i = 0;
    while (i < t.length) {
      while (i < t.length && t[i] === " ") i++;
      if (i >= t.length) break;
      var matched = false;
      for (var p = 0; p < PHRASES.length; p++) {
        var ph = PHRASES[p].phrase;
        if (t.slice(i, i + ph.length) === ph) {
          var end = i + ph.length;
          if (end < t.length && /[a-z0-9]/.test(t[end])) continue;
          keys.push(PHRASES[p].key);
          i = end;
          matched = true;
          break;
        }
      }
      if (!matched) {
        var next = t.indexOf(" ", i + 1);
        if (next === -1) next = t.length;
        i = next + 1;
      }
    }
    return keys;
  }

  function applyPrompt() {
    var raw = $("prompt-input").value || "";
    var keys = matchPromptKeys(raw);
    if (keys.length === 0) {
      $("prompt-status").textContent = "No known OCI keywords found — try words like VCN, subnet, NAT, load balancer, compute, ATP.";
      return;
    }
    if ($("prompt-clear").checked) {
      history.length = 0;
      nodes = [];
      edges = [];
      nextUid = 1;
      selectedUid = null;
    }
    pushHistory();
    var baseX = 60;
    var baseY = 60;
    var col = 0;
    var row = 0;
    var added = [];
    keys.forEach(function (k) {
      var x = baseX + col * 200;
      var y = baseY + row * 95;
      var u = uid();
      nodes.push({ uid: u, kind: "oci", typeKey: k, x: x, y: y });
      added.push(u);
      col++;
      if (col > 4) {
        col = 0;
        row++;
      }
    });
    var es = newEdgeStyle();
    for (var j = 1; j < added.length; j++) {
      edges.push({ from: added[j - 1], to: added[j], style: es });
    }
    $("prompt-status").textContent = "Placed " + keys.length + " components and chained edges in prompt order.";
    renderAll();
  }

  function stripJsonFence(t) {
    var s = String(t || "").trim();
    if (s.indexOf("```") === 0) {
      s = s.replace(/^```[a-zA-Z0-9]*\s*/, "").replace(/\s*```\s*$/, "");
    }
    return s.trim();
  }

  function applyAiDiagram(spec) {
    if (!spec || !Array.isArray(spec.nodes)) throw new Error("Invalid JSON: missing nodes array");
    if ($("ai-clear") && $("ai-clear").checked) {
      history.length = 0;
      nodes = [];
      edges = [];
      nextUid = 1;
      selectedUid = null;
    }
    pushHistory();
    var ids = [];
    spec.nodes.forEach(function (raw, i) {
      var u = uid();
      ids[i] = u;
      var x = typeof raw.x === "number" ? raw.x : 60 + (i % 4) * 220;
      var y = typeof raw.y === "number" ? raw.y : 60 + Math.floor(i / 4) * 130;
      var kind = raw.kind || raw.type || "oci";
      if (kind === "shape") {
        var st = raw.shapeType || "rect";
        if (["rect", "roundrect", "note"].indexOf(st) === -1) st = "rect";
        var p = shapePreset(st);
        nodes.push({
          uid: u,
          kind: "shape",
          shapeType: st,
          x: x,
          y: y,
          shapeW: typeof raw.w === "number" ? raw.w : p.w,
          shapeH: typeof raw.h === "number" ? raw.h : p.h,
          shapeFill: p.fill,
          shapeStroke: p.stroke,
          shapeRadius: p.r,
          customLabel: raw.label != null && String(raw.label).trim() ? String(raw.label).trim() : p.label,
        });
      } else {
        var tk = raw.typeKey || raw.service || "compute";
        if (!TYPE_DEF[tk]) tk = "compute";
        nodes.push({
          uid: u,
          kind: "oci",
          typeKey: tk,
          x: x,
          y: y,
          customLabel: raw.label != null && String(raw.label).trim() ? String(raw.label).trim() : "",
        });
      }
    });
    (spec.edges || []).forEach(function (e) {
      var a = ids[e.from];
      var b = ids[e.to];
      if (!a || !b) return;
      var st = e.style && ["straight", "orthogonal", "curved"].indexOf(e.style) >= 0 ? e.style : "straight";
      edges.push({ from: a, to: b, style: st });
    });
    selectedUid = null;
    normalizeImportedEdges();
    renderAll();
  }

  function runAiLayout() {
    var keyEl = $("gemini-api-key");
    var key = (keyEl && keyEl.value.trim()) || sessionStorage.getItem("oci_sketch_gemini_key");
    if (!key) {
      $("prompt-status").textContent = "Paste a Gemini API key to use AI (stored in session storage for this tab).";
      return;
    }
    sessionStorage.setItem("oci_sketch_gemini_key", key);
    if (keyEl && !keyEl.value) keyEl.value = key;
    var userPrompt = ($("ai-prompt") && $("ai-prompt").value.trim()) || "";
    if (!userPrompt) {
      $("prompt-status").textContent = "Describe the diagram you want in the AI box.";
      return;
    }
    var model = ($("gemini-model") && $("gemini-model").value) || "gemini-2.0-flash";
    var ociKeys = Object.keys(TYPE_DEF).join(", ");
    var instruction =
      "You are an Oracle Cloud Infrastructure diagram assistant. Return ONLY JSON (no markdown fences). Schema:\n" +
      '{"clear":boolean,"nodes":[' +
      '{"kind":"oci","typeKey":"<one of: ' +
      ociKeys +
      '>","x":number,"y":number,"label":string},' +
      '{"kind":"shape","shapeType":"rect|roundrect|note","x":number,"y":number,"w":number,"h":number,"label":string}' +
      '], "edges":[{"from":number,"to":number,"style":"straight|orthogonal|curved"}]}\n' +
      "from/to are zero-based indexes into nodes. Use coordinates roughly 40–900. Include useful links.\n" +
      "User request:\n" +
      userPrompt;

    $("prompt-status").textContent = "Calling Gemini…";

    fetch(
      "https://generativelanguage.googleapis.com/v1beta/models/" +
        encodeURIComponent(model) +
        ":generateContent?key=" +
        encodeURIComponent(key),
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ role: "user", parts: [{ text: instruction }] }],
          generationConfig: {
            temperature: 0.35,
            responseMimeType: "application/json",
          },
        }),
      }
    )
      .then(function (r) {
        return r.json().then(function (j) {
          if (!r.ok) {
            throw new Error((j && j.error && j.error.message) || "Gemini request failed");
          }
          return j;
        });
      })
      .then(function (data) {
        if (!data.candidates || !data.candidates[0]) {
          throw new Error("No candidates returned (quota, safety filter, or empty response).");
        }
        var p0 = data.candidates[0].content.parts[0];
        var parsed;
        if (p0 && p0.text != null) {
          parsed = JSON.parse(stripJsonFence(p0.text));
        } else if (p0 && typeof p0 === "object") {
          parsed = p0;
        } else {
          throw new Error("Unexpected Gemini response shape");
        }
        applyAiDiagram(parsed);
        $("prompt-status").textContent = "AI layout applied (" + (parsed.nodes && parsed.nodes.length) + " nodes).";
      })
      .catch(function (err) {
        $("prompt-status").textContent = "AI error: " + (err && err.message ? err.message : String(err));
      });
  }

  function iconFilenameToTypeKeyMap() {
    var m = {};
    Object.keys(ICON_BY_TYPE).forEach(function (k) {
      m[String(ICON_BY_TYPE[k]).toLowerCase()] = k;
    });
    return m;
  }

  function applyDrawioImportBundle(bundle) {
    var idMap = {};
    (bundle.cells || []).forEach(function (c) {
      var u = uid();
      idMap[c.mxId] = u;
      var p = c.payload;
      if (p.kind === "oci") {
        var tk = TYPE_DEF[p.typeKey] ? p.typeKey : "compute";
        nodes.push({
          uid: u,
          kind: "oci",
          typeKey: tk,
          x: p.x,
          y: p.y,
          customLabel: p.customLabel || "",
        });
      } else {
        nodes.push({
          uid: u,
          kind: "shape",
          shapeType: p.shapeType || "rect",
          x: p.x,
          y: p.y,
          shapeW: p.shapeW,
          shapeH: p.shapeH,
          shapeFill: p.shapeFill,
          shapeStroke: p.shapeStroke,
          shapeRadius: p.shapeRadius != null ? p.shapeRadius : 8,
          customLabel: p.customLabel || "",
        });
      }
    });
    (bundle.edges || []).forEach(function (e) {
      var a = idMap[e.fromMx];
      var b = idMap[e.toMx];
      if (!a || !b) return;
      var st = e.style && ["straight", "orthogonal", "curved"].indexOf(e.style) >= 0 ? e.style : "straight";
      edges.push({ from: a, to: b, style: st });
    });
  }

  function exportNodesForDrawio() {
    return nodes.map(function (n) {
      if (isShapeNode(n)) {
        return {
          uid: n.uid,
          label:
            n.customLabel ||
            (n.shapeType === "note" ? "Note" : n.shapeType === "roundrect" ? "Rounded box" : "Box"),
          x: n.x,
          y: n.y,
          w: n.shapeW || 200,
          h: n.shapeH || 100,
          rounded: n.shapeType === "roundrect" ? 1 : 0,
          fillColor: n.shapeFill || "#334155",
          strokeColor: n.shapeStroke || "#94a3b8",
          fontColor: "#e8ecf0",
        };
      }
      var ld = layoutDef(n.typeKey);
      var def = TYPE_DEF[n.typeKey] || TYPE_DEF.compute;
      return {
        uid: n.uid,
        label: n.customLabel || ld.label,
        x: n.x,
        y: n.y,
        w: NODE_BOX_W,
        h: NODE_BOX_H,
        rounded: def.rounded,
        fillColor: def.fill,
        strokeColor: def.stroke,
        fontColor: "#e8ecf0",
        imageUrl: ld.iconUrl,
      };
    });
  }

  function wireToolbar() {
    $("btn-new").addEventListener("click", function () {
      if (!window.confirm("Clear all nodes and edges?")) return;
      pushHistory();
      nodes = [];
      edges = [];
      nextUid = 1;
      selectedUid = null;
      renderAll();
    });
    $("btn-export-drawio").addEventListener("click", function () {
      var xml = exportDrawioXml("OCI architecture", exportNodesForDrawio(), edges);
      downloadText("oci-architecture.drawio", xml, "application/xml;charset=utf-8");
    });
    $("btn-export-jpg").addEventListener("click", function () {
      $("mode-label").textContent = "Rendering JPG…";
      exportCanvasToJpeg($("canvas"), "oci-diagram.jpg", 0.92)
        .then(function () {
          $("mode-label").textContent = "JPG downloaded.";
        })
        .catch(function () {
          $("mode-label").textContent = "JPG export failed (see console).";
        });
    });
    $("btn-export-pdf").addEventListener("click", function () {
      $("mode-label").textContent = "Rendering PDF…";
      exportCanvasToPdf($("canvas"), "oci-diagram.pdf")
        .then(function () {
          $("mode-label").textContent = "PDF downloaded.";
        })
        .catch(function () {
          $("mode-label").textContent = "PDF export failed (see console).";
        });
    });
    $("btn-export-json").addEventListener("click", function () {
      downloadText(
        "oci-architecture.json",
        JSON.stringify({ nodes: nodes, edges: edges, nextUid: nextUid }, null, 2),
        "application/json"
      );
    });
    $("import-json").addEventListener("change", function (ev) {
      var f = ev.target.files && ev.target.files[0];
      if (!f) return;
      var r = new FileReader();
      r.onload = function () {
        try {
          pushHistory();
          var o = JSON.parse(r.result);
          nodes = o.nodes || [];
          edges = o.edges || [];
          nextUid = o.nextUid || 1;
          selectedUid = null;
          normalizeImportedNodes();
          normalizeImportedEdges();
          renderAll();
        } catch (err) {
          window.alert("Invalid JSON");
        }
        ev.target.value = "";
      };
      r.readAsText(f);
    });
    var drawioInput = $("import-drawio");
    if (drawioInput) {
      drawioInput.addEventListener("change", function (ev) {
        var f = ev.target.files && ev.target.files[0];
        if (!f) return;
        var r = new FileReader();
        r.onload = function () {
          try {
            if (typeof parseDrawioForOciSketch !== "function") {
              window.alert("Draw.io import script did not load. Refresh the page.");
              ev.target.value = "";
              return;
            }
            var bundle = parseDrawioForOciSketch(r.result, iconFilenameToTypeKeyMap());
            if (!bundle.cells || bundle.cells.length === 0) {
              window.alert(bundle.note || "No shapes found in this file.");
              ev.target.value = "";
              return;
            }
            pushHistory();
            nodes = [];
            edges = [];
            nextUid = 1;
            selectedUid = null;
            applyDrawioImportBundle(bundle);
            normalizeImportedNodes();
            normalizeImportedEdges();
            renderAll();
            var ec = (bundle.edges && bundle.edges.length) || 0;
            $("mode-label").textContent = "Imported " + bundle.cells.length + " nodes, " + ec + " connectors from .drawio.";
            if ($("prompt-status")) $("prompt-status").textContent = bundle.note || "Draw.io import complete.";
          } catch (err) {
            window.alert("Draw.io import failed: " + (err && err.message ? err.message : String(err)));
          }
          ev.target.value = "";
        };
        r.readAsText(f);
      });
    }
    $("btn-undo").addEventListener("click", undo);
    $("btn-apply-prompt").addEventListener("click", applyPrompt);
    $("btn-ai-layout").addEventListener("click", function () {
      try {
        runAiLayout();
      } catch (err) {
        $("prompt-status").textContent = "AI error: " + (err && err.message ? err.message : String(err));
      }
    });
    var gk = $("gemini-api-key");
    if (gk) {
      var sk = sessionStorage.getItem("oci_sketch_gemini_key");
      if (sk) gk.value = sk;
    }
  }

  $("canvas").addEventListener("click", function (e) {
    if (e.target.closest && e.target.closest(".node")) return;
    if (e.target.dataset && e.target.dataset.edgeIndex != null) return;
    if (e.target.id === "canvas" || e.target.id === "nodes-layer") {
      selectedUid = null;
      renderAll();
    }
  });

  buildPalette();
  wireToolbar();
  renderAll();
})();
