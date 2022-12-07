import { ViewMarker } from "../components";
import Slide1 from "@/assets/story/battlefield/all.svg";
import React, {
  forwardRef,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  WheelEvent,
} from "react";
import styled, { css } from "styled-components";

interface Act2PageProps {}
export const Act2Page = forwardRef<HTMLDivElement>(({}: Act2PageProps, ref) => {
  return (
    <SlideContainer ref={ref}>
      <ViewMarker name="act2" color="rgba(0,0,0,0)" />
      <Slide1 />
    </SlideContainer>
  );
});

const SlideContainer = styled.div`
  width: auto;
  height: 100vh;

  > svg {
    width: auto;
    height: 100%;
  }
`;
