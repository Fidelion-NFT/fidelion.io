import { TimeBar } from "../components";
import { ClickToMusicOverlay } from "../components/ClickToMusicOverlay";
import { ThreeImage } from "../components/ThreeImage";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useScroll, motion, AnimatePresence } from "framer-motion";
import React, { useLayoutEffect, useMemo, useState, WheelEvent } from "react";
import FlipNumbers from "react-flip-numbers";
import { useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";
import * as THREE from "three";
import TinyGesture from "tinygesture";

let WheelSpeed = 0.092;

interface IntroPageProps {}
export const IntroPage = ({}: IntroPageProps) => {
  const navigate = useNavigate();
  const [y, setY] = useState(-200);
  const [fadeInFinished, setFadeInFinished] = useState(false);
  const [started, setStarted] = useState(false);
  const [isReady, setIsReady] = useState(false);

  const [slides, setSlides] = useState([
    {
      x: 0,
      y: 0,
      z: 150,
      width: 100,
      src: "/intro/2080.svg",
    },
    {
      x: 0,
      y: 0,
      z: 0,
      width: 100,
      src: "/intro/0.svg",
    },
    {
      x: -27,
      y: 1,
      z: -180,
      width: 50,
      year: 2023,
      src: "/intro/1l.png",
    },
    {
      x: 27,
      y: 1,
      z: -210,
      width: 50,
      year: 2024,
      src: "/intro/1r.png",
    },
    {
      x: -27,
      y: 1,
      z: -290,
      width: 50,
      year: 2024,
      src: "/intro/2l.png",
    },
    {
      x: 27,
      y: 1,
      z: -320,
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
      z: -430,
      width: 50,
      src: "/intro/3r.png",
    },
    {
      x: 0,
      y: 0,
      z: -590,
      width: 100,
      fadeOut: true,
      year: 2025,
      src: "/intro/3.svg",
    },
    {
      x: -27,
      y: 1,
      z: -770,
      width: 50,
      year: 2030,
      src: "/intro/4l.png",
    },
    {
      x: 27,
      y: 1,
      z: -800,
      width: 50,
      year: 2030,
      src: "/intro/4r.png",
    },
    {
      x: -27,
      y: 1,
      z: -880,
      width: 50,
      year: 2031,
      src: "/intro/5l.png",
    },
    {
      x: 27,
      y: 1,
      z: -910,
      width: 50,
      year: 2032,
      src: "/intro/5r.png",
    },
    {
      x: -27,
      y: 1,
      z: -990,
      width: 50,
      year: 2032,
      src: "/intro/6l.png",
    },
    {
      x: 27,
      y: 1,
      z: -1020,
      width: 50,
      year: 2032,
      src: "/intro/6r.png",
    },
    {
      x: 0,
      y: 0,
      z: -1180,
      width: 100,
      special: true,
      fadeOut: true,
      src: "/intro/6.svg",
    },
    {
      x: -27,
      y: 1,
      z: -1360,
      width: 50,
      year: 2033,
      src: "/intro/7l.png",
    },
    {
      x: 27,
      y: 1,
      z: -1390,
      width: 50,
      year: 2042,
      src: "/intro/7r.png",
    },
    {
      x: -27,
      y: 1,
      z: -1470,
      width: 50,
      year: 2054,
      src: "/intro/8l.png",
    },
    {
      x: 27,
      y: 1,
      z: -1500,
      width: 50,
      year: 2054,
      src: "/intro/8r.png",
    },
    {
      x: -27,
      y: 1,
      z: -1580,
      width: 50,
      year: 2055,
      src: "/intro/9l.png",
    },
    {
      x: 27,
      y: 1,
      z: -1610,
      width: 50,
      year: 2059,
      src: "/intro/9r.png",
    },
    {
      x: -27,
      y: 1,
      z: -1690,
      width: 50,
      year: 2062,
      src: "/intro/10l.png",
    },
    {
      x: 27,
      y: 1,
      z: -1720,
      width: 50,
      year: 2068,
      src: "/intro/10r.png",
    },
    {
      x: 0,
      y: 0,
      z: -1940,
      width: 50,
      special: true,
      year: 2080,
      src: "/intro/11.svg",
    },
  ]);

  const MaxDistance = -slides[slides.length - 1].z;

  const shouldFadeOut = y >= MaxDistance;

  const move = (amount: number) => {
    if (!isReady) {
      return;
    }

    setStarted(true);
    setY((prev) => Math.min(MaxDistance + 100, Math.max(-200, prev + amount)));

    if (y >= MaxDistance + 100) {
      setTimeout(() => {
        navigate("/story");
      }, 2500);
    }
  };

  const moveTo = (to: number) => {
    setY(to);
  };

  const onWheel = (e: WheelEvent) => {
    move(e.deltaY * WheelSpeed);
  };

  const onSkip = () => {
    navigate("/story");
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

      {isReady && (
        <InfoContainer fadeOut={shouldFadeOut}>
          <YearTextContainer>
            {y > 50 && (
              <FlipNumbers
                play
                color="white"
                width={18}
                height={27}
                numbers={`${currentYear}`}
              />
            )}
          </YearTextContainer>

          <TimeBar
            offset={y}
            year={currentYear}
            onClick={(index) => {
              // moveTo(-slides.filter((x) => !x.special)[index].z - 52.5);
              // setStarted(true);
            }}
          />

          <AnimatePresence>
            {fadeInFinished && (
              <>
                {!started && (
                  <ScrollToStartText key="scroll_to_start">
                    SCROLL DOWN
                  </ScrollToStartText>
                )}

                {started ? (
                  <BottomText>58 years of Fidelion</BottomText>
                ) : (
                  <SkipText key="skip_intro" onClick={onSkip}>
                    Skip Intro
                  </SkipText>
                )}
              </>
            )}
          </AnimatePresence>
        </InfoContainer>
      )}

      <ClickToMusicOverlay onReady={() => setIsReady(true)} />
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
  bottom: 28px;
  width: 100%;

  font-family: "Helvetica Neue" !important;

  text-align: center;
`;
const SkipText = styled(BottomCenterText)`
  color: white;

  font-size: 17px;

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

  font-family: "Helvetica Neue" !important;
  font-weight: 200;
  font-size: 25px;
  line-height: 36px;

  text-align: center;

  --animate-duration: 5.5s;
`;
