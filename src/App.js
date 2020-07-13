import React from "react";
import "./App.css";
import Portfolio from "./components/Portfolio"
import Home from "./components/Home"
import About from "./components/About"
import ContactContainer from "./components/ContactContainer";


function App() {

  return (
    <>
      < Home />
      < About />
      <Portfolio />
      <ContactContainer />
    </>
  );
}

export default App;
