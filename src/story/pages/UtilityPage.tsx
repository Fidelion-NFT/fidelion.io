import { ViewMarker } from "../components";
import { SideMenuWidth } from "../constants";
import Slide1 from "@/assets/story/utility-en.svg";
import React, { forwardRef } from "react";
import styled, { css } from "styled-components";
import Slide1EN from "@/assets/story/utility-en.svg";
import Slide1KR from "@/assets/story/utility-kr.svg";
import Slide1JP from "@/assets/story/utility-jp.svg";
import {useSelector} from "react-redux";

interface UtilityPageProps {}
export const UtilityPage = forwardRef<HTMLDivElement>(
  ({}: UtilityPageProps, ref) => {
      const state = useSelector((state: string) => state);

      const getLanguage = () => {
          switch(state){
              case 'EN':
                  return <Slide1EN />;
              case "KR":
                  return <Slide1KR />;
              case 'JP':
                  return <Slide1JP />;
          }
      };

      return (
      <SlideContainer ref={ref}>
        <ViewMarker name="utility" color="rgba(0,0,0,1)" />
          {getLanguage()}
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
