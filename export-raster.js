/**
 * Raster export helpers (expects html2canvas + jsPDF globals from CDN).
 */
function exportCanvasToJpeg(canvasEl, filename, quality) {
  if (typeof html2canvas !== "function") {
    window.alert("html2canvas failed to load. Check your network and refresh.");
    return Promise.reject(new Error("no html2canvas"));
  }
  return html2canvas(canvasEl, {
    scale: 2,
    useCORS: true,
    allowTaint: false,
    backgroundColor: "#0d1117",
    logging: false,
  }).then(function (c) {
    var a = document.createElement("a");
    a.download = filename || "oci-diagram.jpg";
    a.href = c.toDataURL("image/jpeg", quality == null ? 0.92 : quality);
    a.click();
  });
}

function exportCanvasToPdf(canvasEl, filename) {
  if (typeof html2canvas !== "function") {
    window.alert("html2canvas failed to load.");
    return Promise.reject(new Error("no html2canvas"));
  }
  var jspdf = window.jspdf;
  if (!jspdf || !jspdf.jsPDF) {
    window.alert("jsPDF failed to load.");
    return Promise.reject(new Error("no jspdf"));
  }
  return html2canvas(canvasEl, {
    scale: 2,
    useCORS: true,
    allowTaint: false,
    backgroundColor: "#0d1117",
    logging: false,
  }).then(function (c) {
    var imgData = c.toDataURL("image/jpeg", 0.9);
    var pdf = new jspdf.jsPDF({ orientation: "landscape", unit: "pt", format: "a4" });
    var pageW = pdf.internal.pageSize.getWidth();
    var pageH = pdf.internal.pageSize.getHeight();
    var iw = c.width;
    var ih = c.height;
    var ratio = Math.min(pageW / iw, pageH / ih) * 0.94;
    var nw = iw * ratio;
    var nh = ih * ratio;
    pdf.addImage(imgData, "JPEG", (pageW - nw) / 2, (pageH - nh) / 2, nw, nh);
    pdf.save(filename || "oci-diagram.pdf");
  });
}
