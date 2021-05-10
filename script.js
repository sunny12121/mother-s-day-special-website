var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("home").style.top = "0";
  } else {
    document.getElementById("home").style.top = "-54px";
  }
  prevScrollpos = currentScrollPos;
}
