// Write Javascript code!
window.onscroll = function () {
  myFunction();
};

// Get the navbar
var navbar = document.querySelector("header");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
  if (window.pageYOffset <= sticky) {
    navbar.classList.remove("sticky");
  }
}
const menu = document.querySelector("ul");
const menuItem = document.querySelectorAll("li");
var allInputs = document.getElementsByTagName("input");
menuItem.forEach((el) => {
  el.addEventListener("click", () => {
    menu.style.position = "inherit";
    for (var i = 0, max = allInputs.length; i < max; i++) {
      if (allInputs[i].type === "checkbox") allInputs[i].checked = false;
    }
  });
});
