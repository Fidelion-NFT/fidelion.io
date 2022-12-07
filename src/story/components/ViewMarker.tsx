import { useStores } from "../stores";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useHistory } from "react-router-dom";

interface ViewMarketProps {
  name: string;
  color: string;
}
export const ViewMarker = ({ name, color }: ViewMarketProps) => {
  const { ref, inView } = useInView({
    threshold: 0.95,
  });
  const history = useHistory();
  const { sideMenuStore } = useStores();

  useEffect(() => {
    if (inView) {
      sideMenuStore.backgroundColor = color;
      history.push(`#${name}`);
    }
  }, [inView]);

  return <div ref={ref} />;
};
