import DustLogo from "@/assets/dust.svg";
import MenuIcon from "@/assets/menu.svg";
import { useStores } from "@/story/stores";
import Hamburger from "hamburger-react";
import { observer } from "mobx-react";
import React from "react";
import { useHistory } from "react-router-dom";
import styled, { css } from "styled-components";

interface SideMenuProps {}
export const SideMenu = observer(({}: SideMenuProps) => {
  const { sideMenuStore } = useStores();
  const history = useHistory();

  return (
    <Container backgroundColor={sideMenuStore.backgroundColor}>
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
        onClick={() => (sideMenuStore.showMenu = !sideMenuStore.showMenu)}
      >
        <div>
          <Hamburger toggled={sideMenuStore.showMenu} />
        </div>
      </MenuContainer>
    </Container>
  );
});

const Container = styled.div<{ backgroundColor: string }>`
  position: absolute;
  left: 0px;
  top: 0px;

  display: flex;

  width: 100vh;
  height: 70px;

  border-bottom: 1px solid white;

  align-items: center;

  z-index: 100;

  transition: all 0.3s ease;
  transform: translateX(calc(-50vh + 34px)) translateY(calc(50vh - 35px))
    rotate(-90deg);

  ${({ backgroundColor }) => css`
    background-color: ${backgroundColor};

    color: ${() => {
      if (backgroundColor === "white") {
        return "black";
      }
      return "white";
    }};
  `}
`;

// @ts-ignore
const Logo = styled(DustLogo)``;

const MenuContainer = styled.div`
  display: flex;

  width: 182px;
  height: 100%;

  border: 1px solid white;
  border-right: none;

  align-items: center;
  justify-content: center;

  cursor: pointer;

  > div {
    transform: rotate(90deg);
  }
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
  font-size: 30px;
  line-height: 42px;
  letter-spacing: -0.13em;
`;
