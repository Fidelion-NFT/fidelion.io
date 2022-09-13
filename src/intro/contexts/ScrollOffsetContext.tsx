import React, { useContext } from "react";

interface IScrollOffsetContext {
  y: number;
}

export const ScrollOffsetContext = React.createContext({ y: 0 });

export const useScrollOffset = (): IScrollOffsetContext => {
  return useContext(ScrollOffsetContext);
};
