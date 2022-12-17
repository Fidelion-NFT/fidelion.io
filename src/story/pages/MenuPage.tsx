import { useStores } from "../stores";
import CloseIcon from "@/assets/close.svg";
import React, { useEffect } from "react";
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

  const navigate = (to: string) => {
    sideMenuStore.showMenu = false;

    setTimeout(() => {
      history.push(to);

      document.getElementById("page-scroll")!.scrollTo({
        left: pages[to.substring(1)]?.offsetLeft,
        behavior: "smooth",
      });
    }, 450);
  };

  useEffect(() => {
    setTimeout(() => {
      document.getElementById("page-scroll")!.scrollTo({
        left: pages[page.substring(1)]?.offsetLeft,
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
          active={pageName === "battlefield"}
          onClick={() => navigate("#battlefield")}
        >
          <NumberText>8</NumberText>
          <LargeItemText>Utility</LargeItemText>
        </Row>
        <Row
          active={pageName === "harrier_registration"}
          onClick={() => navigate("#harrier_registration")}
        >
          <NumberText>0</NumberText>
          <LargeItemText>About us</LargeItemText>
        </Row>
      </Acts>

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
