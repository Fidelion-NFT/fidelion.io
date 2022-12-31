import { useStores } from "../stores";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useHistory } from "react-router-dom";

interface ViewMarketProps {
  name: string;
  color: string;
  offset?: number;
}
export const ViewMarker = ({ name, color, offset }: ViewMarketProps) => {
  const { ref, inView, entry } = useInView({});
  const history = useHistory();
  const { sideMenuStore } = useStores();

  useEffect(() => {
    if (inView) {
      sideMenuStore.backgroundColor = color;

      history.push(`#${name}`);
    }
  }, [inView]);

  return (
    <div
      ref={ref}
      style={{
        pointerEvents: "none",
        width: "calc(100% - 100vw - 70px)",
        height: "100%",
        position: "absolute",
        left: "calc(100vw - 0px)",
      }}
    />
  );
};
