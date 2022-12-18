import React, { useRef } from "react";
import styled from "styled-components";

// 22~32 / 42 ~ 80
const Years1 = [...new Array(12)].map((_, index) => index + 22);
const Years2 = [...new Array(20)].map((_, index) => index * 2 + 42);

interface TimeBarProps {
  offset: number;
  year: number;
  onClick: (index: number) => void;
}
export const TimeBar = ({ offset, year, onClick }: TimeBarProps) => {
  const offsets = useRef<Record<number, number>>({});

  console.log(offsets, year, offsets.current[year]);

  return (
    <Container>
      <VerticalBar />

      {Years1.map((x, index) => (
        <YearText
          key={x}
          ref={(el) => (offsets.current[x] = el!.offsetTop)}
          style={{ top: `${5 + index * 15}px` }}
          delay={index * 0.035}
          onClick={() => onClick(index)}
        >
          {x}
        </YearText>
      ))}

      {Years2.map((x, index) => (
        <YearText
          key={x}
          ref={(el) => (offsets.current[x] = el!.offsetTop)}
          style={{ top: `${195 + index * 15}px` }}
          delay={(index + Years1.length) * 0.035}
          onClick={() => onClick(index + Years1.length)}
        >
          {x}
        </YearText>
      ))}

      <CursorBar
        style={{
          top: `${
            // @ts-ignore
            Object.entries(offsets.current).find((x) => +x[0] >= year)?.[1] + 7
          }px`,
        }}
      />
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

  transition: all 0.25s ease;
`;
const YearText = styled.div.attrs({
  className: "animate__animated animate__fadeInDown",
})<{ delay: number }>`
  position: absolute;
  left: -32px;

  color: white;

  font-size: 16px;

  cursor: pointer;

  animation-delay: ${({ delay }) => delay}s;
`;
