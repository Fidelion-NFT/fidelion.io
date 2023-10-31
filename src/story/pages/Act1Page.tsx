import { ViewMarker } from "../components";
import Act1PageSvg from "@/assets/story/2.svg";
import { SideMenuWidth } from "@/story/constants";
import { useScroll, motion } from "framer-motion";
import React, { forwardRef, useEffect } from "react";
import { useSelector } from "react-redux";
import styled, { css } from "styled-components";

interface Act1PageProps {}
export const Act1Page = forwardRef<HTMLDivElement>(({}: Act1PageProps, ref) => {
  const state = useSelector((state: string) => state);

  const getlanguege = () => {
    switch(state){
      case 'EN':
        return <Act1PageSvg />;
      case "KR":
        return <Act1PageSvg />;
      case 'JP':
        return <Act1PageSvg />;
    }
  };
  
  return (
    <SlideContainer ref={ref}>
      <ViewMarker name="act1" color="rgba(0,0,0,1)" />
      {getlanguege()}
    </SlideContainer>
  );
});

const SlideContainer = styled.div`
  position: relative;
  height: 100vh;

  padding-left: ${SideMenuWidth}px;

  > svg {
    width: auto;
    height: 100vh;

    overflow: hidden;
  }
`;
