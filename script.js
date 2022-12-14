import { update as updateFruit, draw as drawFruit } from "./scripts/fruit.js";
import { isOutOfBoundns } from "./scripts/grid.js";
import {
  SNAKE_SPEED,
  update as updateSnake,
  draw as drawSnake,
  getSnakeHead,
  isIntersecting,
} from "./scripts/snake.js";

const board = document.getElementById("board");
let lastRenderTime = 0;
let gameOver = false;

function main(currentTime) {
  if (gameOver) {
    if (confirm("You lost, Press OK to reset the game")) {
      return location.reload();
    } else {
      return;
    }
  }
  window.requestAnimationFrame(main);
  const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
  if (secondsSinceLastRender < 1 / SNAKE_SPEED) return;
  lastRenderTime = currentTime;
  update();
  draw(board);
}

window.requestAnimationFrame(main);

function update() {
  updateSnake();
  updateFruit();
  checkDefeat();
}

function draw(board) {
  board.innerHTML = "";
  drawSnake(board);
  drawFruit(board);
}

function checkDefeat() {
  gameOver = isOutOfBoundns(getSnakeHead()) || isIntersecting();
}
