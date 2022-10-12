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

interface Act2PageProps {}
export const Act2Page = forwardRef<HTMLDivElement>(({}: Act2PageProps, ref) => {
  const { sideMenuStore } = useStores();

  useLayoutEffect(() => {
    sideMenuStore.backgroundColor = "white";

    return () => {
      sideMenuStore.backgroundColor = "rgba(0,0,0,0)";
    };
  }, []);

  return (
    <SlideContainer ref={ref}>
      <ViewMarker name="act2" />
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
