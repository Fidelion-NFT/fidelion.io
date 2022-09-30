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
import styled from "styled-components";
import * as THREE from "three";

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

  const [slides, setSlides] = useState([
    {
      x: 0,
      y: 0,
      z: -20,
      width: 100,
      src: "/intro/1.svg",
    },
    {
      x: 40,
      y: 0,
      z: -215,
      width: 65,
      src: "/intro/2l.png",
    },
    {
      x: -40,
      y: 0,
      z: -200,
      width: 65,
      src: "/intro/2r.png",
    },
    {
      x: 40,
      y: 0,
      z: -415,
      width: 65,
      src: "/intro/3l.png",
    },
    {
      x: -40,
      y: 0,
      z: -400,
      width: 65,
      src: "/intro/3r.png",
    },
    {
      x: 40,
      y: 0,
      z: -615,
      width: 65,
      src: "/intro/4l.png",
    },
    {
      x: -40,
      y: 0,
      z: -600,
      width: 65,
      src: "/intro/4r.png",
    },
  ]);

  const onWheel = (e: WheelEvent) => {
    setY((prev) => Math.max(-200, prev + e.deltaY * 0.085));

    if (y >= 1500) {
      history.push("/story");
    }
  };
  console.log(y);

  useLayoutEffect(() => {
    // @ts-ignore
    window.setSlides = (slides: any[]) => {
      setSlides(slides);
    };
  }, []);

  return (
    <Container onWheel={onWheel}>
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

        <Controls pos={new THREE.Vector3(0, 0, -Math.min(1500, y))} />
      </Canvas>

      <TimeBar offset={y} />
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
`;
