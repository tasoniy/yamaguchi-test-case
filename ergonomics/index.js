  const buttonUp = document.querySelector(".button__button-up");
  const buttonDown = document.querySelector(".button__button-down");

  const image = document.querySelector(".countertop");

  buttonUp.addEventListener("click", () => {
    let step = parseInt(image.style.bottom) || 0;
    image.style.bottom = step + 15 + "px";
    while(image.style.bottom < 90) {
      image.style.bottom = step + 15 + "px";
    }
  })

  buttonDown.addEventListener("click", () => {
    let step= parseInt(image.style.bottom) || 0;
    image.style.bottom = step - 15 + "px";
   })