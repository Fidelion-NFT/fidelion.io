import { useScroll, motion, useTransform, useMotionValue } from "framer-motion";
import React from "react";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";

interface Slide1Props {
  offset: number;
}
export const Slide1 = ({ offset }: Slide1Props) => {
  const { scrollY } = useScroll();

  const [ref, inView, entry] = useInView({
    /* Optional options */
    threshold: 0.2,
    triggerOnce: false,
  });

  const variants = {
    visible: { opacity: 1, scale: 1, y: 0 },
    hidden: {
      opacity: 0,
      scale: 0.65,
      y: 50,
    },
  };

  console.log(scrollY);

  return (
    <div style={{ position: "relative" }}>
      <Container
        animate={
          scrollY.get() >= offset - 100 && scrollY.get() <= offset + 100
            ? "visible"
            : "hidden"
        }
        variants={variants}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        asdf
      </Container>
      <BackView ref={ref}>asdf</BackView>
    </div>
  );
};

const Container = styled(motion.div)`
  position: fixed;
  left: 0px;
  top: 0px;

  width: 100vw;
  height: 100vh;

  background: gray;
`;

const BackView = styled.div`
  width: 100vw;
  height: 100vh;

  background: red;
`;
