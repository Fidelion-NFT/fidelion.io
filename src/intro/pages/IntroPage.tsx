import React, { useState, WheelEvent } from "react";
import styled from "styled-components";

interface IntroPageProps {}
export const IntroPage = ({}: IntroPageProps) => {
  const [y, setY] = useState(0);

  const onWheel = (e: WheelEvent) => {
    setY((prev) => prev + e.deltaY);
  };

  return <Container onWheel={onWheel}></Container>;
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;
