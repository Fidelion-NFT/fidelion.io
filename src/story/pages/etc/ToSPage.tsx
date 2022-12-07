import { ViewMarker } from "../../components";
import ToSPageImage from "@/assets/story/etc/team.svg";
import React, { forwardRef } from "react";
import styled, { css } from "styled-components";

interface ToSPageProps {}
export const ToSPage = forwardRef<HTMLDivElement>(({}: ToSPageProps, ref) => {
  return (
    <SlideContainer ref={ref}>
      <ViewMarker name="tos" color="white" />
      <ToSPageImage />
    </SlideContainer>
  );
});

const SlideContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;

  background: white;

  > svg {
    width: 100vw;
    height: 100%;
  }
`;
