import FidelionLogo from "@/assets/dust.svg";
import MenuIcon from "@/assets/menu.svg";
import { SideMenuWidth } from "@/story/constants";
import { useStores } from "@/story/stores";
import Hamburger from "hamburger-react";
import { observer } from "mobx-react";
import React from "react";
import { useHistory } from "react-router-dom";
import styled, { css } from "styled-components";

interface SideMenuProps {}
export const SideMenu = observer(({}: SideMenuProps) => {
  const { sideMenuStore } = useStores();
  const borderColor =
    sideMenuStore.backgroundColor === "white" ? "black" : "white";

  return (
    <Container
      id="menu"
      backgroundColor={sideMenuStore.backgroundColor}
      borderColor={borderColor}
    >
      <div style={{ flex: 1 }} />
      <Logo />
      <div style={{ flex: 1 }} />

      <TextApocalypse>Apocalypse survival from 2080</TextApocalypse>
      <div style={{ flex: 1 }} />
      <Text80>80</Text80>
      <div style={{ flex: 1 }} />
      <TextApocalypse>Apocalypse survival from 2080</TextApocalypse>
      <div style={{ flex: 1 }} />

      <MenuContainer
        borderColor={borderColor}
        onClick={() => (sideMenuStore.showMenu = !sideMenuStore.showMenu)}
      >
        <div>
          <Menu toggled={sideMenuStore.showMenu} />
        </div>
      </MenuContainer>
    </Container>
  );
});

const Container = styled.div<{ backgroundColor: string; borderColor: string }>`
  position: absolute;
  left: 0px;
  top: 0px;

  display: flex;

  width: 100vh;
  height: ${SideMenuWidth}px;

  align-items: center;

  z-index: 100;

  transition: all 0.3s ease;
  transform: translateX(calc(-50vh + 34px)) translateY(calc(50vh - 35px))
    rotate(-90deg);

  ${({ backgroundColor, borderColor }) => css`
    border-bottom: 1px solid ${borderColor};

    background-color: ${backgroundColor};

    color: ${borderColor};
  `}
`;

// @ts-ignore
const Logo = styled(FidelionLogo)`
  width: 5vw;
  max-width: 78px;
  height: auto;
`;

// @ts-ignore
const Menu = styled(MenuIcon)`
  transform: rotate(90deg);
`;

const MenuContainer = styled.div<{ borderColor: string }>`
  display: flex;

  width: 182px;
  height: 100%;

  border-right: none;

  align-items: center;
  justify-content: center;

  transition: all 0.3s ease;

  cursor: pointer;

  ${({ borderColor }) => css`
    border: 1px solid ${borderColor};
  `}
`;

const TextApocalypse = styled.div`
  font-family: "Helvetica Neue";
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  line-height: 15px;
`;
const Text80 = styled.div`
  font-family: "Arial Black";
  font-style: normal;
  font-weight: 900;
  font-size: min(30px, 1.65rem);
  line-height: 42px;
  letter-spacing: -0.13em;
`;
