import Background from "@/ui/background";
import {lazy, Suspense} from "react";
import {Cursor} from "react-creative-cursor";
import {Toaster} from "react-hot-toast";
import {BrowserRouter as Router} from "react-router-dom";
import "react-creative-cursor/dist/styles.css";
import Navigation from "@/ui/navigation";
import SmoothScroll from "@/ui/scrollWrapper";
import ScrollBar from "@/ui/scrollBar";

const Home = lazy(() => import("@/pages/home"));
function App() {
  return (
    <Router basename="/portfolio">
      <Background />
      <Suspense fallback={<div>Loading...</div>}>
        <ScrollBar />
        <Cursor
          isGelly={true}
          cursorBackgrounColor="#92bbf7"
          cursorSize={32}
          animationDuration={1.25}
        />
        <Navigation>
          <SmoothScroll>
            <Home />
          </SmoothScroll>
        </Navigation>
      </Suspense>
      <Toaster position="bottom-center" />
    </Router>
  );
}

export default App;
