const buttonUp = document.querySelector(".button__button-up");
const buttonDown = document.querySelector(".button__button-down");

const image = document.querySelector(".table-top");


buttonUp.addEventListener("click", () => {
  let step = parseInt(image.style.bottom) || 0;
  let up = 15;
  let maxUp = 90;

  if (innerWidth <= 425) {
    up = 10;
    maxUp = 35;
  }

  if (step < maxUp) image.style.bottom = step + up + "px";
  else return;
})

buttonDown.addEventListener("click", () => {
  let step = parseInt(image.style.bottom) || 0;
  let down = 15;
  let maxDown = -90;

  if (innerWidth <= 425) {
    down = 10;
    maxDown= -35;
  }

  if (step > maxDown) image.style.bottom = step - down + "px";
  else return;
})