"use strict";

function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  console.log(audio);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  const button = document.querySelector(`div[data-key="${e.keyCode}"]`);
  button.classList.add("active");
}

function removeTransition(e) {
  console.log(e);
  if (e.propertyName !== "transform") return;
  this.classList.remove("active");
}

const keys = document.querySelectorAll(".key");
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));

window.addEventListener("keydown", playSound);
