import React, { useState } from "react";
import styled from "styled-components";

interface ClickToMusicOverlayProps {
  onReady: () => void;
}
export const ClickToMusicOverlay = ({ onReady }: ClickToMusicOverlayProps) => {
  const [show, setShow] = useState(true);

  const onClickStart = () => {
    const audio = document.getElementById("bgm") as HTMLAudioElement;
    audio.volume = 0.6;
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
  cursor: pointer;
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
