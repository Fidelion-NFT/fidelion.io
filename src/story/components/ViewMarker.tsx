import { useStores } from "../stores";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useHistory } from "react-router-dom";

interface ViewMarketProps {
  name: string;
  color: string;
}
export const ViewMarker = ({ name, color }: ViewMarketProps) => {
  const { ref, inView, entry } = useInView({});
  const history = useHistory();
  const { sideMenuStore } = useStores();

  useEffect(() => {
    if (inView) {
      console.log("push", name);
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
        left: "calc(100vw - 70px)",
      }}
    />
  );
};
