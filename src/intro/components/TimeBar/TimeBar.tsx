import React from "react";
import styled from "styled-components";

interface TimeBarProps {}
export const TimeBar = ({}: TimeBarProps) => {
  return (
    <Container>
      <VerticalBar />
    </Container>
  );
};

const Container = styled.div``;

const VerticalBar = styled.div`
  width: 1px;
  height: 500px;

  background: white;
`;
