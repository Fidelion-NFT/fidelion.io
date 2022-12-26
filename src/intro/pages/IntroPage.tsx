import { TimeBar } from "../components";
import { ThreeImage } from "../components/ThreeImage";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useScroll, motion, AnimatePresence } from "framer-motion";
import React, { useLayoutEffect, useMemo, useState, WheelEvent } from "react";
import FlipNumbers from "react-flip-numbers";
import { useHistory } from "react-router-dom";
import styled, { css } from "styled-components";
import * as THREE from "three";
import TinyGesture from "tinygesture";

let MaxDistance = 1750;
let WheelSpeed = 0.092;

interface IntroPageProps {}
export const IntroPage = ({}: IntroPageProps) => {
  const history = useHistory();
  const [y, setY] = useState(-200);
  const [fadeInFinished, setFadeInFinished] = useState(false);
  const [started, setStarted] = useState(false);

  const shouldFadeOut = y >= MaxDistance;

  const [slides, setSlides] = useState([
    {
      x: 0,
      y: 0,
      z: 150,
      width: 100,
      special: true,
      src: "/intro/2080.svg",
    },
    {
      x: 0,
      y: 0,
      z: -20,
      width: 100,
      special: true,
      src: "/intro/0.svg",
    },
    {
      x: -27,
      y: 1,
      z: -200,
      width: 50,
      year: 2023,
      src: "/intro/1l.png",
    },
    {
      x: 27,
      y: 1,
      z: -250,
      width: 50,
      year: 2024,
      src: "/intro/1r.png",
    },
    {
      x: -27,
      y: 1,
      z: -300,
      width: 50,
      year: 2024,
      src: "/intro/2l.png",
    },
    {
      x: 27,
      y: 1,
      z: -350,
      width: 50,
      year: 2024,
      src: "/intro/2r.png",
    },
    {
      x: -27,
      y: 1,
      z: -400,
      width: 50,
      year: 2025,
      src: "/intro/3l.png",
    },
    {
      x: 27,
      y: 1,
      z: -450,
      width: 50,
      year: 2025,
      src: "/intro/3r.png",
    },
    {
      x: 0,
      y: 0,
      z: -570,
      width: 100,
      special: true,
      fadeOut: true,
      year: 2025,
      src: "/intro/3.svg",
    },
    {
      x: -27,
      y: 1,
      z: -690,
      width: 50,
      year: 2030,
      src: "/intro/4l.png",
    },
    {
      x: 27,
      y: 1,
      z: -740,
      width: 50,
      year: 2030,
      src: "/intro/4r.png",
    },
    {
      x: -27,
      y: 1,
      z: -790,
      width: 50,
      year: 2031,
      src: "/intro/5l.png",
    },
    {
      x: 27,
      y: 1,
      z: -840,
      width: 50,
      year: 2032,
      src: "/intro/5r.png",
    },
    {
      x: -27,
      y: 1,
      z: -890,
      width: 50,
      year: 2032,
      src: "/intro/6l.png",
    },
    {
      x: 27,
      y: 1,
      z: -940,
      width: 50,
      year: 2032,
      src: "/intro/6r.png",
    },
    {
      x: 0,
      y: 0,
      z: -1060,
      width: 100,
      special: true,
      fadeOut: true,
      src: "/intro/6.svg",
    },
    {
      x: -27,
      y: 1,
      z: -1110,
      width: 50,
      year: 2033,
      src: "/intro/7l.png",
    },
    {
      x: 27,
      y: 1,
      z: -1160,
      width: 50,
      year: 2042,
      src: "/intro/7r.png",
    },
    {
      x: -27,
      y: 1,
      z: -1210,
      width: 50,
      year: 2054,
      src: "/intro/8l.png",
    },
    {
      x: 27,
      y: 1,
      z: -1260,
      width: 50,
      year: 2054,
      src: "/intro/8r.png",
    },
    {
      x: -27,
      y: 1,
      z: -1310,
      width: 50,
      year: 2055,
      src: "/intro/9l.png",
    },
    {
      x: 27,
      y: 1,
      z: -1360,
      width: 50,
      year: 2059,
      src: "/intro/9r.png",
    },
    {
      x: -27,
      y: 1,
      z: -1410,
      width: 50,
      year: 2062,
      src: "/intro/10l.png",
    },
    {
      x: 27,
      y: 1,
      z: -1460,
      width: 50,
      year: 2068,
      src: "/intro/10r.png",
    },
    {
      x: 0,
      y: 0,
      z: -1600,
      width: 50,
      special: true,
      year: 2080,
      src: "/intro/11.svg",
    },
    {
      x: 0,
      y: 0,
      z: -1800,
      width: 50,
      special: true,
      src: "/intro/12.svg",
    },
  ]);

  const move = (amount: number) => {
    setStarted(true);
    setY((prev) => Math.max(-200, prev + amount));

    if (y >= MaxDistance + 200) {
      history.push("/story");
    }
  };

  const moveTo = (to: number) => {
    setY(to);
  };

  const onWheel = (e: WheelEvent) => {
    move(e.deltaY * WheelSpeed);
  };

  const onSkip = () => {
    history.push("/story");
  };

  useLayoutEffect(() => {
    // @ts-ignore
    window.setSlides = (slides: any[]) => {
      setSlides(slides);
    };

    // @ts-ignore
    window.setSpeed = (speed: number) => {
      WheelSpeed = speed;
    };

    // @ts-ignore
    window.setMaxDistance = (speed: number) => {
      MaxDistance = speed;
    };

    const target = document.getElementById("container");
    const gesture = new TinyGesture(target!, {});

    gesture.on("panmove", (event) => {
      move(-gesture.velocityY! * 0.65);
    });
  }, []);

  useLayoutEffect(() => {
    setTimeout(() => {
      setFadeInFinished(true);
    }, 2200);
  }, []);

  console.log(slides.length, Math.floor(y));

  console.log("y", y);

  const currentYear =
    slides.filter((x) => x.year! > 0).find((x) => x.z <= -y)?.year! - 2000;

  return (
    <Container id="container" onWheel={onWheel}>
      <Canvas style={{ width: "100%", height: "100%" }}>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />

        {slides.map((x: any, index) => (
          <ThreeImage
            width={x.width}
            key={index}
            fadeOut={x.fadeOut}
            position={new THREE.Vector3(x.x, x.y, x.z)}
            src={x.src}
          />
        ))}

        <Controls pos={new THREE.Vector3(0, 0, -Math.min(MaxDistance, y))} />
      </Canvas>

      <InfoContainer fadeOut={shouldFadeOut}>
        <YearTextContainer>
          {y > 50 && (
            <FlipNumbers
              play
              color="white"
              width={30}
              height={40}
              numbers={`${currentYear}`}
            />
          )}
        </YearTextContainer>

        <TimeBar
          offset={y}
          year={currentYear}
          onClick={(index) => {
            console.log(index, slides.filter((x) => !x.special)[index].z);
            moveTo(-slides.filter((x) => !x.special)[index].z - 52.5);
          }}
        />

        <AnimatePresence>
          {fadeInFinished && (
            <>
              {!started && (
                <ScrollToStartText key="scroll_to_start">
                  SCROLL 2 START
                </ScrollToStartText>
              )}

              {started ? (
                <BottomText>58 YEARS OF Fidelion</BottomText>
              ) : (
                <SkipText key="skip_intro" onClick={onSkip}>
                  Skip Intro
                </SkipText>
              )}
            </>
          )}
        </AnimatePresence>
      </InfoContainer>
    </Container>
  );
};

