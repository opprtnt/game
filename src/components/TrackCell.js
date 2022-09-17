import styled from "styled-components";
import {
  FiArrowDown,
  FiArrowLeft,
  FiArrowRight,
  FiArrowUp,
} from "react-icons/fi";

const TrackCell = ({ arrow }) => {
  return (
    <CellWrapper>
      {arrow === "left" ? (
        <FiArrowLeft />
      ) : arrow === "up" ? (
        <FiArrowUp />
      ) : arrow === "down" ? (
        <FiArrowDown />
      ) : (
        <FiArrowRight />
      )}
    </CellWrapper>
  );
};

const CellWrapper = styled.div`
  background-color: lightblue;
  display: flex;
  flex: 17%;
  height: 50%;
  align-items: center;
  justify-content: center;
  svg {
    stroke: white;
    width: 30px;
    height: 30px;
  }
`;

export default TrackCell;
