import { Act1Slide1, Act1Slide2 } from "../slides/act1";
import { Act1Slide3 } from "../slides/act1/Act1Slide3";
import { useStores } from "../stores";
import { Act1Page } from "./Act1Page";
import { BattleFieldPage } from "./BattlefieldPage";
import { HarrierRegistrationPage } from "./HarrierRegistrationPage";
import { TeamPage } from "./TeamPage";
import Image3 from "@/assets/intro/bg.webp";
import { SideMenu } from "@/components/SideMenu";
import { useScroll, motion } from "framer-motion";
import { observer } from "mobx-react";
import React, {
  MutableRefObject,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  WheelEvent,
} from "react";
import { useHistory, useLocation } from "react-router-dom";
import Slider from "react-slick";
import styled, { css } from "styled-components";

interface MenuPageProps {}
export const MenuPage = observer(({}: MenuPageProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { hash: page = "#menu" } = useLocation();
  const { sideMenuStore } = useStores();
  const pageRefs = useRef<Record<string, HTMLDivElement>>({});
  const hash = page.substring(1);

  const PageComponent = {
    menu: MenuHome,
    act1: Act1Page,
    battlefield: BattleFieldPage,
    team: TeamPage,
    harrier_registration: HarrierRegistrationPage,
  }[hash]!;

  if (!PageComponent) {
    window.location.hash = "#menu";
  }

  useLayoutEffect(() => {
    console.log(pageRefs.current[hash]);
    pageRefs.current[hash]?.scrollIntoView({
      behavior: "smooth",
    });
  }, [hash]);

  useEffect(() => {
    containerRef.current!.addEventListener("wheel", (evt) => {
      evt.preventDefault();
      containerRef.current!.scrollLeft += evt.deltaY * 0.6;
    });
  }, []);

  return (
    <Container>
      <SideMenu />

      <DrawerContainer showMenu={sideMenuStore.showMenu}>
        <MenuHome />

        <PageContainer ref={containerRef}>
          <HarrierRegistrationPage
            ref={(x) => (pageRefs.current["harrier_registration"] = x!)}
          />
          <BattleFieldPage
            ref={(x) => (pageRefs.current["battlefield"] = x!)}
          />
        </PageContainer>
      </DrawerContainer>
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
});

const MenuHome = () => {
  const history = useHistory();
  const { sideMenuStore } = useStores();

  const navigate = (to: string) => {
    sideMenuStore.showMenu = false;

    setTimeout(() => {
      history.push(to);
    }, 450);
  };

  useLayoutEffect(() => {
    sideMenuStore.backgroundColor = "black";

    return () => {
      sideMenuStore.backgroundColor = "rgba(0,0,0,0)";
    };
  }, []);

  return (
    <MenuContainer>
      <MenuItemText onClick={() => navigate("#act1")}>ACT1</MenuItemText>
      <MenuItemText onClick={() => navigate("#battlefield")}>ACT2</MenuItemText>
      <MenuItemText onClick={() => navigate("#team")}>ACT3</MenuItemText>
      <MenuItemText onClick={() => navigate("#harrier_registration")}>
        HARRIER
      </MenuItemText>
    </MenuContainer>
  );
};

const Container = styled.div`
  position: relative;

  width: 100vw;
  height: 100vh;

  overflow: hidden;
`;

const DrawerContainer = styled.div<{ showMenu: boolean }>`
  > div {
    position: absolute;
    top: 0px;

    will-change: transform;
    transition: all 0.65s ease;

    &:nth-child(1) {
      left: -100vw;
      z-index: 10;
    }
    &:nth-child(2) {
      left: 0px;
    }
  }

  transition: all 0.6s ease;

  ${({ showMenu }) =>
    showMenu
      ? css`
          > div {
            &:nth-child(1) {
              opacity: 1;
              transform: translateX(100vw);
            }
            &:nth-child(2) {
              opacity: 0;
              transform: translateX(100vw);
            }
          }
        `
      : css`
          > div {
            &:nth-child(1) {
              opacity: 0.5;
              transform: translateX(0vw);
            }
            &:nth-child(2) {
              opacity: 1;
              transform: translateX(0vw);
            }
          }
        `}
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
