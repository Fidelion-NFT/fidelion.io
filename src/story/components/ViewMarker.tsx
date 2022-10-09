import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useHistory } from "react-router-dom";

interface ViewMarketProps {
  name: string;
}
export const ViewMarker = ({ name }: ViewMarketProps) => {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  const history = useHistory();

  useEffect(() => {
    if (inView) {
      history.push(`#${name}`);
    }
  }, [inView]);

  console.log(inView);

  return <div ref={ref} />;
};
