function myFunction() {
    var nav = document.getElementById("myNavigation");
    if (nav.className === "header__item--middle") {
      nav.className += " responsive";
    } else {
      nav.className = "header__item--middle";
}
}