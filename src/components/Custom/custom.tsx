import React, { FormEventHandler, SyntheticEvent } from "react";
import "./index.css";
interface functionProps {
  userPercentage: (newValue: number) => void;
  value: number;
  totalForTip: (totalValue: number) => void;
}
const Custom: React.FC<functionProps> = ({
  userPercentage,
  value,
  totalForTip,
}) => {
  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    console.log("value");
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => {
            value = +e.target.value / 100;
            userPercentage(value);
          }}
          onKeyUp={() => {
            totalForTip(value);
          }}
          type="text"
          className="Custom"
          placeholder="custom"
        />
      </form>
    </>
  );
};
export default Custom;
