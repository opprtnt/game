import Cell from "../components/Cell";
const useCreateBoard = (props) => {
  let cells = [];
  const [
    toggleVisibilityStart,
    visibilityStart,
    rightAnswer,
    isLoading,
    cellsCount,
    startPosition,
  ] = props;
  for (let index = 0; index < cellsCount; index++) {
    let start = false;
    if (index === startPosition) start = true;
    cells.push(
      <Cell
        key={index}
        start={start}
        toggleVisibilityStart={toggleVisibilityStart}
        visibilityStart={visibilityStart}
        rightAnswer={rightAnswer}
        idx={index}
        isLoading={isLoading}
      />
    );
  }
  return cells;
};

export default useCreateBoard;
