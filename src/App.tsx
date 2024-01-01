import { IntroPage } from "@/intro/pages/IntroPage";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  BrowserRouter,
  Route,
} from "react-router-dom";
import SlideRoutes from "react-slide-routes";
import "./index.css";
import "inobounce";
import { StoryPage } from "./story/pages/StoryPage";
import "animate.css";
import { TocPage } from "./toc/pages/TocPage";
import {useMediaQuery} from "react-responsive";

const App = () => {
  if (!location.pathname.startsWith('/toc')) {
    const UserAgent = navigator.userAgent;
    const isDesktopOrLaptop = useMediaQuery({
      query: '(min-width: 1025px)'
    });
    if (
      !(UserAgent.match(
          /iPhone|iPod|Android|Windows CE|BlackBerry|Symbian|Windows Phone|webOS|Opera Mini|Opera Mobi|POLARIS|IEMobile|lgtelecom|nokia|SonyEricsson/i
        ) === null &&
        UserAgent.match(/LG|SAMSUNG|Samsung/) === null && isDesktopOrLaptop)
    ) {
      window.open('https://fidelion.io/m','_self');
    }
  }

  return (
    <BrowserRouter>
      <audio id="bgm" src="/music/bgm.mp3" loop />

      <SlideRoutes duration={1000} animation="vertical-slide">
        <Route path="/" element={<IntroPage />} />
        <Route path="/intro/" element={<IntroPage />} />
        <Route path="/story/" element={<StoryPage />} />
        <Route path="/toc/" element={<TocPage />} />
      </SlideRoutes>
    </BrowserRouter>
  );
};

export default App;
