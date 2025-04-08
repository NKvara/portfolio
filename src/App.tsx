import Wrapper from "@/ui/wrapper";
import {lazy, Suspense} from "react";
import {Toaster} from "react-hot-toast";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

const Home = lazy(() => import("@/pages/home"));
function App() {
  return (
    <Router>
      <div className="fixed top-0 h-svh w-full bg-neutral-950 -z-10 pointer-events-none ">
        <div className="absolute -inset-8 [background-image:linear-gradient(to_right,#131421_2px,transparent_2px),linear-gradient(to_bottom,#131421_2px,transparent_2px)] [background-size:55px_55px]" />
        <div className="absolute -inset-8 [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)] bg-neutral-950" />
      </div>

      <Wrapper>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Suspense>
      </Wrapper>
      <Toaster position="bottom-center" />
    </Router>
  );
}

export default App;
