import Background from "@/ui/background";
import {lazy, Suspense} from "react";
import {Cursor} from "react-creative-cursor";
import {Toaster} from "react-hot-toast";
import {BrowserRouter as Router} from "react-router-dom";
import "react-creative-cursor/dist/styles.css";
import SmoothScroll from "@/ui/scrollWrapper";
import ScrollBar from "@/ui/scrollBar";
import {usePhoneMediaQuery} from "@/functions/usePhone";
import Color from "@/functions/colorContext";
import Navigation from "@/ui/navigation";
import Loader from "@/ui/loader";

const Home = lazy(() => import("@/pages/home"));

function App() {
  const phone = usePhoneMediaQuery();

  return (
    <Suspense fallback={<Loader />}>
      <Router basename="/portfolio">
        <Color>
          <Background />
          {!phone && (
            <>
              <ScrollBar />
              <Cursor
                isGelly={true}
                cursorBackgrounColor="#92bbf7"
                cursorSize={32}
                animationDuration={1}
              />
            </>
          )}
          <Navigation>
            <SmoothScroll>
              <Home />
            </SmoothScroll>
          </Navigation>
          <Toaster position="top-right" />
        </Color>
      </Router>
    </Suspense>
  );
}

export default App;
