import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import TinkerHub from "./Pages/TinkerHub";
import Ecocee from "./Pages/Ecocee";
import Hackathons from "./Pages/Hackathons";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/tinkerhub" element={<TinkerHub />} />
        <Route path="/ecocee" element={<Ecocee />} />
        <Route path="/hackathons" element={<Hackathons />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;