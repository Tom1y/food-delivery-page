import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Explor from "./components/Explor";
import Countries from "./components/Countries";
import Download from "./components/Download";
import Partner from "./components/Partner";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Explor />
      <Countries />
      <Download />
      <Partner />
    </>
  );
}

export default App;
