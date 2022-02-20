import React from "react";
// import Button from "components/button";
import { Amount } from "components/textbox";
import "App.css";
import { Header } from "containers/Header";
import { Buttons } from "containers/Button";
import "containers/Header/Header.css";
function App() {
  return (
    <div className="App">
      <Header />
      <Amount icon="bill" title="bill" />
      <Buttons />
      <Amount icon="people" title="people" />
    </div>
  );
}

export default App;
