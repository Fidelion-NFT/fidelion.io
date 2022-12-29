import { Act1Page, MenuPage } from "./story/pages";
import { IntroPage } from "@/intro/pages/IntroPage";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useLocation,
} from "react-router-dom";
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
    <Router>
      <InnerRouter />
    </Router>
  );
};

const InnerRouter = () => {
  const location = useLocation();

  return (
    <TransitionGroup className="router">
      <CSSTransition
        key={location.pathname}
        classNames="fade"
        timeout={10 * 1000}
      >
        <Switch location={location}>
          <Route exact path="/" component={IntroPage} />
          <Route path="/intro/" component={IntroPage} />
          <Route path="/story/" component={StoryPage} />
          <Route path="/toc/" component={TocPage} />
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  );
};

const mapStyles = (styles: any) => {
  return {
    opacity: styles.opacity,
    transform: `scale(${styles.scale})`,
  };
};

export default App;
