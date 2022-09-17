import Image1 from "../../assets/intro/img1.jpg";
import Image2 from "../../assets/intro/img2.jpg";
import LogoImage from "../../assets/intro/logo.png";
import MaskImage from "../../assets/intro/mask.png";
import { ThreeImage } from "../components/ThreeImage";
import { ScrollOffsetContext } from "../contexts";
import { Slide1 } from "../slides";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useScroll, motion } from "framer-motion";
import React, { useMemo, useState, WheelEvent } from "react";
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

  const onWheel = (e: WheelEvent) => {
    setY((prev) => Math.max(-200, prev + e.deltaY * 0.05));

    if (y >= 600) {
      history.push("/story");
    }
  };

  console.log(y);

  return (
    <Container onWheel={onWheel}>
      <Canvas style={{ width: "100%", height: "100%" }}>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />

        <ThreeImage position={new THREE.Vector3(-60, 20, -20)} src={Image1} />
        <ThreeImage position={new THREE.Vector3(60, -20, -30)} src={Image1} />

        <ThreeImage position={new THREE.Vector3(80, 40, -150)} src={Image1} />
        <ThreeImage position={new THREE.Vector3(-80, -40, -160)} src={Image1} />

        <ThreeImage position={new THREE.Vector3(10, 0, -320)} src={Image1} />
        <ThreeImage position={new THREE.Vector3(0, 0, -480)} src={Image2} />

        <ThreeImage position={new THREE.Vector3(0, 0, -590)} src={LogoImage} />
        <ThreeImage position={new THREE.Vector3(0, 0, -600)} src={MaskImage} />

        <Controls pos={new THREE.Vector3(0, 0, -Math.min(500, y))} />
      </Canvas>
    </Container>
  );
};

interface ControlsProps {
  pos: THREE.Vector3;
}
const Controls = ({ pos = new THREE.Vector3() }: ControlsProps) => {
  const camera = useThree((state) => state.camera);
  const gl = useThree((state) => state.gl);

  return useFrame((state, delta) => {
    state.camera.position.lerp(pos, 0.03);
    state.camera.updateProjectionMatrix();
  });
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;
