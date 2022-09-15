import { TimeBar } from "./intro/components";
import { IntroPage } from "./intro/pages/IntroPage";
import { Act1Page, MenuPage } from "./story/pages";
import { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const App = () => {
  return (
    <div className="App">
      <MenuPage />
    </div>
  );
};

export default App;
