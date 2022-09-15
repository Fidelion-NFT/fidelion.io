import Portrait from "../../../assets/story/portrait.png";
import Text1 from "../../../assets/story/text1.png";
import Text2 from "../../../assets/story/text2.png";
import { useScroll, motion, useTransform, useMotionValue } from "framer-motion";
import React from "react";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";

interface Act1Slide1Props {}
export const Act1Slide1 = ({}: Act1Slide1Props) => {
  const { scrollX } = useScroll();

  const [ref, inView, entry] = useInView({
    /* Optional options */
    threshold: 0.2,
    triggerOnce: false,
  });

  const variantsText1 = {
    visible: { opacity: 1, scale: 1, x: 0 },
    hidden: {
      opacity: 0,
      x: -50,
    },
  };
  const variantsText2 = {
    visible: { opacity: 1, scale: 1, x: 0 },
    hidden: {
      opacity: 0,
      x: 50,
    },
  };
  const variantsPortrait = {
    visible: { opacity: 1, scale: 1, x: 0 },
    hidden: {
      opacity: 0,
      scale: 1.1,
      x: 150,
    },
  };

  return (
    <div style={{ position: "relative" }}>
      <Container ref={ref}>
        <MotionImage
          src={Text1}
          animate={inView ? "visible" : "hidden"}
          variants={variantsText1}
          transition={{ duration: 2, ease: "easeOut" }}
          style={{ left: "50px", bottom: "50px" }}
        />
        <MotionImage
          src={Text2}
          animate={inView ? "visible" : "hidden"}
          variants={variantsText2}
          transition={{ duration: 2, ease: "easeOut", delay: 0.5 }}
          style={{ top: "0px", right: "50px" }}
        />
        <MotionImage
          src={Portrait}
          animate={inView ? "visible" : "hidden"}
          variants={variantsPortrait}
          transition={{ duration: 2, ease: "easeOut", delay: 0.25 }}
          style={{ right: "50px", bottom: "0px", height: "50vw" }}
        />
      </Container>
    </div>
  );
};

const Container = styled(motion.div)`
  width: 100vw;
  height: 100vh;

  background: red;
`;

const MotionImage = styled(motion.img)`
  position: absolute;
`;
