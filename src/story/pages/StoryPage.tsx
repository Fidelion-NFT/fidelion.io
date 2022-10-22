import { Act1Slide1, Act1Slide2 } from "../slides/act1";
import { Act1Slide3 } from "../slides/act1/Act1Slide3";
import { useStores } from "../stores";
import { Act1Page } from "./Act1Page";
import { Act2Page } from "./Act2Page";
import { BattleFieldPage } from "./BattlefieldPage";
import { HarrierRegistrationPage } from "./HarrierRegistrationPage";
import { MenuPage } from "./MenuPage";
import { TeamPage } from "./TeamPage";
import Image3 from "@/assets/intro/bg.webp";
import { SideMenu } from "@/components/SideMenu";
import { Slide1 } from "@/intro/slides";
import { isMac } from "@/utils";
import { useScroll, motion } from "framer-motion";
// @ts-ignore
import Impetus from "impetus";
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

let speed = 0;

interface StoryPageProps {}
export const StoryPage = observer(({}: StoryPageProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { hash: page = "#menu" } = useLocation();
  const { sideMenuStore } = useStores();
  const pageRefs = useRef<Record<string, HTMLDivElement>>({});
  const hash = page.substring(1);

  useLayoutEffect(() => {
    if (sideMenuStore.showMenu) {
      return;
    }

    setTimeout(() => {
      pageRefs.current[hash]?.scrollIntoView({
        behavior: "smooth",
      });
    }, 800);
  }, [hash, sideMenuStore.showMenu]);

  useEffect(() => {
    containerRef.current!.addEventListener("wheel", (e) => {
      e.preventDefault();

      // @ts-ignore
      const isTouchPad = e.wheelDeltaY
        ? // @ts-ignore
          e.wheelDeltaY === -3 * e.deltaY
        : e.deltaMode === 0;

      if (isTouchPad) {
        containerRef.current!.scrollLeft += e.deltaY * 0.6;
      } else {
        speed = e.deltaY * (isMac ? 0.06 : 0.243);
      }
    });
  }, []);

  useLayoutEffect(() => {
    const run = () => {
      containerRef.current!.scrollLeft += speed;

      speed = speed * 0.9056;

      requestAnimationFrame(run);
    };

    requestAnimationFrame(run);
  }, []);

  return (
    <Container>
      <SideMenu />

      <DrawerContainer showMenu={sideMenuStore.showMenu}>
        <MenuPage />

        <PageContainer ref={containerRef}>
          <Act1Slide1 />
          <Act1Slide2 />
          <Act1Slide3 />

          <Act1Page ref={(x) => (pageRefs.current["act1"] = x!)} />
          <Act2Page ref={(x) => (pageRefs.current["act2"] = x!)} />
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
              opacity: 1;
              transform: translateX(100vw);
            }
          }
        `
      : css`
          > div {
            &:nth-child(1) {
              opacity: 1;
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
