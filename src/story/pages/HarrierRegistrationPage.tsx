import { ViewMarker } from "../components";
import { useStores } from "../stores";
import Slide1 from "@/assets/story/battlefield/all.svg";
import { useScroll, motion } from "framer-motion";
import React, {
  forwardRef,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  WheelEvent,
} from "react";
import { useInView } from "react-intersection-observer";
import styled, { css } from "styled-components";

interface HarrierRegistrationPageProps {}
export const HarrierRegistrationPage = forwardRef<HTMLDivElement>(
  ({}: HarrierRegistrationPageProps, ref) => {
    return (
      <SlideContainer ref={ref}>
        <ViewMarker name="harrier_registration" color="rgba(0,0,0,0)" />
        <Slide1 />
      </SlideContainer>
    );
  }
);

const SlideContainer = styled.div`
  width: auto;
  height: 100vh;

  > svg {
    width: auto;
    height: 100%;
  }
`;
