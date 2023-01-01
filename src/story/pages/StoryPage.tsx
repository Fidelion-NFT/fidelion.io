import { Act1Slide1, Act1Slide2 } from "../slides/act1";
import { Act1Slide3 } from "../slides/act1/Act1Slide3";
import { useStores } from "../stores";
import { AboutUsPage } from "./AboutUsPage";
import { Act1Page } from "./Act1Page";
import { Act2Page } from "./Act2Page";
import { BattleFieldPage } from "./BattlefieldPage";
import { HarrierRegistrationPage } from "./HarrierRegistrationPage";
import { MenuPage } from "./MenuPage";
import { UtilityPage } from "./UtilityPage";
import { GalleryPage, PartnersPage, QnAPage, ToSPage } from "./etc";
import { TeamPage } from "./etc/TeamPage";
import { MainPage } from "./main/MainPage";
import { Year2080Page } from "./prefix";
import { NoHopePage } from "./prefix/NoHopePage";
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
import { useLocation } from "react-router-dom";
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
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);

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
      if (Math.abs(speed) > 0.001) {
        containerRef.current!.scrollLeft += speed;

        speed = speed * 0.9056;
      }

      requestAnimationFrame(run);
    };

    requestAnimationFrame(run);
  }, []);

  return (
    <Container>
      <SideMenu />

      <DrawerContainer showMenu={sideMenuStore.showMenu}>
        <MenuPage pages={pageRefs.current} />

        <PageContainer id="page-scroll" ref={containerRef}>
          {ready && (
            <>
              <MainPage ref={(x) => (pageRefs.current["main"] = x!)} />

              <Act1Page ref={(x) => (pageRefs.current["act1"] = x!)} />
              <Act2Page ref={(x) => (pageRefs.current["act2"] = x!)} />

              <UtilityPage ref={(x) => (pageRefs.current["utility"] = x!)} />

              <AboutUsPage ref={(x) => (pageRefs.current["about-us"] = x!)} />

              {/*}
              <HarrierRegistrationPage
                ref={(x) => (pageRefs.current["harrier_registration"] = x!)}
              />
              <BattleFieldPage
                ref={(x) => (pageRefs.current["battlefield"] = x!)}
              />
          */}
            </>
          )}
        </PageContainer>

        <div
          style={{
            display: "none",
            position: "fixed",
            right: "0px",
            top: "0px",
            pointerEvents: "none",
          }}
        >
          <svg width="300" height="100vh">
            <defs>
              <linearGradient id="Gradient1">
                <stop stopColor="rgba(0,0,0,0)" offset="0%" />
                <stop stopColor="rgba(0,0,0,0.1)" offset="30%" />
                <stop stopColor="rgba(0,0,0,0.7)" offset="100%" />
              </linearGradient>
            </defs>

            <rect
              id="rect1"
              x="0"
              y="0"
              width="300"
              height="100vh"
              fill="url(#Gradient1)"
            />
          </svg>
        </div>
      </DrawerContainer>
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
