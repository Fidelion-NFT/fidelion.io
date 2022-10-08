import { SideMenu } from "../../components/SideMenu";
import { Act1Slide1, Act1Slide2 } from "../slides/act1";
import { Act1Slide3 } from "../slides/act1/Act1Slide3";
import { Act1Page } from "./Act1Page";
import { BattleFieldPage } from "./BattlefieldPage";
import Image3 from "@/assets/intro/bg.webp";
import { useScroll, motion } from "framer-motion";
import React, { useEffect, useRef, useState, WheelEvent } from "react";
import Slider from "react-slick";
import styled from "styled-components";

interface MenuPageProps {}
export const MenuPage = ({}: MenuPageProps) => {
  const carouselRef = useRef<Slider>(null);

  return (
    <Container>
      <SideMenu />
      <Slider
        ref={carouselRef}
        vertical={false}
        slidesToShow={1}
        infinite={false}
        dots={false}
        arrows={false}
      >
        <MenuContainer>
          <MenuItemText onClick={() => carouselRef.current?.slickGoTo(1)}>
            ACT1
          </MenuItemText>
          <MenuItemText onClick={() => carouselRef.current?.slickGoTo(2)}>
            ACT2
          </MenuItemText>
          <MenuItemText>ACT3</MenuItemText>
        </MenuContainer>

        <Act1Page />
        <BattleFieldPage />
      </Slider>
    </Container>
  );
};

const Container = styled.div`
  position: relative;

  width: 100vw;
  height: 100vh;

  overflow: hidden;
`;

const MenuContainer = styled.div`
  width: 100vw;
  height: 100vh;

  background: url(${Image3});
  background-size: 100% 100%;
  background-repeat: no-repeat;

  display: flex !important;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const MenuItemText = styled.div`
  font-size: 30px;
  font-weight: bold;

  color: black;

  cursor: pointer;
`;
