import { ScrollOffsetContext } from "../contexts";
import { Slide1 } from "../slides";
import { useScroll, motion } from "framer-motion";
import React, { useState, WheelEvent } from "react";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";

interface IntroPageProps {}
export const IntroPage = ({}: IntroPageProps) => {
  const [y, setY] = useState(0);
  const { scrollY } = useScroll();
  const [ref, inView, entry] = useInView({
    /* Optional options */
    threshold: 0.5,
    triggerOnce: false,
  });

  const onWheel = (e: WheelEvent) => {
    setY((prev) => Math.max(0, prev + e.deltaY));
  };

  console.log(y);

  const variants = {
    visible: { opacity: 1, scale: 1, y: 0 },
    hidden: {
      opacity: 0,
      scale: 0.65,
      y: 50,
    },
  };

  return (
    <ScrollOffsetContext.Provider value={{ y }}>
      <Container onWheel={onWheel}>
        <Slide1 offset={100} />
        <Slide1 offset={500} />
      </Container>
    </ScrollOffsetContext.Provider>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 1000vh;
`;
