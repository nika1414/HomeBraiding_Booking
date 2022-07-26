let navbar = document.querySelector("header");
let sticky = navbar.offsetTop;

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

window.onscroll = function () {
  myFunction();
};

const menu = document.querySelector("ul");
const menuItem = document.querySelectorAll("li");
let allInputs = document.getElementsByTagName("input");
menuItem.forEach((el) => {
  el.addEventListener("click", () => {
    menu.style.position = "inherit";
    for (let i = 0, max = allInputs.length; i < max; i++) {
      if (allInputs[i].type === "checkbox") allInputs[i].checked = false;
    }
  });
});

//give minimum date of today, so customer cannot choose dates before.

let today = new Date();
let dd = today.getDate();
let mm = today.getMonth() + 1;
let yyyy = today.getFullYear();
if (dd < 10) {
  dd = "0" + dd;
}
if (mm < 10) {
  mm = "0" + mm;
}

today = yyyy + "-" + mm + "-" + dd;
document.getElementById("date").setAttribute("min", today);
