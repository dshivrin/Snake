import { getInputDirection } from "./input.js";

export const SNAKE_SPEED = 5;
const snakeBody = [{ x: 11, y: 11 }];
let newSegments = 0;

//to update the snake position I move the head to the desired location
//then shift the next segment to where the head was, and so on
export function update() {
  addSegments();
  const inputDirection = getInputDirection();
  //last segment is irrelevant since its not going to be populated
  for (let i = snakeBody.length - 2; i >= 0; i--) {
    snakeBody[i + 1] = { ...snakeBody[i] };
  }
  snakeBody[0].x += inputDirection.x;
  snakeBody[0].y += inputDirection.y;
}

export function draw(board) {
  snakeBody.forEach((segment) => {
    const snakeElement = document.createElement("div");
    snakeElement.style.gridRowStart = segment.y;
    snakeElement.style.gridColumnStart = segment.x;
    snakeElement.classList.add("snake");
    board.appendChild(snakeElement);
  });
}

export function expandSnake(amount) {
  newSegments += amount;
}

/*
    checking if any of the snake body is on same position, 
    the reason is because I don't know if this function will fire when the head is touching the fruit,
    and due to the movement logic, the body follows the head so it's fine if I catch any of the segments touching the fruit 
*/
export function onSnake(position,{ignoreHead = false}={}) {
  return snakeBody.some((segment, index) => {
    if(ignoreHead && index === 0) return false;
    return equalPosition(segment, position);
  });
}

export function getSnakeHead(){
 return snakeBody[0];
}

//checking the head on every other position of the sneak but the head itself
export function isIntersecting(){
    return onSnake(snakeBody[0], {ignoreHead: true})
}

function equalPosition(position1, position2) {
  return position1?.x === position2?.x && position1?.y === position2?.y;
}

function addSegments() {
  for (let i = 0; i < newSegments; i++) {
    snakeBody.push({ ...snakeBody[snakeBody.length - 1] });
  }

  newSegments = 0;
}
