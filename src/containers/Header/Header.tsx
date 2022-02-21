import React from "react";
import "./Header.css";
interface HeaderProps {}
export const Header: React.FC<HeaderProps> = () => {
  return (
    <header className="App__Header">
      SPLI
      <br />
      TTER
    </header>
  );
};
