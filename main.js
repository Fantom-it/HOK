
const password = document.querySelector("#password");
const toggleVisibility = document.querySelector("#toggle-visibility");
let state = new Map([
  ["password", "text"],
  ["text", "password"],
]);
toggleVisibility.addEventListener("click", () => {
  password.setAttribute("type", state.get(password.getAttribute("type")));
});

const password2 = document.querySelector("#password2");
const toggleVisibility2 = document.querySelector("#toggle-visibility2");
let state2 = new Map([
  ["password", "text"],
  ["text", "password"],
]);
toggleVisibility2.addEventListener("click", () => {
  password2.setAttribute("type", state2.get(password2.getAttribute("type")));
});

const password3 = document.querySelector("#password3");
const toggleVisibility3 = document.querySelector("#toggle-visibility3");
let state3 = new Map([
  ["password", "text"],
  ["text", "password"],
]);
toggleVisibility3.addEventListener("click", () => {
  password3.setAttribute("type", state3.get(password3.getAttribute("type")));
});

function glaz() {
  document
    .getElementById("toggle-visibility")
    .classList.toggle("show-button-glaz");
}
function glaz2() {
  document
    .getElementById("toggle-visibility2")
    .classList.toggle("show-button-glaz");
}
function glaz3() {
  document
    .getElementById("toggle-visibility3")
    .classList.toggle("show-button-glaz");
}


