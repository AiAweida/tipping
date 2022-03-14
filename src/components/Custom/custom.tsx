import React, { FormEventHandler } from "react";
import "./index.css";
interface functionProps {
  userPercentage: (newValue: string) => void;
  value: string;
  resetButtonValue: (newvlaue: number) => void;
}
const handleFocus = (event: any) => event.target.select();
const Custom: React.FC<functionProps> = ({
  userPercentage,
  value,
  resetButtonValue,
}) => {
  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => {
            value = e.target.value;
            userPercentage(value);
          }}
          onKeyDownCapture={(e) => {
            resetButtonValue(0);
          }}
          value={value}
          onClick={handleFocus}
          type="number"
          className="Custom"
          placeholder="custom"
        />
      </form>
    </>
  );
};
export default Custom;
