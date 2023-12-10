import {ViewMarker} from "../components";
import {SideMenuWidth} from "../constants";
import Slide1EN from "@/assets/story/harrier-1-en.svg";
import Slide1KR from "@/assets/story/harrier-1-kr.svg";
import Slide1JP from "@/assets/story/harrier-1-jp.svg";
import Slide2EN from "@/assets/story/harrier-2-en.svg";
import Slide2KR from "@/assets/story/harrier-2-kr.svg";
import Slide2JP from "@/assets/story/harrier-2-jp.svg";
import Slide3EN from "@/assets/story/harrier-3-en.svg";
import Slide3KR from "@/assets/story/harrier-3-kr.svg";
import Slide3JP from "@/assets/story/harrier-3-jp.svg";
import React, {forwardRef} from "react";
import {useSelector} from "react-redux";
import styled, {css} from "styled-components";

interface Act2PageProps {
}

export const Act2Page = forwardRef<HTMLDivElement>(({}: Act2PageProps, ref) => {
    const state = useSelector((state: string) => state);

    const getLanguage = (slideNumber: number) => {
        switch (state) {
            case 'EN':
                if (slideNumber === 1) return <Slide1EN/>;
                if (slideNumber === 2) return <Slide2EN/>;
                if (slideNumber === 3) return <Slide3EN/>;
                break;
            case "KR":
                if (slideNumber === 1) return <Slide1KR/>;
                if (slideNumber === 2) return <Slide2KR/>;
                if (slideNumber === 3) return <Slide3KR/>;
                break;
            case 'JP':
                if (slideNumber === 1) return <Slide1JP/>;
                if (slideNumber === 2) return <Slide2JP/>;
                if (slideNumber === 3) return <Slide3JP/>;
                break;
        }
    };
    return (
        <SlideContainer ref={ref}>
            <ViewMarker name="act2" color="white"/>
            {getLanguage(1)}
            <div style={{width: "48px"}}/>
            {getLanguage(2)}
            {getLanguage(3)}
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
