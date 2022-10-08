import { SideMenu } from "../../components/SideMenu";
import { Act1Slide1, Act1Slide2 } from "../slides/act1";
import { Act1Slide3 } from "../slides/act1/Act1Slide3";
import { useStores } from "../stores";
import Slide1 from "@/assets/story/battlefield/all.svg";
import { useScroll, motion } from "framer-motion";
import React, {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  WheelEvent,
} from "react";
import styled, { css } from "styled-components";

interface BattleFieldPageProps {}
export const BattleFieldPage = ({}: BattleFieldPageProps) => {
  const { sideMenuStore } = useStores();

  useLayoutEffect(() => {
    sideMenuStore.backgroundColor = "rgba(0,0,0,1)";

    return () => {
      sideMenuStore.backgroundColor = "rgba(0,0,0,0)";
    };
  }, []);

  return (
    <>
      <SlideContainer>
        <Slide1 />
      </SlideContainer>
    </>
  );
};

const SlideContainer = styled.div`
  width: auto;
  height: 100vh;

  > svg {
    width: auto;
    height: 100%;
  }
`;
