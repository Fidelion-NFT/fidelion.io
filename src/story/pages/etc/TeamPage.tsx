import { ViewMarker } from "../../components";
import TeamPageImage from "@/assets/story/etc/team.svg";
import React, { forwardRef } from "react";
import styled, { css } from "styled-components";

interface TeamPageProps {}
export const TeamPage = forwardRef<HTMLDivElement>(({}: TeamPageProps, ref) => {
  return (
    <SlideContainer ref={ref}>
      <ViewMarker name="team" color="white" />
      <TeamPageImage />
    </SlideContainer>
  );
});

const SlideContainer = styled.div`
  width: 100vw;
  height: 100vh;

  background: white;

  > svg {
    width: 100vw;
    height: 100%;
  }
`;
