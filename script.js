const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const question = document.getElementById("question");

let yesBtnSize = 1;
let noBtnOffset = 0;

yesBtn.addEventListener("click", () => {
  question.textContent = "Məndəə sənii sevirəm həyatımm, belə hiss etdiyini bilirdim 💖";
  yesBtn.style.display = "none";
  noBtn.style.display = "none";
});

noBtn.addEventListener("click", () => {
  yesBtnSize += 0.2;
  noBtnOffset += 20;

  yesBtn.style.transform = `scale(${yesBtnSize})`;
  noBtn.style.transform = `translateX(${noBtnOffset}px) scale(0.9)`;

  if (yesBtnSize >= 6) {
    noBtn.style.display = "none";
  }
});
