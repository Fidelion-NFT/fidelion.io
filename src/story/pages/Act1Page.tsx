import { SideMenu } from "../../components/SideMenu";
import { Act1Slide1, Act1Slide2 } from "../slides/act1";
import { Act1Slide3 } from "../slides/act1/Act1Slide3";
import { useScroll, motion } from "framer-motion";
import React, { useEffect, useRef, useState, WheelEvent } from "react";
import styled from "styled-components";

interface Act1PageProps {}
export const Act1Page = ({}: Act1PageProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    containerRef.current!.addEventListener("wheel", (evt) => {
      evt.preventDefault();
      containerRef.current!.scrollLeft += evt.deltaY * 0.6;
    });
  }, []);

  return (
    <Container ref={containerRef}>
      <Act1Slide1 />
      <Act1Slide2 />
      <Act1Slide3 />
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;

  overflow: auto;
`;
