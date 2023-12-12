import LogoMiniImage from "@/assets/mobile/logo-mini.png";
import TitleImage from "@/assets/mobile/logo-title.png";
import LogoImage from "@/assets/mobile/logo.svg";
import React from "react";
import styled from "styled-components";

const MobilePlaceholder = () => {
  return (
    <Container>
      <Header />

      <div style={{ flex: 1 }} />
      {/* @ts-ignore */}
      <LogoImage style={{ width: "calc(100vw - 80px)" }} />
      <div style={{ flex: 1 }} />

      <div style={{ fontSize: "9px" }}>
        Please use a desktop to view full version
      </div>
      <div style={{ height: "26px" }} />

      <img src={LogoMiniImage} style={{ width: "24px", height: "24px" }} />
      <div style={{ height: "26px" }} />
    </Container>
  );
};

const Header = () => {
  return (
    <HeaderContainer>
      <img src={LogoMiniImage} style={{ width: "24px", height: "24px" }} />

      <div style={{ transform: "scale(0.6)", whiteSpace: "pre" }}>
        Apocalypse survival from 2080
      </div>
      <_80Text>80</_80Text>
      <div style={{ transform: "scale(0.6)", whiteSpace: "pre" }}>
        Apocalypse survival from 2080
      </div>

      <img src={TitleImage} style={{ width: "37px", height: "10px" }} />
    </HeaderContainer>
  );
};

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;

  background: black;

  align-items: center;
  justify-content: center;

  font-family: "Helvetica";
  font-weight: 700;

  color: white;

  div {
    font-family: "Inter" !important;
  }
`;

const HeaderContainer = styled.div`
  width: 100%;
  display: flex;

  padding: 15px 30px;

  font-size: 5px;

  align-items: center;
  justify-content: center;
`;

const _80Text = styled.div`
  font-style: normal;
  font-weight: 900;
  font-size: 16px;
  line-height: 23px;
  letter-spacing: -0.12em;
`;

export default MobilePlaceholder;
