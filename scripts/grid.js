const GRID_SIZE = 21;

//css grid is 1 based index(!) so here I return random values between 1-GRID_SIZE
export function randomPositionOnGrid() {
  return {
    x: Math.floor(Math.random() * GRID_SIZE) + 1,
    y: Math.floor(Math.random() * GRID_SIZE) + 1,
  };
}

export function isOutOfBoundns(position) {
  return (
    position.x < 1 ||
    position.x > GRID_SIZE ||
    position.y < 1 ||
    position.y > GRID_SIZE
  );
}
