import React, { FormEventHandler } from "react";
import "./index.css";
interface functionProps {
  userPercentage: (newValue: number) => void;
  value: number;
}
const handleFocus = (event: any) => event.target.select();
const Custom: React.FC<functionProps> = ({ userPercentage, value }) => {
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
          onClick={handleFocus}
          type="text"
          className="Custom"
          placeholder="custom"
        />
      </form>
    </>
  );
};
export default Custom;
