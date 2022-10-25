import Portrait from "@/assets/story/portrait.png";
import Text1 from "@/assets/story/text1.png";
import Text2 from "@/assets/story/text4.png";
import { useScroll, motion, useTransform, useMotionValue } from "framer-motion";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";

interface Act1Slide1Props {}
export const Act1Slide1 = ({}: Act1Slide1Props) => {
  const [offsetX, setOffsetX] = useState(0);
  const { scrollX, scrollYProgress, scrollXProgress } = useScroll({
    target: { current: document.getElementById("page-scroll") },
    container: { current: document.getElementById("page-scroll") },
  });

  const [ref, inView, entry] = useInView({
    /* Optional options */
    threshold: 0.2,
    triggerOnce: false,
  });

  console.log(entry?.rootBounds);

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
    visible: { opacity: 1, scale: 1 },
    hidden: {
      opacity: 1,
      scale: 0.5,
    },
  };

  const x = useTransform(scrollX, [offsetX, offsetX + 700], [-70, 0]);
  const y = useTransform(scrollX, [offsetX, offsetX + 700], [200, -50]);
  const scale = useTransform(scrollX, [offsetX, offsetX + 700], [1.3, 1], {
    clamp: true,
  });

  console.log(offsetX);

  return (
    <div
      ref={(x) => x && setOffsetX(x!.offsetLeft)}
      style={{ position: "relative" }}
    >
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
          style={{ top: "0px", right: "50px", width: "500px" }}
        />
        <MotionImage
          src={Portrait}
          //animate={inView ? "visible" : "hidden"}
          //variants={variantsPortrait}
          //transition={{ duration: 2, ease: "easeOut", delay: 0.25 }}
          style={{
            x,
            y,
            scale,
            right: "500px",
            bottom: "0px",
            height: "90vh",
          }}
        />
      </Container>
    </div>
  );
};

const Container = styled(motion.div)`
  width: 100vw;
  height: 100vh;

  background: #972618;
`;

const MotionImage = styled(motion.img)`
  position: absolute;

  transform-origin: bottom;
`;
