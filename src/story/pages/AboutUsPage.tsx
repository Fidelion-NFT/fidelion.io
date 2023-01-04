import { ViewMarker } from "../components";
import { SideMenuWidth } from "../constants";
import Slide1 from "@/assets/story/5.svg";
import React, { forwardRef } from "react";
import styled, { css } from "styled-components";

interface AboutUsPageProps {}
export const AboutUsPage = forwardRef<HTMLDivElement>(
  ({}: AboutUsPageProps, ref) => {
    return (
      <SlideContainer ref={ref}>
        <ViewMarker name="about-us" color="white" />
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

    overflow: hidden;
  }
`;
