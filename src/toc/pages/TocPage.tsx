import { TocText } from "./text";
import CloseIcon from "@/assets/close.svg";
import React from "react";
import styled from "styled-components";

export const TocPage = () => {
  return (
    <Container>
      <div
        style={{ fontSize: "25px", fontWeight: "bold", textAlign: "center" }}
      >
        Terms and Conditions
      </div>
      <div style={{ height: "40px" }} />
      <div
        style={{ fontSize: "16px", fontWeight: "normal", textAlign: "center" }}
      >
        Last updated: December 7th, 2022
      </div>
      <div style={{ height: "80px" }} />
      <MainText>{TocText}</MainText>

      <CloseButton onClick={() => window.close()} />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 7400px;

  background: white;

  padding: 37px;

  overflow-x: hidden;
  overflow-y: auto;
`;

const MainText = styled.pre`
  width: 100%;

  overflow: hidden;
  white-space: break-spaces;
`;

// @ts-ignore
const CloseButton = styled(CloseIcon)`
  position: absolute;
  right: 0px;
  top: 0px;

  cursor: pointer;
`;
