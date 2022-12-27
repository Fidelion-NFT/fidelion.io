import { ViewMarker } from "../../components";
import MainPageSvg from "@/assets/story/main.svg";
import { SideMenuWidth } from "@/story/constants";
import React, { forwardRef } from "react";
import styled, { css } from "styled-components";

interface MainPageProps {}
export const MainPage = forwardRef<HTMLDivElement>(({}: MainPageProps, ref) => {
  return (
    <SlideContainer ref={ref}>
      <ViewMarker name="main" color="rgba(0,0,0,1)" />
      <MainPageSvg />
    </SlideContainer>
  );
});

const SlideContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;

  padding-left: ${SideMenuWidth / 2}px;

  > svg {
    width: 100vw;
    height: 100%;

    animation: logoFadeIn 5s;
  }

  @keyframes logoFadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;
