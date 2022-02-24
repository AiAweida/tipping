import * as React from "react";
import "./index.css";
interface functionProps {
  symbol: string;
  value: number;
  people: number;
}
const Button: React.FC<functionProps> = ({ symbol, value, people }) => {
  return (
    <button
      id={symbol}
      className="Button"
      onClick={() => {
        if (value === 0.5) {
          console.log(0.5 * people);
        }
      }}
      value={value}
    >
      {symbol}
    </button>
  );
};

export default Button;