interface ControlsProps {
  pos: THREE.Vector3;
}
const Controls = ({ pos = new THREE.Vector3() }: ControlsProps) => {
  const camera = useThree((state) => state.camera);
  const gl = useThree((state) => state.gl);

  useLayoutEffect(() => {
    camera.position.set(pos.x, pos.y, pos.z);
  }, []);

  return useFrame((state, delta) => {
    state.camera.position.lerp(pos, 0.03);
    state.camera.updateProjectionMatrix();
  });
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;

  overflow: hidden;

  div,
  span {
    font-family: "Charter";
  }
`;

const InfoContainer = styled.div<{ fadeOut: boolean }>`
  position: absolute;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;

  will-change: transform;
  transition: all 3.2s ease;

  ${({ fadeOut }) =>
    fadeOut
      ? css`
          opacity: 0;
          transform: scale(2);
        `
      : css``}
`;

const YearTextContainer = styled.div`
  position: fixed;
  left: 24px;
  bottom: 24px;

  span {
    font-family: "Charter-Bold";
  }
`;

const BottomCenterText = styled(motion.div).attrs({
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.9,
    },
  },
  exit: {
    opacity: 0,
  },
})`
  position: fixed;
  left: 0%;
  bottom: 24px;
  width: 100%;

  text-align: center;
`;
const SkipText = styled(BottomCenterText)`
  color: white;

  font-size: 20px;

  cursor: pointer;
`;
const BottomText = styled(BottomCenterText)`
  color: white;

  font-size: 20px;
`;

const ScrollToStartText = styled(motion.div).attrs({
  className: "animate__animated animate__flash animate__infinite ",
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 2.5,
    },
  },
  exit: {
    opacity: 0,
  },
})`
  position: fixed;
  left: 0%;
  bottom: 50vh;
  width: 100%;

  color: white;

  font-weight: 200;
  font-size: 30px;
  line-height: 36px;

  text-align: center;

  --animate-duration: 5.5s;
`;
