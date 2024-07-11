import { SoundButton } from "../components";
import { TranslationButton } from "../components";
import { useStores } from "../stores";
import { AboutUsPage } from "./AboutUsPage";
import { FidelionPage } from "./FidelionPage";
import { HarrierPage } from "./HarrierPage";
import { MenuPage } from "./MenuPage";
import { UtilityPage } from "./UtilityPage";
import { ToSPage } from "./etc";
import { TeamPage } from "./etc/TeamPage";
import { MainPage } from "./main/MainPage";
import Image3 from "@/assets/intro/bg.webp";
import { SideMenu } from "@/components/SideMenu";
import { Slide1 } from "@/intro/slides";
import { isMac } from "@/utils";
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
        console.log("isTouchPad", isTouchPad, e.deltaY * 1.2);
        containerRef.current!.scrollLeft += e.deltaY * 1.2;
      } else {
        console.log("isMac", isMac);
        speed = e.deltaY * (isMac ? 0.38 : 0.243);
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

  useLayoutEffect(() => {
    let pageHeight = 0;
    pageHeight = window.innerHeight;

    window.addEventListener(
      "resize",
      () => {
        const currentOffset = containerRef.current!.scrollLeft;
        const newPageHeight = window.innerHeight;
        const dHeight = newPageHeight / pageHeight;

        containerRef.current!.scrollLeft = currentOffset * dHeight;
        pageHeight = newPageHeight;
      },
      true
    );
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

              <FidelionPage ref={(x) => (pageRefs.current["fidelion"] = x!)} />
              <HarrierPage ref={(x) => (pageRefs.current["harrier"] = x!)} />

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

      <TranslationButton />
      <SoundButton />
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
  overflow-y: hidden;

  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
`;
