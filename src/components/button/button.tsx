import * as React from "react";
import "./index.css";
interface functionProps {
  symbol: string;
  percentage: number;
  setTipPercentage: (newValue: number) => void;
  resetCustomValue: (newvlaue: string) => void;
}
// use just one props for both symbol and percenntagevalue
const Button: React.FC<functionProps> = ({
  symbol,
  percentage,
  setTipPercentage,
  resetCustomValue,
}) => {
  return (
    <button
      id={symbol}
      className="Button"
      value={percentage}
      onClick={() => {
        setTipPercentage(percentage);
      }}
      onMouseUp={() => {
        resetCustomValue("");
      }}
    >
      {symbol}
    </button>
  );
};

export default Button;
