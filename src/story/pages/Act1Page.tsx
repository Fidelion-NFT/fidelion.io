import { ViewMarker } from "../components";
import Act1PageSvg from "@/assets/story/2.svg";
import { SideMenuWidth } from "@/story/constants";
import { useScroll, motion } from "framer-motion";
import React, { forwardRef } from "react";
import styled, { css } from "styled-components";

interface Act1PageProps {}
export const Act1Page = forwardRef<HTMLDivElement>(({}: Act1PageProps, ref) => {
  return (
    <SlideContainer ref={ref}>
      <ViewMarker name="act1" color="rgba(0,0,0,1)" />
      <Act1PageSvg />
    </SlideContainer>
  );
});

const SlideContainer = styled.div`
  position: relative;
  height: 100vh;

  padding-left: ${SideMenuWidth}px;

  > svg {
    width: auto;
    height: 111.55vh;

    margin-top: -1.5vh;
  }
`;
