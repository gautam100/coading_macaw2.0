function loop1() {
  for (let a = 1; a < 11; a+=2) {
    console.log(a);
  }
}

//loop1()

let prnTable = function () {
  let tab = document.getElementById("tab").value;
  let html = ""
  let res = 1
  for (let i = 1; i <= 10; i++) {
    res = tab*i
    html += `${tab} X ${i} = ${res} <br />`
  }
  document.getElementById("result").innerHTML = html
};
