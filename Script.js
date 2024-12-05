const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesbnt = document.querySelector(".yes-btn");
const nobnt = document.querySelector(".no-btn");

yesbnt.addEventListener("click", () => {
  question.innerHTML = "Right Now I Got You My Girlfiend 🩷";
  gif.src = "photos.jpg";
});
nobnt.addEventListener("mouseover", () => {
  const nobntRect = nobnt.getBoundingClientRect();
  const maxX = window.innerWidth - nobntRect.Width;
  const maxY = window.innerHeight - nobntRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  nobnt.style.left = randomX + "px";
  nobnt.style.top = randomY + "px";
});
