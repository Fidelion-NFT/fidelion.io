import { Act1Slide1, Act1Slide2 } from "../slides/act1";
import { Act1Slide3 } from "../slides/act1/Act1Slide3";
import { useStores } from "../stores";
import { Act1Page } from "./Act1Page";
import { BattleFieldPage } from "./BattlefieldPage";
import { TeamPage } from "./TeamPage";
import Image3 from "@/assets/intro/bg.webp";
import { SideMenu } from "@/components/SideMenu";
import { useScroll, motion } from "framer-motion";
import React, {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  WheelEvent,
} from "react";
import { useHistory, useLocation } from "react-router-dom";
import Slider from "react-slick";
import styled from "styled-components";

interface MenuPageProps {}
export const MenuPage = ({}: MenuPageProps) => {
  const carouselRef = useRef<Slider>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { hash: page = "#menu" } = useLocation();

  const PageComponent = {
    menu: MenuHome,
    act1: Act1Page,
    battlefield: BattleFieldPage,
    team: TeamPage,
  }[page.substring(1)]!;

  if (!PageComponent) {
    window.location.hash = "#menu";
  }

  useEffect(() => {
    containerRef.current!.addEventListener("wheel", (evt) => {
      evt.preventDefault();
      containerRef.current!.scrollLeft += evt.deltaY * 0.6;
    });
  }, []);

  return (
    <Container>
      <SideMenu />

      <PageContainer ref={containerRef}>
        <PageComponent />
      </PageContainer>
      {/*}
      <Slider
        ref={carouselRef}
        touchMove={false}
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
  */}
    </Container>
  );
};

const MenuHome = () => {
  const history = useHistory();
  const { sideMenuStore } = useStores();

  useLayoutEffect(() => {
    sideMenuStore.backgroundColor = "black";

    return () => {
      sideMenuStore.backgroundColor = "rgba(0,0,0,0)";
    };
  }, []);

  return (
    <MenuContainer>
      <MenuItemText onClick={() => history.push("#act1")}>ACT1</MenuItemText>
      <MenuItemText onClick={() => history.push("#battlefield")}>
        ACT2
      </MenuItemText>
      <MenuItemText onClick={() => history.push("#team")}>ACT3</MenuItemText>
    </MenuContainer>
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

  background: #fae232;

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

const PageContainer = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;

  overflow: auto;

  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
`;
