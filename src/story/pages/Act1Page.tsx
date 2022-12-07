import { SideMenu } from "../../components/SideMenu";
import { ViewMarker } from "../components";
import { Act1Slide1, Act1Slide2 } from "../slides/act1";
import { Act1Slide3 } from "../slides/act1/Act1Slide3";
import { useStores } from "../stores";
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
  const { sideMenuStore } = useStores();

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
