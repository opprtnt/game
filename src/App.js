import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import Board from "./components/Board";
import Track from "./components/Track";
import useArrowList from "./hooks/useArrowList";
import useStartPosition from "./hooks/useStartPosition";

function App() {
  const arrowCount = 10;
  const size = [3, 3];
  const cellsCount = size[0] * size[1];
  const [isLoading, changeLoading] = useState(false);
  const startPositionR = useStartPosition(cellsCount);
  const [startPosition, setStartPosition] = useState(startPositionR);
  const [arrowListRand, rightAnswerR] = useArrowList(
    size,
    arrowCount,
    startPositionR
  );
  const [rightAnswer, changeRightAnswer] = useState(rightAnswerR);
  const [arrowList, setArrowList] = useState(arrowListRand);

  useEffect(() => {
    if (!isLoading) {
      setStartPosition(startPositionR);
      setArrowList(arrowListRand);
      changeRightAnswer(rightAnswerR);
    }
  }, [isLoading]);

  return (
    <AppWrapper>
      {isLoading && <Disabled />}
      <Board
        size={size}
        startPosition={startPosition}
        rightAnswer={rightAnswer}
        isLoading={[isLoading, changeLoading]}
      />
      <Track count={arrowCount} arrowList={arrowList} />
    </AppWrapper>
  );
}
const AppWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Disabled = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
`;

export default App;
