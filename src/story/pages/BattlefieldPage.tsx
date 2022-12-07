import { SideMenu } from "../../components/SideMenu";
import { ViewMarker } from "../components";
import { Act1Slide1, Act1Slide2 } from "../slides/act1";
import { Act1Slide3 } from "../slides/act1/Act1Slide3";
import { useStores } from "../stores";
import Slide1 from "@/assets/story/battlefield/all.svg";
import { useScroll, motion } from "framer-motion";
import React, { forwardRef } from "react";
import styled, { css } from "styled-components";

interface BattleFieldPageProps {}
export const BattleFieldPage = forwardRef<HTMLDivElement>(
  ({}: BattleFieldPageProps, ref) => {
    return (
      <SlideContainer ref={ref}>
        <ViewMarker name="battlefield" color="rgba(0,0,0,0)" />
        <Slide1 />
      </SlideContainer>
    );
  }
);

const SlideContainer = styled.div`
  position: relative;
  width: auto;
  height: 100vh;

  > svg {
    width: auto;
    height: 100%;
  }
`;
