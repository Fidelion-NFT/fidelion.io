import { setEN, setJP, setKR } from '@/redux/action';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled, { keyframes } from 'styled-components';

export const flag = {EN: '🇺🇸', KR: '🇰🇷', JP: '🇯🇵'};
export const Dropdown = () => {
  const dispatch = useDispatch();

  const EN = () => {
    dispatch(setEN());
    localStorage.setItem('language', 'EN');
  };

  const KR = () => {
    dispatch(setKR());
      localStorage.setItem('language', 'KR');
  };
  const JP = () => {
    dispatch(setJP());
      localStorage.setItem('language', 'JP');
  }

  return (
    <DropdownContainer>
        <ListContainer onClick={EN}>
        🇺🇸 en
        </ListContainer>
        <ListContainer onClick={KR}>
        🇰🇷 kr
        </ListContainer>
        <ListContainer onClick={JP}>
        🇯🇵 jp
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
  border: 1px solid #fff;
  border-radius: 8px;
  background-color: black;
  
`;

const ListContainer = styled.div`
  width: 100%;
  height: 40px;
  text-align: center;
  line-height: 40px;
`

const Ul = styled.ul`
  pading: 0px 0px 0px 0px
`

const Li = styled.li`
  list-style: none;
  text-align: center;
`
