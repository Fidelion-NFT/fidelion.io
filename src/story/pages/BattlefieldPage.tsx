import { SideMenu } from "../../components/SideMenu";
import { Act1Slide1, Act1Slide2 } from "../slides/act1";
import { Act1Slide3 } from "../slides/act1/Act1Slide3";
import Slide1 from "@/assets/story/battlefield/1.svg";
import Slide2 from "@/assets/story/battlefield/2.svg";
import Slide3 from "@/assets/story/battlefield/3.svg";
import Slide4 from "@/assets/story/battlefield/4.svg";
import { useScroll, motion } from "framer-motion";
import React, { useEffect, useRef, useState, WheelEvent } from "react";
import styled from "styled-components";

interface BattleFieldPageProps {}
export const BattleFieldPage = ({}: BattleFieldPageProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    containerRef.current!.addEventListener("wheel", (evt) => {
      evt.preventDefault();
      containerRef.current!.scrollLeft += evt.deltaY * 0.6;
    });
  }, []);

  return (
    <Container ref={containerRef}>
      <Slide src={Slide1} />
      <Slide src={Slide2} />
      <Slide src={Slide3} />
      <Slide src={Slide4} />
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;

  overflow: auto;
`;

const Slide = styled.img`
  width: auto;
  height: 100vh;
`;
