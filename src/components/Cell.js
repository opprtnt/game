import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import Start from "./Start";

const Cell = ({ start, idx, rightAnswer, isLoading }) => {
  const [chevron, showChevron] = useState({
    visibility: false,
    right: idx === rightAnswer,
  });
  const showAnswer = () => {
    showChevron({ visibility: true, right: chevron.right });
    isLoading[1](true);
    setTimeout(isLoading[1], 3000, false);
  };

  useEffect(() => {
    if (!isLoading[0])
      showChevron({ visibility: false, right: idx === rightAnswer });
  }, [rightAnswer]);

  return (
    <CellWrapper onClick={showAnswer}>
      {start && <Start />}
      {chevron.visibility && (chevron.right ? <Flag>+</Flag> : <Flag>-</Flag>)}
    </CellWrapper>
  );
};

const CellWrapper = styled.div`
  background-color: lavender;
  display: flex;
  flex: 31%;
  height: 33%;
  justify-content: flex-end;
  cursor: pointer;
`;
const Flag = styled.div`
  color: lightpink;
  font-weight: 700;
  padding: 5px;
  font-size: 1.5rem;
  text-transform: uppercase;
`;

export default Cell;
