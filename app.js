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
    edges.forEach(function (e) {
      var a = nodeCenter(e.from);
      var b = nodeCenter(e.to);
      if (!a || !b) return;
      var line = document.createElementNS("http://www.w3.org/2000/svg", "line");
      line.setAttribute("x1", a.x);
      line.setAttribute("y1", a.y);
      line.setAttribute("x2", b.x);
      line.setAttribute("y2", b.y);
      line.setAttribute("stroke", "rgba(139,152,165,0.85)");
      line.setAttribute("stroke-width", "2");
      svg.appendChild(line);
    });
  }

  function renderNodes() {
    var layer = $("nodes-layer");
    if (!layer) return;
    layer.innerHTML = "";
    nodes.forEach(function (n) {
      var ld = layoutDef(n.typeKey);
      var el = document.createElement("div");
      el.className = "node node--icon cat-" + ld.cat;
      el.dataset.uid = n.uid;
      el.style.left = n.x + "px";
      el.style.top = n.y + "px";
      el.style.width = NODE_BOX_W + "px";
      el.style.minHeight = NODE_BOX_H + "px";
      var img = document.createElement("img");
      img.className = "node-icon";
      img.src = ld.iconUrl;
      img.alt = "";
      img.loading = "lazy";
      img.referrerPolicy = "no-referrer";
      img.draggable = false;
      var cap = document.createElement("div");
      cap.className = "node-label";
      cap.textContent = n.customLabel || ld.label;
      el.appendChild(img);
      el.appendChild(cap);
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
      if (!exists) edges.push({ from: selectedUid, to: uid });
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
    var ld = layoutDef(n.typeKey);
    var label = window.prompt("Label", n.customLabel || ld.label);
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
    nodes.push({ uid: uid(), typeKey: typeKey, x: x || 80 + (nodes.length % 5) * 200, y: y || 80 + Math.floor(nodes.length / 5) * 100 });
    renderAll();
  }

  function buildPalette() {
    var host = $("palette-groups");
    if (!host) return;
    host.innerHTML = "";
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
      nodes.push({ uid: u, typeKey: k, x: x, y: y });
      added.push(u);
      col++;
      if (col > 4) {
        col = 0;
        row++;
      }
    });
    for (var j = 1; j < added.length; j++) {
      edges.push({ from: added[j - 1], to: added[j] });
    }
    $("prompt-status").textContent = "Placed " + keys.length + " components and chained edges in prompt order.";
    renderAll();
  }

  function exportNodesForDrawio() {
    return nodes.map(function (n) {
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
          renderAll();
        } catch (err) {
          window.alert("Invalid JSON");
        }
        ev.target.value = "";
      };
      r.readAsText(f);
    });
    $("btn-undo").addEventListener("click", undo);
    $("btn-apply-prompt").addEventListener("click", applyPrompt);
  }

  $("canvas").addEventListener("click", function (e) {
    if (e.target.closest && e.target.closest(".node")) return;
    if (e.target.id === "canvas" || e.target.id === "nodes-layer") {
      selectedUid = null;
      renderAll();
    }
  });

  buildPalette();
  wireToolbar();
  renderAll();
})();
