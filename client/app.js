//document.getElementById('image').setAttribute('onclick', 'openImage(this.src)');

window.onload = function() {
  let img = document.getElementsByClassName('image');

  for (let i = 0; i < img.length; i++) {
    img[i].addEventListener('click', function() {
      openImage(this.src)
    });
  }
};

function openImage(src) {
  window.open(src, "_self");
}
