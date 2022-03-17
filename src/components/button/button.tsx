import React, { useContext } from "react";
import { TextFeildContext } from "context";
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
  const { billValue }: any = useContext(TextFeildContext);
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
