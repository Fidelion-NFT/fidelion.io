import { ViewMarker } from "../components";
import FidelionPageEN from "@/assets/story/fidelion-en.svg";
import FidelionPageKR from "@/assets/story/fidelion-kr.svg";
import FidelionPageJP from "@/assets/story/fidelion-jp.svg";
import { SideMenuWidth } from "@/story/constants";
import React, { forwardRef, useEffect } from "react";
import { useSelector } from "react-redux";
import styled, { css } from "styled-components";

interface FamePageProps {}
export const FidelionPage = forwardRef<HTMLDivElement>(({}: FamePageProps, ref) => {
  const state = useSelector((state: string) => state);

  const getLanguage = () => {
    switch(state){
      case 'EN':
        return <><FidelionPageEN /></>;
      case "KR":
        return <FidelionPageKR />;
      case 'JP':
        return <FidelionPageJP />;
    }
  };
  
  return (
    <SlideContainer ref={ref}>
      <ViewMarker name="fidelion" color="rgba(0,0,0,1)" />
      {getLanguage()}
    </SlideContainer>
  );
});

const SlideContainer = styled.div`
  position: relative;
  display: flex;
  
  width: auto;
  height: 100vh;

  padding-left: ${SideMenuWidth}px;

  > svg {
    width: auto;
    height: 100vh;

    overflow: hidden;
  }
`;
