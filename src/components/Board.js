import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import Cell from "./Cell";

const Board = ({ size, startPosition, rightAnswer, isLoading }) => {
  const cellsCount = size[0] * size[1];
  const createBoard = () => {
    const cells = [];
    for (let index = 0; index < cellsCount; index++) {
      let start = false;
      if (index === startPosition) start = true;
      cells.push(
        <Cell
          key={index}
          start={start}
          rightAnswer={rightAnswer}
          idx={index}
          isLoading={isLoading}
        />
      );
    }
    return cells;
  };
  const [cells, setCells] = useState(createBoard());
  useEffect(() => {
    if (!isLoading[0]) {
      setCells(createBoard());
    }
  }, [rightAnswer]);

  return <BoardWrapper>{cells}</BoardWrapper>;
};

const BoardWrapper = styled.div`
  height: 600px;
  width: 600px;
  gap: 20px;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 50px;
`;

export default Board;
