import krIcon from "@/assets//kr.png";
import enIcon from "@/assets/en.png";
import jpIcon from "@/assets/jp.png";
import { setEN, setJP, setKR } from "@/redux/action";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled, { keyframes } from "styled-components";

export const flag = { EN: "🇺🇸", KR: "🇰🇷", JP: "🇯🇵" };
export const Dropdown = () => {
  const dispatch = useDispatch();
  const state = useSelector((state: string) => state);
  const EN = () => {
    dispatch(setEN());
    localStorage.setItem("language", "EN");
  };

  const KR = () => {
    dispatch(setKR());
    localStorage.setItem("language", "KR");
  };
  const JP = () => {
    dispatch(setJP());
    localStorage.setItem("language", "JP");
  };
  const getBackgroundImage = (item: string) => {
    return item === state ? "#484848" : "transparent";
  };
  return (
    <DropdownContainer>
      <ListContainer
        onClick={EN}
        style={{ backgroundColor: getBackgroundImage("EN") }}
      >
        <LanguageIcon src={enIcon} alt={""} /> EN
      </ListContainer>
      <ListContainer
        onClick={KR}
        style={{ backgroundColor: getBackgroundImage("KR") }}
      >
        <LanguageIcon src={krIcon} alt={""} /> KR
      </ListContainer>
      <ListContainer
        onClick={JP}
        style={{ backgroundColor: getBackgroundImage("JP") }}
      >
        <LanguageIcon src={jpIcon} alt={""} /> JP
      </ListContainer>
    </DropdownContainer>
  );
};

const DropdownContainer = styled.div`
  position: fixed;
  right: 50px;
  bottom: 90px;

  width: 100px;

  cursor: pointer;

  z-index: 10;

  color: #fff;
  //border: 1px solid #fff;
  border-radius: 8px;
  background-color: #31302f;
`;

const ListContainer = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 7px;
  text-align: center;
  line-height: 40px;
  font-family: "Helvetica";
  font-weight: 700;
  font-size: 16px;
`;

const LanguageIcon = styled.img`
  width: 20px;
  height: 20px;
`;
const Ul = styled.ul`
  pading: 0px 0px 0px 0px;
`;

const Li = styled.li`
  list-style: none;
  text-align: center;
`;
