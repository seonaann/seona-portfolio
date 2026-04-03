import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";


import Home from "./Pages/Home";
import TinkerHub from "./Pages/TinkerHub";
import Hackathons from "./Pages/Hackathons";
import GHCI from "./Pages/GHCI";
import Projects from "./Pages/Projects";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/tinkerhub" element={<TinkerHub />} />
        <Route path="/hackathons" element={<Hackathons />} />
        <Route path="/ghci" element={<GHCI />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  );
}

export default App;