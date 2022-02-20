import React from "react";
import "App.css";
import { Header } from "containers/Header";
import { InputLayout } from "containers/Layout";
import "containers/Header/Header.css";
function App() {
  return (
    <div className="App">
      <Header />
      <InputLayout />
    </div>
  );
}

export default App;
