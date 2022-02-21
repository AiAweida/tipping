import * as React from "react";
import "App.css";
import { Header } from "Containers/Header";
import { InputLayout } from "Containers/Layout";
// import "Containers/Header/Header.css";
function App() {
  return (
    <div className="App">
      <Header />
      <InputLayout />
    </div>
  );
}

export default App;
