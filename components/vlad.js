function myFunction() {
  var x = document.getElementById("myDIV");
  if (x.innerHTML === "������") {
    x.innerHTML = "���������� �����!";
  } else {
    x.innerHTML = "������";
  }
}