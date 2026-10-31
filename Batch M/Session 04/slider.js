let ar = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg"];
let index = 0;

function slider01() {
  document.getElementById("slider").innerHTML =
    `<img src="./img/${ar[index]}" width='280' height='340' />`;
}

function nextImg() {
  index++;
  if (index === ar.length) {
    index = 0;
  }
  slider01();
}

function prevImg() {
  index--;
  if (index === -1) {
    index = ar.length - 1
  }
  slider01()
}
