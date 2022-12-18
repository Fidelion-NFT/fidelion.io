import { ViewMarker } from "../components";
import { SideMenuWidth } from "../constants";
import Slide1 from "@/assets/story/harrier-1.svg";
import Slide2 from "@/assets/story/harrier-2.svg";
import Slide3 from "@/assets/story/harrier-3.svg";
import React, { forwardRef } from "react";
import styled, { css } from "styled-components";

interface Act2PageProps {}
export const Act2Page = forwardRef<HTMLDivElement>(({}: Act2PageProps, ref) => {
  return (
    <SlideContainer ref={ref}>
      <ViewMarker name="act2" color="white" />
      <Slide1 />
      <div style={{ width: "48px" }} />
      <Slide2 />
      <Slide3 />
    </SlideContainer>
  );
});

const SlideContainer = styled.div`
  position: relative;
  display: flex;

  width: auto;
  height: 100vh;

  background: white;

  padding-left: ${SideMenuWidth}px;

  > svg {
    width: auto;
    height: 100vh;
  }
`;
