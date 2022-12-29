import React, { useState } from "react";
import styled from "styled-components";

interface ClickToMusicOverlayProps {
  onReady: () => void;
}
export const ClickToMusicOverlay = ({ onReady }: ClickToMusicOverlay) => {
  const [show, setShow] = useState(true);

  const onClickStart = () => {
    var audio = new Audio("/music/intro.mp3");
    audio.loop = true;
    audio.play();

    setShow(false);

    onReady();
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

  background: rgba(0, 0, 0, 0.8);

  color: white;

  align-items: center;
  justify-content: center;
`;
