import { ViewMarker } from "../components";
import { useStores } from "../stores";
import CloseIcon from "@/assets/close.svg";
import DiscordIcon from "@/assets/menu/discord.svg";
import FigmaIcon from "@/assets/menu/figma.svg";
import SoundIcon from "@/assets/menu/sound.svg";
import TwitterIcon from "@/assets/menu/twitter.svg";
import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import styled, { css } from "styled-components";

interface MenuPageProps {
  pages: Record<string, HTMLDivElement>;
}
export const MenuPage = ({ pages }: MenuPageProps) => {
  const history = useHistory();
  const { hash: page } = useLocation();
  const { sideMenuStore } = useStores();
  const pageName = page.substring(1);
  const [muted, setMuted] = useState(false);

  const navigate = (to: string) => {
    sideMenuStore.showMenu = false;

    history.push(to);

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
        <Row active={pageName === "act1"} onClick={() => navigate("#act1")}>
          <NumberText>2</NumberText>
          <LargeItemText>Fidelion</LargeItemText>
        </Row>
        <Row active={pageName === "act2"} onClick={() => navigate("#act2")}>
          <NumberText>0</NumberText>
          <LargeItemText>Harrier</LargeItemText>
        </Row>
        <Row
          active={pageName === "utility"}
          onClick={() => navigate("#utility")}
        >
          <NumberText>8</NumberText>
          <LargeItemText>Utility</LargeItemText>
        </Row>
        <Row
          active={pageName === "about-us"}
          onClick={() => navigate("#about-us")}
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
          onClick={() => window.open("https://discord.gg/fidelion", "_blank")}
        />
        <FigmaIcon
          // @ts-ignore
          onClick={() =>
            window.open(
              "https://www.figma.com/file/fbsSob55LT5Ncr81kybT98/Project-Fidelion?node-id=54%3A181&t=MY9mxwgD7O1p1bGD-0",
              "_blank"
            )
          }
        />
      </SNSContainer>

      <ToC>
        © 2022 Fidelion. | All Rights Reserved |&nbsp;
        <span
          style={{ cursor: "pointer" }}
          onClick={() => window.open("/toc", "_blank")}
        >
          Terms and Conditions
        </span>
        &nbsp;| marketing@tidalflats.studio
        <div style={{ width: "30px" }} />
        <SoundIcon
          // @ts-ignore
          style={{ cursor: "pointer", opacity: muted ? 0.5 : 1 }}
          onClick={() => {
            const bgm = document.getElementById("bgm") as HTMLAudioElement;
            if (bgm.paused) {
              bgm.play();
            } else {
              bgm.pause();
            }

            setMuted(!muted);
          }}
        />
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
  right: 30px;
  bottom: 20px;
  display: flex;

  font-weight: 400;
  font-size: 16px;
  line-height: 25px;

  align-items: center;
`;

const SNSContainer = styled.div`
  display: flex;
  position: absolute;
  right: 30px;
  bottom: 100px;

  gap: 20px;

  > svg {
    width: 97px;

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
