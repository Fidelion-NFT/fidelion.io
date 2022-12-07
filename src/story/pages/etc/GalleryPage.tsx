import { ViewMarker } from "../../components";
import GalleryPageImage from "@/assets/story/etc/team.svg";
import React, { forwardRef } from "react";
import styled, { css } from "styled-components";

interface GalleryPageProps {}
export const GalleryPage = forwardRef<HTMLDivElement>(
  ({}: GalleryPageProps, ref) => {
    return (
      <SlideContainer ref={ref}>
        <ViewMarker name="gallery" color="white" />
        <GalleryPageImage />
      </SlideContainer>
    );
  }
);

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
