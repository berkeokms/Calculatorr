let number = document.querySelectorAll(".number");
let sonuc = document.querySelector(".sonuc");
let operator = document.querySelectorAll(".operators");
let topla = document.getElementById("topla");
var sonuc2 = document.getElementById("sonuc2");
var getSelected = "";
var leftPart = "";
var rightPart = "";

number.forEach(function (element) {

  element.onclick = function (e) {

    sonuc.innerHTML += this.value;

    if (getSelected == "") {
      leftPart += this.value;
    } else if (getSelected != "") {
      rightPart += this.value;
    }
  }
});

operator.forEach(function (element) {

  element.onclick = function (e) {



    sonuc.innerHTML += this.value;

    sonuc.innerHTML = "";
    getSelected = this.value;

  }
});

document.getElementById("hesapla").onclick = () => {

  var calculationResult = 0;

  if (getSelected == '+') {

    calculationResult = parseFloat(leftPart) + parseFloat(rightPart);
  } else if (getSelected == '-') {
    calculationResult = parseFloat(leftPart) - parseFloat(rightPart);
  } else if (getSelected == '*') {
    calculationResult = parseFloat(leftPart) * parseFloat(rightPart);
  } else if (getSelected == '/') {
    calculationResult = parseFloat(leftPart) / parseFloat(rightPart);
  }

  sonuc.innerHTML = calculationResult;

  leftPart = sonuc.innerHTML;
  rightPart = '';
  getSelected = '';

}

document.getElementById("sil").onclick = () => {

  leftPart = "";
  rightPart = "";
  getSelected = '';
  sonuc.innerHTML = "";

}