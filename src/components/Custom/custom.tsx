import { TextFeildContext } from "context";
import React, { useContext, useEffect, useState } from "react";
import "./index.css";

const Custom = () => {
  const { setPercentage } = useContext(TextFeildContext);
  const [customPercent, setCustomPercent] = useState("");
  useEffect(() => {
    setPercentage(+customPercent / 100);
  }, [customPercent, setPercentage]);

  return (
    <>
      <input
        onChange={(e) => {
          setCustomPercent(e.target.value);
        }}
        value={customPercent}
        type="number"
        className="Custom"
        placeholder="custom"
      />
    </>
  );
};
export default Custom;
