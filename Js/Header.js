function myFunction() {
    var nav = document.getElementById("myNavigation");
    if (nav.className === "header__item--middle") {
      nav.className += " responsive";
    } else {
      nav.className = "header__item--middle";
}
}
function openPopup(){
  // Login
  var login = document.getElementById("myLogin");
  
  // Get the button that opens the modal
  var btn_li = document.getElementById("btn-login");
  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close-login")[0];
  
  // When the user clicks the button, open the modal 
  btn_li.onclick = function() {
      login.style.display = "block";
  }
  
  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
      login.style.display = "none";
  }
  
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
  if (event.target == login) {
      login.style.display = "none";
  }
  }
  
// Sign up
var signup = document.getElementById("mySignup");
  
  // Get the button that opens the modal
  var btn_su = document.getElementById("btn-signup");
  
  // Get the <span> element that closes the modal
  var close = document.getElementsByClassName("close-signup")[0];
  
  // When the user clicks the button, open the modal 
  btn_su.onclick = function() {
      signup.style.display = "block";
  }
  
  // When the user clicks on <span> (x), close the modal
      close.onclick = function() {
      signup.style.display = "none";
  }
  
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == signup) {
      signup.style.display = "none";
    }
  }
  }