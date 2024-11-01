import { generateRandomName } from "./nameGenerator.js";

function hideAll() {
    const screens = [".screen1", ".screen2", ".screen3", ".screen4", ".screen5", ".screen6"];
    screens.forEach(selector => {
        const element = document.querySelector(selector);
        if (element) element.style.display = "none";
    });
}

function changeScreen(screenName) {
    hideAll()
    if (document.querySelector(screenName)) document.querySelector(screenName).style.display = "block";
}

document.addEventListener("DOMContentLoaded", function() {
document.querySelectorAll("[class^='toggle-screen']").forEach(button => {
    button.addEventListener("click", function() {
      const screenNumber = button.className.match(/toggle-screen(\d+)/)[1];
      changeScreen(`.screen${screenNumber}`);
    });
  });
});

changeScreen(".screen1")

generateRandomName()