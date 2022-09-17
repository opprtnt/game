const arrows = ["up", "down", "left", "right"];

const useArrowList = (size, countArrow, start) => {
  const arrayArrow = [];
  let currentPosition = start;
  for (let index = 0; index < countArrow; index++) {
    const arrow = getRandomArrow(currentPosition, size);
    arrayArrow.push(arrow);
    currentPosition = changePosition(arrow, currentPosition, size);
  }
  return [arrayArrow, currentPosition];
};

const getRandomArrow = (position, size) => {
  const filterArrows = getRightArrows(position, size);
  const randomIdx = Math.floor(Math.random() * filterArrows.length);
  return filterArrows[randomIdx];
};

const getRightArrows = (position, size) => {
  const [width, height] = size;
  let rightArrows = [...arrows];
  if (position < width) rightArrows = rightArrows.filter((a) => a !== "up");
  if (position >= width * height - width)
    rightArrows = rightArrows.filter((a) => a !== "down");
  if ((position + 1) % width === 0)
    rightArrows = rightArrows.filter((a) => a !== "right");
  if ((position + 1) % width === 1)
    rightArrows = rightArrows.filter((a) => a !== "left");
  return rightArrows;
};

const changePosition = (arrow, position, size) => {
  let newPosition = null;
  switch (arrow) {
    case "up":
      newPosition = position - size[0];
      break;
    case "down":
      newPosition = position + size[0];
      break;
    case "left":
      newPosition = position - 1;
      break;
    case "right":
      newPosition = position + 1;
      break;
  }
  return newPosition;
};

export default useArrowList;
