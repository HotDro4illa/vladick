function myFunction() {
  var x = document.getElementById("myDIV");
  if (x.innerHTML === "Привет") {
    x.innerHTML = "Замененный текст!";
  } else {
    x.innerHTML = "Привет";
  }
}