import LogoVertical from "../../assets/logo_vertical.png";
import React from "react";
import styled from "styled-components";

interface SideMenuProps {}
export const SideMenu = ({}: SideMenuProps) => {
  return (
    <Container>
      <Logo />
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  left: 0px;
  top: 0px;

  width: 70px;
  height: 100vh;

  border: 1px solid white;

  z-index: 100;
`;

const Logo = styled.img.attrs({
  src: LogoVertical,
})`
  position: absolute;

  left: 20px;
  bottom: 50px;
`;
