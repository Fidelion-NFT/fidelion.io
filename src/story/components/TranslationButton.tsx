import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { Dropdown } from './TranslationDropdown';
import languege from "@/assets/menu/language_FILL0_wght300_GRAD0_opsz40.png";
import { useSelector } from 'react-redux';

export const TranslationButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const state = useSelector((state: string) => state);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <DropdownContainer onClick={toggleDropdown}>
      <DropdownButtonStyled src={languege}/>
      {state}
      {isOpen && <Dropdown /> }
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
  right: 90px;
  bottom: 30px;

  width: 60px;
  height: 38px;

  cursor: pointer;
  color: #fff;
  background: #ff1223;

  z-index: 10;
`;

const DropdownButtonStyled = styled.img`
  color: white;
  border: none;
  cursor: pointer;
`;

