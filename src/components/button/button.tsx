import { TextFeildContext } from "context";
import React, { useContext } from "react";
import "./index.css";
interface functionProps {
  symbol: string;
  percentage: number;
}
const Button: React.FC<functionProps> = ({ symbol, percentage }) => {
  const { setPercentage } = useContext(TextFeildContext);
  return (
    <button
      id={symbol}
      className="Button"
      value={percentage}
      onClick={() => {
        setPercentage(percentage);
      }}
    >
      {symbol}
    </button>
  );
};

export default Button;
