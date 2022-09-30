import React from "react";
import styled from "styled-components";

const Years = [...new Array(24)].map((_, index) => index + 22);

interface TimeBarProps {
  offset: number;
}
export const TimeBar = ({ offset }: TimeBarProps) => {
  return (
    <Container>
      <VerticalBar />

      {Years.map((x, index) => (
        <YearText key={x} style={{ top: `${index * 20}px` }}>
          {x}
        </YearText>
      ))}

      <CursorBar style={{ top: `${Math.max(0, offset) / 10}px` }} />
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  right: 80px;
  top: calc(50vh - 250px);
`;

const VerticalBar = styled.div`
  width: 1px;
  height: 500px;

  background: white;
`;
const CursorBar = styled.div`
  position: absolute;
  left: -15px;

  width: 32px;
  height: 1px;

  background: white;
`;
const YearText = styled.div`
  position: absolute;
  left: -32px;

  color: white;

  font-size: 20px;
`;
