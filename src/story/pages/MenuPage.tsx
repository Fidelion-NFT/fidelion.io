import { useStores } from "../stores";
import React, {
  MutableRefObject,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  WheelEvent,
} from "react";
import { useHistory, useLocation } from "react-router-dom";
import styled, { css } from "styled-components";

export const MenuPage = () => {
  const history = useHistory();
  const { hash: page } = useLocation();
  const { sideMenuStore } = useStores();
  const pageName = page.substring(1);

  const navigate = (to: string) => {
    sideMenuStore.showMenu = false;

    setTimeout(() => {
      history.push(to);
    }, 450);
  };

  useLayoutEffect(() => {
    sideMenuStore.backgroundColor = "black";

    return () => {
      sideMenuStore.backgroundColor = "rgba(0,0,0,0)";
    };
  }, []);

  return (
    <MenuContainer>
      <Acts>
        <Row active={pageName === "act1"} onClick={() => navigate("#act1")}>
          <NumberText>2</NumberText>
          <LargeItemText>ACT1</LargeItemText>
        </Row>
        <Row
          active={pageName === "act12"}
          onClick={() => navigate("#battlefield")}
        >
          <NumberText>0</NumberText>
          <LargeItemText>ACT2</LargeItemText>
        </Row>
        <Row
          active={pageName === "battlefield"}
          onClick={() => navigate("#team")}
        >
          <NumberText>8</NumberText>
          <LargeItemText>Battlefield</LargeItemText>
        </Row>
        <Row
          active={pageName === "dusties"}
          onClick={() => navigate("#harrier_registration")}
        >
          <NumberText>0</NumberText>
          <LargeItemText>DUSTIES</LargeItemText>
        </Row>
      </Acts>

      <SmallMenu>
        <SmallItemText>Team</SmallItemText>
        <SmallItemText>Partners</SmallItemText>
        <SmallItemText>Gallery</SmallItemText>
        <SmallItemText>ToS</SmallItemText>
        <SmallItemText>Q&A</SmallItemText>
      </SmallMenu>
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

const Acts = styled.div`
  padding-left: 170px;
`;
const SmallMenu = styled.div`
  position: absolute;
  right: 56px;
  bottom: 40px;
`;
const Row = styled.div<{ active: boolean }>`
  display: flex;
  height: 23vh;

  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }

  ${({ active }) =>
    active
      ? css`
          color: #ee220c !important;
        `
      : css``}
`;

const NumberText = styled.div`
  font-family: "Arial Black";
  font-style: normal;
  font-weight: 900;
  font-size: 100px;

  margin-right: 15vh;
`;
const LargeItemText = styled.div`
  font-family: "Arial";
  font-style: normal;
  font-weight: 400;
  font-size: 18vh;
`;
const SmallItemText = styled.div`
  font-family: "Arial";
  font-style: normal;
  font-weight: 700;
  font-size: 44px;
  line-height: 51px;

  cursor: pointer;
`;
