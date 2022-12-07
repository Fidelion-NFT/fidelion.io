import { ViewMarker } from "../../components";
import PartnersPageImage from "@/assets/story/etc/partners.svg";
import React, { forwardRef } from "react";
import styled, { css } from "styled-components";

interface PartnersPageProps {}
export const PartnersPage = forwardRef<HTMLDivElement>(
  ({}: PartnersPageProps, ref) => {
    return (
      <SlideContainer ref={ref}>
        <ViewMarker name="partners" color="white" />
        <PartnersPageImage />
      </SlideContainer>
    );
  }
);

const SlideContainer = styled.div`
  width: 100vw;
  height: 100vh;

  background: white;

  > svg {
    width: 100vw;
    height: 100%;
  }
`;
