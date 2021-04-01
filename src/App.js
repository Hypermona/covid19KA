import React, { useEffect } from "react";
import "./App.css";
import { PageView, initGA, Event } from "./Components/Tracking";
import Main from "./Components/Main";

function App() {
  useEffect(() => {
    initGA("UA-192838043-1");
    PageView();
  }, []);
  return <Main name="Mohan" />;
}

export default App;
