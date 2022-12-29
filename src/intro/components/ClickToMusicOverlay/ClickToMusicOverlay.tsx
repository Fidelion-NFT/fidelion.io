import React, { useState } from "react";
import styled from "styled-components";

export const ClickToMusicOverlay = () => {
  const [show, setShow] = useState(true);

  const onClickStart = () => {
    var audio = new Audio("/music/intro.mp3");
    audio.play();

    setShow(false);
  };

  if (!show) {
    return null;
  }

  return <Container onClick={onClickStart}>Click to start</Container>;
};

const Container = styled.div`
  display: flex;
  position: fixed;
  left: 0px;
  top: 0px;
  width: 100vw;
  height: 100vh;

  background: black;

  color: white;

  align-items: center;
  justify-content: center;
`;
