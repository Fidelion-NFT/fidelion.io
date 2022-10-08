import DustLogo from "@/assets/dust.svg";
import MenuIcon from "@/assets/menu.svg";
import React from "react";
import styled from "styled-components";

interface SideMenuProps {}
export const SideMenu = ({}: SideMenuProps) => {
  return (
    <Container>
      <MenuContainer>
        <Menu />
      </MenuContainer>
      <div style={{ flex: 1 }} />

      <TextApocalypse>Apocalypse survival from 2080</TextApocalypse>
      <div style={{ flex: 1 }} />
      <Text80>80</Text80>
      <div style={{ flex: 1 }} />
      <TextApocalypse>Apocalypse survival from 2080</TextApocalypse>

      <div style={{ flex: 1 }} />
      <Logo />
      <div style={{ flex: 1 }} />
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  left: 0px;
  top: 0px;

  display: flex;

  width: 100vh;
  height: 70px;

  color: white;

  border: 1px solid white;

  align-items: center;

  z-index: 100;

  transform: translateX(calc(-50vh + 34px)) translateY(calc(50vh - 35px))
    rotate(90deg);
`;

const Logo = styled.img.attrs({
  src: DustLogo,
})``;

const MenuContainer = styled.div`
  display: flex;

  width: 182px;
  height: 100%;

  border: 1px solid white;

  align-items: center;
  justify-content: center;

  cursor: pointer;
`;
const Menu = styled.img.attrs({
  src: MenuIcon,
})``;

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
