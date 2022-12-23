import { ViewMarker } from "../components";
import { SideMenuWidth } from "../constants";
import Slide1 from "@/assets/story/4.svg";
import React, { forwardRef } from "react";
import styled, { css } from "styled-components";

interface UtilityPageProps {}
export const UtilityPage = forwardRef<HTMLDivElement>(
  ({}: UtilityPageProps, ref) => {
    return (
      <SlideContainer ref={ref}>
        <ViewMarker name="utility" color="rgba(0,0,0,0)" />
        <Slide1 />
      </SlideContainer>
    );
  }
);

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
