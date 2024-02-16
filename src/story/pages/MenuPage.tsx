import { ViewMarker } from "../components";
import { useStores } from "../stores";
import CloseIcon from "@/assets/close.svg";
import DiscordIcon from "@/assets/menu/discord.svg";
import FigmaIcon from "@/assets/menu/figma.svg";
import TwitterIcon from "@/assets/menu/twitter.svg";
import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styled, { css } from "styled-components";

interface MenuPageProps {
  pages: Record<string, HTMLDivElement>;
}
export const MenuPage = ({ pages }: MenuPageProps) => {
  const navigate = useNavigate();
  const { hash: page } = useLocation();
  const { sideMenuStore } = useStores();
  const pageName = page.substring(1);

  const navigateTo = (to: string) => {
    sideMenuStore.showMenu = false;

    if (to === "#act2" || to === "#about-us") {
      sideMenuStore.backgroundColor = "white";
    } else {
      sideMenuStore.backgroundColor = "rgba(0,0,0,1)";
    }

    navigate(to);

    let offset = to === "#act2" || to === "#about-us" ? -60 : 5;
    document.getElementById("page-scroll")!.scrollTo({
      left: pages[to.substring(1)]?.offsetLeft + offset,
    });
  };

  useEffect(() => {
    setTimeout(() => {
      let offset = page === "#act2" || page === "#about-us" ? -60 : 5;
      document.getElementById("page-scroll")!.scrollTo({
        left: pages[page.substring(1)]?.offsetLeft + offset,
      });
    }, 100);
  }, []);

  return (
    <MenuContainer>
      <Acts>
        <Row active={pageName === "fidelion"} onClick={() => navigateTo("#fidelion")}>
          <NumberText>2</NumberText>
          <LargeItemText>Fidelion</LargeItemText>
        </Row>
        <Row active={pageName === "harrier"} onClick={() => navigateTo("#harrier")}>
          <NumberText>0</NumberText>
          <LargeItemText>Harrier</LargeItemText>
        </Row>
        <Row
          active={pageName === "utility"}
          onClick={() => navigateTo("#utility")}
        >
          <NumberText>8</NumberText>
          <LargeItemText>Utility</LargeItemText>
        </Row>
        <Row
          active={pageName === "about-us"}
          onClick={() => navigateTo("#about-us")}
        >
          <NumberText>0</NumberText>
          <LargeItemText>About us</LargeItemText>
        </Row>
      </Acts>

      <SNSContainer>
        <TwitterIcon
          // @ts-ignore
          onClick={() =>
            window.open("https://twitter.com/FidelionNFT", "_blank")
          }
        />
        <DiscordIcon
          // @ts-ignore
          onClick={() => window.open("https://discord.gg/officialfidelion", "_blank")}
        />
        {/*<FigmaIcon*/}
        {/*  // @ts-ignore*/}
        {/*  style={{ width: "37px" }}*/}
        {/*  // @ts-ignore*/}
        {/*  onClick={() =>*/}
        {/*    window.open(*/}
        {/*      "https://www.figma.com/file/fbsSob55LT5Ncr81kybT98/Project-Fidelion?node-id=54%3A181&t=MY9mxwgD7O1p1bGD-0",*/}
        {/*      "_blank"*/}
        {/*    )*/}
        {/*  }*/}
        {/*/>*/}
      </SNSContainer>

      <ToC>
        © 2024 Fidelion. | All Rights Reserved |&nbsp;
        <span
          style={{ cursor: "pointer" }}
          onClick={() => window.open("/toc", "_blank")}
        >
          Terms and Conditions
        </span>
        &nbsp;| marketing@tidalflats.studio
        <div style={{ width: "30px" }} />
      </ToC>

      <CloseButton onClick={() => (sideMenuStore.showMenu = false)} />
    </MenuContainer>
  );
};

const MenuContainer = styled.div`
  width: 100vw;
  height: 100vh;

  background: #fae232;

  display: flex !important;
  flex-direction: column;
`;

// @ts-ignore
const CloseButton = styled(CloseIcon)`
  position: absolute;
  right: 0px;
  top: 0px;

  cursor: pointer;
`;

const Acts = styled.div`
  padding-left: 170px;
`;

const Row = styled.div<{ active: boolean }>`
  display: flex;
  height: 23vh;

  align-items: flex-start;

  cursor: pointer;

  &:hover {
    opacity: 0.45;
  }

  ${({ active }) =>
    active
      ? css`
          color: #ee220c !important;
        `
      : css``}
`;

const ToC = styled.div`
  position: absolute;
  right: 140px;
  bottom: 30px;
  display: flex;

  font-weight: 400;
  font-size: 16px;
  line-height: 25px;

  align-items: center;
`;

const SNSContainer = styled.div`
  display: flex;
  position: absolute;
  right: 46px;
  bottom: 100px;

  gap: 30px;

  > svg {
    width: 60px;

    cursor: pointer;
  }
`;

const NumberText = styled.div`
  font-family: "Cutmark-Bold";
  font-style: normal;
  font-weight: 900;
  font-size: 135px;
  line-height: 1;

  margin-right: 15vh;
`;
const LargeItemText = styled.div`
  font-family: "Helvetica Neue";
  font-style: normal;
  font-weight: 400;
  font-size: 18vh;
  line-height: 1;
`;
