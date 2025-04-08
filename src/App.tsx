import Background from "@/ui/background";
import Wrapper from "@/ui/wrapper";
import {lazy, Suspense} from "react";
import {Cursor} from "react-creative-cursor";
import {Toaster} from "react-hot-toast";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import "react-creative-cursor/dist/styles.css";

const Home = lazy(() => import("@/pages/home"));
function App() {
  return (
    <Router basename="/portfolio">
      <Background />

      <Suspense fallback={<div>Loading...</div>}>
        <Cursor isGelly={true} cursorBackgrounColor="#92bbf7" cursorSize={32} animationDuration={1.25} />
        <Wrapper>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Wrapper>
      </Suspense>
      <Toaster position="bottom-center" />
    </Router>
  );
}

export default App;
