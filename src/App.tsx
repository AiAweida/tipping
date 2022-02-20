import React from "react";
import "./App.css";
import Button from "./components/button/index";
import TextBox from "./components/textbox";

function App() {
  return (
    <div className="App">
      <header className="App__Header">
        SPLI<p>TTER</p>
      </header>
      <div className="Input__container">
        {/* <TextBox title={'bill'} icon={'dollar sign'}/> */}
        <Button symbol="5%" />
        <Button symbol="10%" />
        <Button symbol="15%" />
        <Button symbol="25%" />
        <Button symbol="50%" />
        <TextBox symbol="" />
        {/* <TextBox title={'number of people'} icon={''}/> */}
      </div>
    </div>
  );
}

export default App;
