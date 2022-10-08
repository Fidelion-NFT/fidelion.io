import Amblem from "@/assets/story/amblem.png";
import Image from "@/assets/story/image.png";
import Text1 from "@/assets/story/text3.png";
import { useScroll, motion, useTransform, useMotionValue } from "framer-motion";
import React from "react";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";

interface Act1Slide3Props {}
export const Act1Slide3 = ({}: Act1Slide3Props) => {
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
  const variantsAmblem = {
    visible: { opacity: 1, scale: 1, x: 0 },
    hidden: {
      opacity: 0,
      x: 50,
    },
  };
  const variantsImage = {
    visible: { opacity: 1, scale: 1, y: 0 },
    hidden: {
      opacity: 0,
      y: 2000,
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
          style={{ left: "50px", bottom: "50px", width: "50vw" }}
        />
        <MotionImage
          src={Amblem}
          animate={inView ? "visible" : "hidden"}
          variants={variantsAmblem}
          transition={{ duration: 2, ease: "easeOut", delay: 0.5 }}
          style={{ top: "50px", left: "50px" }}
        />
        <MotionImage
          src={Image}
          animate={inView ? "visible" : "hidden"}
          variants={variantsImage}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.05 }}
          style={{ right: "0px", bottom: "0px", height: "100vh" }}
        />
      </Container>
    </div>
  );
};

const Container = styled(motion.div)`
  width: 100vw;
  height: 100vh;

  background: black;
`;

const MotionImage = styled(motion.img)`
  position: absolute;
`;
