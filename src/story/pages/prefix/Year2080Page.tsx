import { ViewMarker } from "../../components";
import Year2080TextImage from "@/assets/story/prefix/year2080.png";
import YearTextImage from "@/assets/story/prefix/year.svg";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { forwardRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import styled, { css } from "styled-components";

interface Year2080PageProps {}
export const Year2080Page = forwardRef<HTMLDivElement>(
  ({}: Year2080PageProps, forwardedRef) => {
    const [offsetX, setOffsetX] = useState(0);
    const { scrollX, scrollYProgress, scrollXProgress } = useScroll({
      target: { current: document.getElementById("page-scroll") },
      container: { current: document.getElementById("page-scroll") },
    });

    const [ref, inView, entry] = useInView({
      threshold: 0.2,
      triggerOnce: false,
    });

    const variantsText2 = {
      visible: { opacity: 1, scale: 1, x: 0 },
      hidden: {
        opacity: 0,
        x: 50,
      },
    };

    const y = useTransform(
      scrollX,
      [offsetX + 500, offsetX + 1700],
      [0, -1000]
    );

    return (
      <div
        ref={(x) => setOffsetX(x?.offsetLeft)}
        style={{ position: "relative" }}
      >
        <SlideContainer
          ref={(x) => {
            ref.current = x;
            forwardedRef!.current = x;
          }}
        >
          <ViewMarker name="p1" color="black" />

          <YearImage
            src={Year2080TextImage}
            variants={variantsText2}
            transition={{ duration: 2, ease: "easeOut" }}
            style={{
              y,
              left: "calc(50vw)",
              top: "50px",
              width: "50vw",
            }}
          />
        </SlideContainer>
      </div>
    );
  }
);

const SlideContainer = styled(motion.div)`
  position: relative;
  width: 200vw;
  height: 100vh;

  background: black;
`;
const MotionImage = styled(motion.img)`
  position: sticky;
  transform-origin: bottom;
`;
const YearImage = styled(MotionImage)``;
const _2080Image = styled(MotionImage)``;
