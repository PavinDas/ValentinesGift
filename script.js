// script.js
document.getElementById("revealButton").addEventListener("click", function () {
  document.getElementById("message").style.display = "none"; // Hide initial message
  document.getElementById("revealMessage").style.display = "block";
});

document.getElementById("yesButton").addEventListener("click", function () {
  document.getElementById("revealMessage").style.display = "none";
  document.getElementById("gifContainer").style.display = "block";
  document.getElementById("revealButton").style.display = "none";
});

const noButton = document.getElementById("noButton");

noButton.addEventListener("mouseover", () => {
  const maxX = window.innerWidth - noButton.offsetWidth;
  const maxY = window.innerHeight - noButton.offsetHeight;

  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  noButton.style.position = "absolute";
  noButton.style.left = randomX + "px";
  noButton.style.top = randomY + "px";
});

noButton.addEventListener("click", () => {
  alert("Yes para koppe 🤨");
});
