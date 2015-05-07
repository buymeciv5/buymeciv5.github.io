function ScaleFrame() {
  document.getElementsByTagName("iframe")[0].style.border = "0 auto";
  document.getElementsByTagName("iframe")[0].style.width = window.innerWidth;
  document.getElementsByTagName("iframe")[0].style.height = window.innerHeight;

};
window.onLoad = ScaleFrame();
window.onResize = ScaleFrame();
document.onResize = ScaleFrame();
