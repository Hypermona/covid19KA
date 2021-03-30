import React, { useEffect } from "react";
import "./App.css";
import { PageView, initGA, Event } from "./Components/Tracking";

function App() {
  useEffect(() => {
    initGA("UA-192838043-1");
    PageView();
  }, []);
  return <div className="App"></div>;
}

export default App;
