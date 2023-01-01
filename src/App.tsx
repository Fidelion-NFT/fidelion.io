import { Act1Page, MenuPage } from "./story/pages";
import { IntroPage } from "@/intro/pages/IntroPage";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  BrowserRouter,
  BrowserRouter as Router,
  Route,
  useLocation,
} from "react-router-dom";
import SlideRoutes from "react-slide-routes";
import "./index.css";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "inobounce";
import { StoryPage } from "./story/pages/StoryPage";
import "animate.css";
import MobilePlaceholder from "./MobilePlaceholder";
import { TocPage } from "./toc/pages/TocPage";

const isMobile = () => {
  var UserAgent = navigator.userAgent;

  if (
    UserAgent.match(
      /iPhone|iPod|Android|Windows CE|BlackBerry|Symbian|Windows Phone|webOS|Opera Mini|Opera Mobi|POLARIS|IEMobile|lgtelecom|nokia|SonyEricsson/i
    ) != null ||
    UserAgent.match(/LG|SAMSUNG|Samsung/) != null
  ) {
    return true;
  } else {
    return false;
  }
};

const App = () => {
  if (isMobile()) {
    return <MobilePlaceholder />;
  }

  return (
    <BrowserRouter>
      <audio id="bgm" src="/music/intro.mp3" loop />

      <SlideRoutes duration={1000} animation="vertical-slide">
        <Route path="/" element={<IntroPage />} />
        <Route path="/intro/" element={<IntroPage />} />
        <Route path="/story/" element={<StoryPage />} />
        <Route path="/toc/" element={<TocPage />} />
      </SlideRoutes>
    </BrowserRouter>
  );
};

const mapStyles = (styles: any) => {
  return {
    opacity: styles.opacity,
    transform: `scale(${styles.scale})`,
  };
};

export default App;
