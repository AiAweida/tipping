import React from "react";
import "./index.css";

const Button: React.FC<{ symbol: string }> = ({ symbol }) => {
  const onButtonClicked = () => {
    //  console.log("button is clicked");
  };

  return (
    <button className="Button" onClick={onButtonClicked}>
      {symbol}
    </button>
  );
};

export default Button;
