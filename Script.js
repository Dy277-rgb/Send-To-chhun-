const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesbnt = document.querySelector(".yes-btn");
const nobnt = document.querySelector(".no-btn");

yesbnt.addEventListener("click", () => {
  question.innerHTML = "Right Now I Got You My Girlfiend 🩷";
  gif.src =
    "https://i.pinimg.com/originals/54/af/a0/54afa0c1cf345d3b30c21802e73cf2aa.gif";
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
