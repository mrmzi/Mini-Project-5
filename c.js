var body = document.body;
var key = document.querySelectorAll("p");
body.addEventListener("keypress", change);
function change(event) {
  for (i = 0; i <= 25; i++) {
    if ("Key" + key[i].innerHTML == event.code) {
      key[i].classList.toggle("Feshar");
    }
  }
}
body.addEventListener("keyup", hey);
function hey(event) {
  for (i = 0; i <= 25; i++) {
    if (key[i].innerHTML == event.code.replace("Key","")) {
      key[i].classList.toggle("Feshar");
    }
  }
}
//var b=event.code
//key[a].classlist.toggle('feshar)
//keyA -->A
