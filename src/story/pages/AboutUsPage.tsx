import { ViewMarker } from "../components";
import { SideMenuWidth } from "../constants";
import React, { forwardRef } from "react";
import styled, { css } from "styled-components";
import Slide1EN from "@/assets/story/5-en.svg";
import Slide1KR from "@/assets/story/5-kr.svg";
import Slide1JP from "@/assets/story/5-jp.svg";
import {useSelector} from "react-redux";

interface AboutUsPageProps {}
export const AboutUsPage = forwardRef<HTMLDivElement>(
  ({}: AboutUsPageProps, ref) => {
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
        <ViewMarker name="about-us" color="white" />
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
