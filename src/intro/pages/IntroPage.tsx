import Slide1Text from "../../assets/intro/1.svg";
import Slide2Left from "../../assets/intro/2l.png";
import Slide2Right from "../../assets/intro/2r.png";
import Slide3Left from "../../assets/intro/3l.png";
import Slide3Right from "../../assets/intro/3r.png";
import Slide4Left from "../../assets/intro/4l.png";
import Slide4Right from "../../assets/intro/4r.png";
import LogoImage from "../../assets/intro/logo.png";
import MaskImage from "../../assets/intro/mask.png";
import { TimeBar } from "../components";
import { ThreeImage } from "../components/ThreeImage";
import { ScrollOffsetContext } from "../contexts";
import { Slide1 } from "../slides";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useScroll, motion } from "framer-motion";
import React, { useLayoutEffect, useMemo, useState, WheelEvent } from "react";
import { useInView } from "react-intersection-observer";
import { useHistory } from "react-router-dom";
import styled, { css } from "styled-components";
import * as THREE from "three";
import TinyGesture from "tinygesture";

const MaxDistance = 950;

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

  const shouldFadeOut = y >= MaxDistance;

  const [slides, setSlides] = useState([
    {
      x: 0,
      y: 0,
      z: -20,
      width: 100,
      src: "/intro/1.svg",
    },
    {
      x: 29,
      y: 1,
      z: -150,
      width: 50,
      src: "/intro/2l.png",
    },
    {
      x: -34,
      y: 0,
      z: -110,
      width: 65,
      src: "/intro/2r.png",
    },
    {
      x: 35,
      y: 0,
      z: -230,
      width: 65,
      src: "/intro/3l.png",
    },
    {
      x: -25,
      y: 0,
      z: -190,
      width: 45,
      src: "/intro/3r.png",
    },
    {
      x: 34,
      y: 0,
      z: -310,
      width: 65,
      src: "/intro/4l.png",
    },
    {
      x: -35,
      y: -2,
      z: -270,
      width: 65,
      src: "/intro/4r.png",
    },
  ]);

  const move = (amount: number) => {
    setY((prev) => Math.max(-200, prev + amount));

    if (y >= MaxDistance + 200) {
      history.push("/story");
    }
  };

  const onWheel = (e: WheelEvent) => {
    move(e.deltaY * 0.085);
  };

  useLayoutEffect(() => {
    // @ts-ignore
    window.setSlides = (slides: any[]) => {
      setSlides(slides);
    };

    const target = document.getElementById("container");
    const gesture = new TinyGesture(target!, {});

    gesture.on("panmove", (event) => {
      move(-gesture.velocityY! * 0.65);
    });
  }, []);

  return (
    <Container id="container" onWheel={onWheel}>
      <Canvas style={{ width: "100%", height: "100%" }}>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />

        {slides.map((x: any, index) => (
          <ThreeImage
            width={x.width}
            key={index}
            position={new THREE.Vector3(x.x, x.y, x.z)}
            src={x.src}
          />
        ))}

        <ThreeImage
          width={100}
          position={new THREE.Vector3(0, 0, -990)}
          src={LogoImage}
        />
        <ThreeImage
          width={100}
          position={new THREE.Vector3(0, 0, -1000)}
          src={MaskImage}
        />

        <Controls pos={new THREE.Vector3(0, 0, -Math.min(MaxDistance, y))} />
      </Canvas>

      <InfoContainer fadeOut={shouldFadeOut}>
        <TimeBar offset={y} />

        <BottomText>58 YEARS OF DUST80</BottomText>
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

const BottomText = styled.div`
  position: fixed;
  left: 0%;
  bottom: 24px;
  width: 100%;

  color: white;

  font-size: 20px;
  text-align: center;
`;
