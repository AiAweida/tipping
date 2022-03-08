import React, { FormEventHandler } from "react";
import "./index.css";
interface functionProps {
  userPercentage: (newsValue: string) => void;
  value: string;
}
const handleFocus = (event: any) => event.target.select();
const Custom: React.FC<functionProps> = ({ userPercentage, value }) => {
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
