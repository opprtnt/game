import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import TrackCell from "./TrackCell";

const Track = ({ count, arrowList }) => {
  const tracks = [];

  for (let index = 0; index < count; index++) {
    tracks.push(<TrackCell key={index} arrow={arrowList[index]} />);
  }
  return <TrackWrapper>{tracks}</TrackWrapper>;
};

const TrackWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 600px;
  height: 150px;
  gap: 20px;
`;

export default Track;
