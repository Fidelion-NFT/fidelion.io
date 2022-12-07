import { ViewMarker } from "../components";
import Slide1 from "@/assets/story/battlefield/all.svg";
import { useScroll, motion } from "framer-motion";
import React, {
  forwardRef,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  WheelEvent,
} from "react";
import styled, { css } from "styled-components";

interface Act1PageProps {}
export const Act1Page = forwardRef<HTMLDivElement>(({}: Act1PageProps, ref) => {
  return (
    <SlideContainer ref={ref}>
      <ViewMarker name="act1" color="rgba(0,0,0,0)" />
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
