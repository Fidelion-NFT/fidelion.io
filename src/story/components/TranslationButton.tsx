import { Dropdown } from "./TranslationDropdown";
import language from "@/assets/menu/language.png";
import { setEN, setKR, setJP } from "@/redux/action";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled, { keyframes } from "styled-components";

export const TranslationButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const settingLanguage = localStorage.getItem("language");
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    dispatch(setEN());
    localStorage.setItem("language", "EN");
  }, []);
  return (
    <DropdownContainer onClick={toggleDropdown}>
      <DropdownButtonStyled src={language} />
      {/*{state}*/}
      {isOpen && <Dropdown />}
    </DropdownContainer>
  );
};

const slideIn = keyframes`
  from {
    transform: translateY(-10px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const DropdownContainer = styled.div`
  position: fixed;
  right: 110px;
  bottom: 25px;

  width: 34px;
  height: 40px;

  cursor: pointer;
  color: rgb(255, 255, 255, 0.66);
  z-index: 10;
`;

const DropdownButtonStyled = styled.img`
  color: white;
  border: none;
  cursor: pointer;
  width: 34px;
`;
