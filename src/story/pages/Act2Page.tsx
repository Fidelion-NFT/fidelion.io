import { ViewMarker } from "../components";
import { SideMenuWidth } from "../constants";
import Slide1EN from "@/assets/story/harrier-1-en.svg";
import Slide1KR from "@/assets/story/harrier-1-kr.svg";
import Slide2 from "@/assets/story/harrier-2.svg";
import Slide3 from "@/assets/story/harrier-3.svg";
import React, { forwardRef } from "react";
import { useSelector } from "react-redux";
import styled, { css } from "styled-components";

interface Act2PageProps {}
export const Act2Page = forwardRef<HTMLDivElement>(({}: Act2PageProps, ref) => {
  const state = useSelector((state: string) => state);
  
  const getlanguege = () => {
    switch(state){
      case 'EN':
        return <Slide1EN />;
      case "KR":
        return <Slide1KR />;
      // case 'JP':
      //   return <Act1PageSvg />;
    }
  };

  return (
    <SlideContainer ref={ref}>
      <ViewMarker name="act2" color="white" />
      {getlanguege()}
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

    overflow: hidden;
  }
`;
