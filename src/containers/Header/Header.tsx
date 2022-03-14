import React from "react";
import logo from "images/logo.svg";
import "./Header.css";
interface HeaderProps {}
export const Header: React.FC<HeaderProps> = () => {
  return (
    <header className="App__Header">
      <img src={logo} alt="splitter" />
    </header>
  );
};
