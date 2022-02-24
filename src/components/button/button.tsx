import * as React from "react";
import "./index.css";
interface functionProps {
  symbol: string;
  value: number;
  total: (newValue: number) => void;
}
const Button: React.FC<functionProps> = ({ symbol, value, total }) => {
  return (
    <button id={symbol} className="Button" onClick={() => total} value={value}>
      {symbol}
    </button>
  );
};

export default Button;
