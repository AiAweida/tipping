import { TextFeildContext } from "context";
import React, { useContext } from "react";
import "./index.css";

const Custom = () => {
  const { customPercent, setCustomPercent } = useContext(TextFeildContext);
  return (
    <>
      <input
        onChange={(e) => setCustomPercent(e.target.value)}
        value={customPercent}
        type="number"
        className="Custom"
        placeholder="custom"
      />
    </>
  );
};
export default Custom;
