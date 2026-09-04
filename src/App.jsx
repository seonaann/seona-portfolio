import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import ScrollToTop from "./components/ScrollToTop";
import Home from "./Pages/Home";
import TinkerHub from "./Pages/TinkerHub";
import Hackathons from "./Pages/Hackathons";
import GHCI from "./Pages/GHCI";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/tinkerhub" element={<TinkerHub />} />
        <Route path="/hackathons" element={<Hackathons />} />
        <Route path="/ghci" element={<GHCI />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AnimatedRoutes />
    </BrowserRouter>
  );
}

export default App;