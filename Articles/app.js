document.getElementById('image').setAttribute('onclick', 'openImage(this.src)');

function openImage(src) {
  //window.open(src, "_blank");
  window.open(src, "_self");
}
