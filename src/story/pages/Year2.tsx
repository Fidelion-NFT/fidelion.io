import { ViewMarker } from "../components";
import Year2PageSvg from "@/assets/story/2.svg";
import { SideMenuWidth } from "@/story/constants";
import { useScroll, motion } from "framer-motion";
import React, { forwardRef } from "react";
import styled, { css } from "styled-components";

interface Year2PageProps {}
export const Year2Page = forwardRef<HTMLDivElement>(
  ({}: Year2PageProps, ref) => {
    return (
      <SlideContainer ref={ref}>
        <ViewMarker name="main" color="rgba(0,0,0,0)" />
        <Year2PageSvg />
      </SlideContainer>
    );
  }
);

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
