"use strict";

const clickableBox = document.querySelector(`.clickableBox`);
const movingBox = document.querySelector(`.movingBox`);

clickableBox.addEventListener(`click`, function () {
  if (!movingBox.classList.contains("open")) {
    movingBox.classList.add(`open`);
    movingBox.classList.remove(`close`);
  } else if (movingBox.classList.contains("open")) {
    movingBox.classList.remove(`open`);
    movingBox.classList.add(`close`);
  }
});
