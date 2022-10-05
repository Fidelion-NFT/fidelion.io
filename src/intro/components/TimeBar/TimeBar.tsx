import React from "react";
import styled from "styled-components";

// 22~37 / 66 ~ 80
const Years1 = [...new Array(16)].map((_, index) => index + 22);
const Years2 = [...new Array(15)].map((_, index) => index + 66);

interface TimeBarProps {
  offset: number;
  onClick: (index: number) => void;
}
export const TimeBar = ({ offset, onClick }: TimeBarProps) => {
  return (
    <Container>
      <VerticalBar />

      {Years1.map((x, index) => (
        <YearText
          key={x}
          style={{ top: `${10 + index * 15}px` }}
          onClick={() => onClick(index)}
        >
          {x}
        </YearText>
      ))}

      {Years2.map((x, index) => (
        <YearText
          key={x}
          style={{ top: `${265 + index * 15}px` }}
          onClick={() => onClick(index + Years1.length)}
        >
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

  font-size: 16px;

  cursor: pointer;
`;
