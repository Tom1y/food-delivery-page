import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Explor from "./components/Explor";
import Countries from "./components/Countries";
import Download from "./components/Download";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Explor />
      <Countries />
      <Download />
    </>
  );
}

export default App;
