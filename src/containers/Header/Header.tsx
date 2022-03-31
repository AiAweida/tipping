import React from "react";
import logo from "images/logo.svg";
import "./Header.css";
export const Header: React.FC = () => {
  return (
    <header className="App__Header">
      <img
        src={logo}
        alt="spli
      tter"
      />
    </header>
  );
};
