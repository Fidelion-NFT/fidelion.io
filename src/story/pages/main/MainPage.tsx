import { ViewMarker } from "../../components";
import MainPageSvg from "@/assets/story/main.svg";
import { SideMenuWidth } from "@/story/constants";
import { useScroll, motion } from "framer-motion";
import React, { forwardRef } from "react";
import styled, { css } from "styled-components";

interface MainPageProps {}
export const MainPage = forwardRef<HTMLDivElement>(({}: MainPageProps, ref) => {
  return (
    <SlideContainer ref={ref}>
      <ViewMarker name="main" color="rgba(0,0,0,0)" />
      <MainPageSvg />
    </SlideContainer>
  );
});

const SlideContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;

  padding-left: ${SideMenuWidth}px;

  > svg {
    width: 100vw;
    height: 100%;
  }
`;
