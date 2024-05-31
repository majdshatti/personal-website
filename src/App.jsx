import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./pages";
import { Cursor } from "./components/Common/Cursor";
import { ProjectDetails } from "./pages/ProjectDetails";
import { NotFound } from "./components/Pages/NotFound";
import AOS from "aos";

import { useEffect } from "react";
import GTM from "./components/Common/GTM";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <GTM />
      <Cursor />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:slug" element={<ProjectDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
