/**
 * Build diagrams.net (draw.io) XML from nodes + edges.
 * Nodes: { uid, label, x, y, w, h, fillColor, strokeColor, fontColor, rounded }
 * Edges: { from, to } (node uids)
 */
function escapeXml(s) {
  return String(s || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function exportDrawioXml(diagramName, nodes, edges) {
  var cellId = 2;
  var uidToMx = { "0": "0", "1": "1" };
  var cells = [];

  cells.push('<mxCell id="0"/>');
  cells.push('<mxCell id="1" parent="0"/>');

  nodes.forEach(function (n) {
    var mid = String(cellId++);
    uidToMx[n.uid] = mid;
    var r = n.rounded ? "1" : "0";
    var style =
      "rounded=" +
      r +
      ";whiteSpace=wrap;html=1;fillColor=" +
      (n.fillColor || "#1e3a4f") +
      ";strokeColor=" +
      (n.strokeColor || "#3b82a6") +
      ";fontColor=" +
      (n.fontColor || "#e8ecf0") +
      ";fontSize=11;";
    cells.push(
      '<mxCell id="' +
        mid +
        '" value="' +
        escapeXml(n.label) +
        '" style="' +
        style +
        '" vertex="1" parent="1">' +
        '<mxGeometry x="' +
        Math.round(n.x) +
        '" y="' +
        Math.round(n.y) +
        '" width="' +
        Math.round(n.w) +
        '" height="' +
        Math.round(n.h) +
        '" as="geometry"/>' +
        "</mxCell>"
    );
  });

  edges.forEach(function (e) {
    var sid = uidToMx[e.from];
    var tid = uidToMx[e.to];
    if (!sid || !tid) return;
    var eid = String(cellId++);
    var style =
      "edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;strokeColor=#8b98a5;fontSize=10;";
    cells.push(
      '<mxCell id="' +
        eid +
        '" value="" style="' +
        style +
        '" edge="1" parent="1" source="' +
        sid +
        '" target="' +
        tid +
        '">' +
        '<mxGeometry relative="1" as="geometry"/>' +
        "</mxCell>"
    );
  });

  var inner =
    '<mxGraphModel dx="1200" dy="800" grid="1" gridSize="10" guides="1" tooltips="1" connect="1" arrows="1" fold="1" page="1" pageScale="1" pageWidth="1600" pageHeight="1200" math="0" shadow="0">' +
    "<root>" +
    cells.join("") +
    "</root>" +
    "</mxGraphModel>";

  return (
    '<mxfile host="OCI-Architecture-Sketch" modified="' +
    new Date().toISOString() +
    '" agent="Mozilla/5.0" version="22.1.0" type="device">' +
    '<diagram id="oci-page" name="' +
    escapeXml(diagramName || "OCI") +
    '">' +
    inner +
    "</diagram>" +
    "</mxfile>"
  );
}

function downloadText(filename, text, mime) {
  var blob = new Blob([text], { type: mime || "application/xml;charset=utf-8" });
  var a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = filename;
  a.click();
  URL.revokeObjectURL(a.href);
}
