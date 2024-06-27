import { ViewMarker } from "../components";

import Slide1_1KR from "@/assets/story/fidelion-1-1-kr.svg";
import Slide1_2KR from "@/assets/story/fidelion-1-2-kr.svg";
import Slide2KR from "@/assets/story/fidelion-2-kr.svg";
import Slide3KR from "@/assets/story/fidelion-3-kr.svg";
import Slide4_1KR from "@/assets/story/fidelion-4-1-kr.svg";
import Slide4_2KR from "@/assets/story/fidelion-4-2-kr.svg";
import Slide5_1KR from "@/assets/story/fidelion-5-1-kr.svg";
import Slide5_2KR from "@/assets/story/fidelion-5-2-kr.svg";
import Slide6KR from "@/assets/story/fidelion-6-kr.svg";
import Slide7_1KR from "@/assets/story/fidelion-7-1-kr.svg";
import Slide7_2KR from "@/assets/story/fidelion-7-2-kr.svg";

import Slide1_1EN from "@/assets/story/fidelion-1-1-en.svg";
import Slide1_2EN from "@/assets/story/fidelion-1-2-en.svg";
import Slide2EN from "@/assets/story/fidelion-2-en.svg";
import Slide3EN from "@/assets/story/fidelion-3-en.svg";
import Slide4_1EN from "@/assets/story/fidelion-4-1-en.svg";
import Slide4_2EN from "@/assets/story/fidelion-4-2-en.svg";
import Slide5_1EN from "@/assets/story/fidelion-5-1-en.svg";
import Slide5_2EN from "@/assets/story/fidelion-5-2-en.svg";
import Slide6EN from "@/assets/story/fidelion-6-en.svg";
import Slide7_1EN from "@/assets/story/fidelion-7-1-en.svg";
import Slide7_2EN from "@/assets/story/fidelion-7-2-en.svg";

import Slide1_1JP from "@/assets/story/fidelion-1-1-jp.svg";
import Slide1_2JP from "@/assets/story/fidelion-1-2-jp.svg";
import Slide2JP from "@/assets/story/fidelion-2-jp.svg";
import Slide3JP from "@/assets/story/fidelion-3-jp.svg";
import Slide4_1JP from "@/assets/story/fidelion-4-1-jp.svg";
import Slide4_2JP from "@/assets/story/fidelion-4-2-jp.svg";
import Slide5_1JP from "@/assets/story/fidelion-5-1-jp.svg";
import Slide5_2JP from "@/assets/story/fidelion-5-2-jp.svg";
import Slide6JP from "@/assets/story/fidelion-6-jp.svg";
import Slide7_1JP from "@/assets/story/fidelion-7-1-jp.svg";
import Slide7_2JP from "@/assets/story/fidelion-7-2-jp.svg";

import { SideMenuWidth } from "@/story/constants";
import React, { forwardRef, useEffect } from "react";
import { useSelector } from "react-redux";
import styled, { css } from "styled-components";

interface FamePageProps {}
export const FidelionPage = forwardRef<HTMLDivElement>(
  ({}: FamePageProps, ref) => {
    const state = useSelector((state: string) => state);

    const getLanguage = () => {
      switch (state) {
        case "EN":
            return (
                <>
                    <Slide1_1EN/>
                    <Slide1_2EN />
                    <Slide2EN />
                    <Slide3EN />
                    <Slide4_1EN />
                    <Slide4_2EN />
                    <Slide5_1EN />
                    <Slide5_2EN />
                    <Slide6EN/>
                    <Slide7_1EN />
                    <Slide7_2EN />
                </>
          );
        case "KR":
          return (
            <>
                <Slide1_1KR/>
                <Slide1_2KR />
                <Slide2KR />
                <Slide3KR />
                <Slide4_1KR />
                <Slide4_2KR />
                <Slide5_1KR />
                <Slide5_2KR />
                <Slide6KR/>
                <Slide7_1KR />
                <Slide7_2KR />
            </>
          );
        case "JP":
          return (
              <>
                  <Slide1_1JP/>
                  <Slide1_2JP />
                  <Slide2JP />
                  <Slide3JP />
                  <Slide4_1JP />
                  <Slide4_2JP />
                  <Slide5_1JP />
                  <Slide5_2JP />
                  <Slide6JP/>
                  <Slide7_1JP />
                  <Slide7_2JP />
          </>)
      }
    };

    return (
      <SlideContainer ref={ref}>
        <ViewMarker name="fidelion" color="rgba(0,0,0,1)" />
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

  padding-left: ${SideMenuWidth}px;

  > svg {
    width: auto;
    height: 100vh;

    overflow: hidden;
  }
`;
