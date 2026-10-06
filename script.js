// Change the accent color each time the button is clicked
const colors = ["#e4572e", "#2e86e4", "#2ea36b", "#8e44ad"];
let index = 0;

document.getElementById("colorBtn").addEventListener("click", function () {
  index = (index + 1) % colors.length;
  document.documentElement.style.setProperty("--accent", colors[index]);
});

// Show a greeting
document.getElementById("helloBtn").addEventListener("click", function () {
  const name = document.getElementById("nameInput").value;
  const message = document.getElementById("message");

  if (name === "") {
    message.textContent = "Please type your name first.";
  } else {
    message.textContent = "Hello, " + name + "!";
  }
});