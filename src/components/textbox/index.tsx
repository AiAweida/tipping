import React from "react";

import "./index.css";
const TextBox: React.FC<{ symbol?: string }> = ({ symbol }) => {
  return (
    <textarea className="Text" placeholder="amount to pay">
      {symbol}
    </textarea>
  );
};
export default TextBox;
