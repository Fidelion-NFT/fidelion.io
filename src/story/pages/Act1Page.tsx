import { SideMenu } from "../../components/SideMenu";
import { Act1Slide1, Act1Slide2 } from "../slides/act1";
import { Act1Slide3 } from "../slides/act1/Act1Slide3";
import { useScroll, motion } from "framer-motion";
import React, { useEffect, useRef, useState, WheelEvent } from "react";
import styled from "styled-components";

interface Act1PageProps {}
export const Act1Page = ({}: Act1PageProps) => {
  return (
    <>
      <Act1Slide1 />
      <Act1Slide2 />
      <Act1Slide3 />
    </>
  );
};
