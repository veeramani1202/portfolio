import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Home } from "./Components/Home";
import About from "./Components/About";

import { useEffect } from "react";
function App() {
  const Navigate = useNavigate();
  const isLOcal = localStorage.getItem("isExists");
  console.log(localStorage.getItem("isExists"));
  useEffect(() => {
    if (!isLOcal) {
      Navigate("/");
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLOcal]);
  return (
    <>
      <title>project</title>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
