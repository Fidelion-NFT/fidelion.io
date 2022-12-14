import { TimeBar } from "../components";
import { ThreeImage } from "../components/ThreeImage";
import { ScrollOffsetContext } from "../contexts";
import { Slide1 } from "../slides";
import Slide1Text from "@/assets/intro/1.svg";
import Slide2Left from "@/assets/intro/2l.png";
import Slide2Right from "@/assets/intro/2r.png";
import Slide3Left from "@/assets/intro/3l.png";
import Slide3Right from "@/assets/intro/3r.png";
import Slide4Left from "@/assets/intro/4l.png";
import Slide4Right from "@/assets/intro/4r.png";
import LogoImage from "@/assets/intro/logo.png";
import MaskImage from "@/assets/intro/mask.png";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useScroll, motion, AnimatePresence } from "framer-motion";
import React, { useLayoutEffect, useMemo, useState, WheelEvent } from "react";
import FlipNumbers from "react-flip-numbers";
import { useInView } from "react-intersection-observer";
import { useHistory } from "react-router-dom";
import styled, { css } from "styled-components";
import * as THREE from "three";
import TinyGesture from "tinygesture";

const MaxDistance = 2000;

let wheelSpeed = 0.092;

interface IntroPageProps {}
export const IntroPage = ({}: IntroPageProps) => {
  const history = useHistory();
  const [y, setY] = useState(-200);
  const { scrollY } = useScroll();
  const [ref, inView, entry] = useInView({
    /* Optional options */
    threshold: 0.5,
    triggerOnce: false,
  });
  const [started, setStarted] = useState(false);

  const shouldFadeOut = y >= MaxDistance;

  const [slides, setSlides] = useState([
    {
      x: 0,
      y: 0,
      z: -20,
      width: 100,
      src: "/intro/0.svg",
    },
    {
      x: -29,
      y: 1,
      z: -150,
      width: 50,
      src: "/intro/1l.png",
    },
    {
      x: 29,
      y: 1,
      z: -150,
      width: 50,
      src: "/intro/1r.png",
    },
    {
      x: -29,
      y: 1,
      z: -300,
      width: 50,
      src: "/intro/2l.png",
    },
    {
      x: 29,
      y: 1,
      z: -300,
      width: 50,
      src: "/intro/2r.png",
    },
    {
      x: -29,
      y: 1,
      z: -450,
      width: 50,
      src: "/intro/3l.png",
    },
    {
      x: 29,
      y: 1,
      z: -450,
      width: 50,
      src: "/intro/3r.png",
    },
    {
      x: 0,
      y: 0,
      z: -600,
      width: 100,
      fadeOut: true,
      src: "/intro/3.svg",
    },
    {
      x: -29,
      y: 1,
      z: -750,
      width: 50,
      src: "/intro/4l.png",
    },
    {
      x: 29,
      y: 1,
      z: -750,
      width: 50,
      src: "/intro/4r.png",
    },
    {
      x: -29,
      y: 1,
      z: -900,
      width: 50,
      src: "/intro/5l.png",
    },
    {
      x: 29,
      y: 1,
      z: -900,
      width: 50,
      src: "/intro/5r.png",
    },
    {
      x: -29,
      y: 1,
      z: -1050,
      width: 50,
      src: "/intro/6l.png",
    },
    {
      x: 29,
      y: 1,
      z: -1050,
      width: 50,
      src: "/intro/6r.png",
    },
    {
      x: 0,
      y: 0,
      z: -1300,
      width: 100,
      src: "/intro/6.svg",
    },
    {
      x: -29,
      y: 1,
      z: -1450,
      width: 50,
      src: "/intro/7l.png",
    },
    {
      x: 29,
      y: 1,
      z: -1450,
      width: 50,
      src: "/intro/7r.png",
    },
    {
      x: -29,
      y: 1,
      z: -1600,
      width: 50,
      src: "/intro/8l.png",
    },
    {
      x: 29,
      y: 1,
      z: -1600,
      width: 50,
      src: "/intro/8r.png",
    },
    {
      x: -29,
      y: 1,
      z: -1750,
      width: 50,
      src: "/intro/9l.png",
    },
    {
      x: 29,
      y: 1,
      z: -1750,
      width: 50,
      src: "/intro/9r.png",
    },
    {
      x: -29,
      y: 1,
      z: -1900,
      width: 50,
      src: "/intro/10l.png",
    },
    {
      x: 29,
      y: 1,
      z: -1900,
      width: 50,
      src: "/intro/10r.png",
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
    move(e.deltaY * wheelSpeed);
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
      wheelSpeed = speed;
    };

    const target = document.getElementById("container");
    const gesture = new TinyGesture(target!, {});

    gesture.on("panmove", (event) => {
      move(-gesture.velocityY! * 0.65);
    });
  }, []);

  console.log(Math.floor(y / 50));

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

        {/*}
        <ThreeImage
          width={100}
          fadeOut={false}
          position={new THREE.Vector3(0, 0, -990)}
          src={LogoImage}
        />
        <ThreeImage
          width={100}
          fadeOut={false}
          position={new THREE.Vector3(0, 0, -1000)}
          src={MaskImage}
        />
        */}
        <Controls pos={new THREE.Vector3(0, 0, -Math.min(MaxDistance, y))} />
      </Canvas>

      <InfoContainer fadeOut={shouldFadeOut}>
        <YearTextContainer>
          <FlipNumbers
            play
            color="white"
            width={20}
            height={20}
            numbers={`${Math.floor(y / 50)}`}
          />
        </YearTextContainer>

        <TimeBar offset={y} onClick={(index) => moveTo(index * 50)} />

        <AnimatePresence>
          {started ? (
            <BottomText>58 YEARS OF DUST80</BottomText>
          ) : (
            <SkipText onClick={onSkip}>Skip Intro</SkipText>
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
