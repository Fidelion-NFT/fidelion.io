import { ViewMarker } from "../components";
import Act1PageEN from "@/assets/story/2-en.svg";
import Act1PageKR from "@/assets/story/2-kr.svg";
import Act1PageJP from "@/assets/story/2-jp.svg";
import { SideMenuWidth } from "@/story/constants";
import React, { forwardRef, useEffect } from "react";
import { useSelector } from "react-redux";
import styled, { css } from "styled-components";

interface Act1PageProps {}
export const Act1Page = forwardRef<HTMLDivElement>(({}: Act1PageProps, ref) => {
  const state = useSelector((state: string) => state);

  const getLanguage = () => {
    switch(state){
      case 'EN':
        return <Act1PageEN />;
      case "KR":
        return <Act1PageKR />;
      case 'JP':
        return <Act1PageJP />;
    }
  };
  
  return (
    <SlideContainer ref={ref}>
      <ViewMarker name="act1" color="rgba(0,0,0,1)" />
      {getLanguage()}
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
