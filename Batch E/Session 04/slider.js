const imgArr = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg"];
let index = 0;

function slider() {
  document.getElementById("slider_container").innerHTML =
    "<img src='./img/" + imgArr[index] + "' width='380' height='350' />";
}
function nextImg(){
    index++
    if(index === imgArr.length){
        index = 0
    }
    document.getElementById("slider_container").innerHTML =
    "<img src='./img/" + imgArr[index] + "' width='380' height='350' />";
}
function prevImg(){
    index--
    if(index === -1){
        index = imgArr.length-1
    }
    document.getElementById("slider_container").innerHTML =
    "<img src='./img/" + imgArr[index] + "' width='380' height='350' />";
}
