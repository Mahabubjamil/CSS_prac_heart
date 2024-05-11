const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const wrapperReact = wrapper.getBoundingClientRect(); // corrected method name
const noBtnReact = noBtn.getBoundingClientRect(); // corrected method name

yesBtn.addEventListener("click", () => {
  question.innerHTML = "I love you too!!"
});

noBtn.addEventListener("mouseover", () => {
  const i = Math.floor(Math.random() * (wrapperReact.width - noBtnReact.width)) + 1;
  const j = Math.floor(Math.random() * (wrapperReact.height - noBtnReact.height)) + 1; // corrected property name

  noBtn.style.left = i + "px"; // corrected property name
  noBtn.style.top = j + "px"; // corrected property name
});
