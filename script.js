const text = "CRM Specialist & Web Developer";
const typewriter = document.getElementById("typewriter");
let index = 0;

function typeEffect() {
  if (index < text.length) {
    typewriter.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeEffect, 100);
  }
}

typeEffect();
