import {onSnake, expandSnake} from "./snake.js";
import {randomPositionOnGrid} from "./grid.js"
let fruit = randomPositionOnGrid(); //css grid is 1 based index(!) so this is basically x:0 y:0 for the average guy
const EXPANTION_RATE = 1; //value of each fruit, the snake will grow by this size upon aeting the fruit

export function update() {
  if (onSnake(fruit)) {
    expandSnake(EXPANTION_RATE);
    fruit = getRandomFruitPosition();
  }
}

export function draw(board) {
  const fruitElement = document.createElement("div");
  fruitElement.style.gridRowStart = fruit.y;
  fruitElement.style.gridColumnStart = fruit.x;
  fruitElement.classList.add("fruit");
  board.appendChild(fruitElement);
}

//brute force for finding a position that is not on the snake body
function getRandomFruitPosition(){
    let newPosition;
    while(!newPosition || onSnake(newPosition)){
        newPosition = randomPositionOnGrid()
    }
    return newPosition;
}


