import { ViewMarker } from "../../components";
import QnAPageImage from "@/assets/story/etc/team.svg";
import React, { forwardRef } from "react";
import styled, { css } from "styled-components";

interface QnAPageProps {}
export const QnAPage = forwardRef<HTMLDivElement>(({}: QnAPageProps, ref) => {
  return (
    <SlideContainer ref={ref}>
      <ViewMarker name="qna" color="white" />
      <QnAPageImage />
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
