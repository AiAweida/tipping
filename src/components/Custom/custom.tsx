import { TextFeildContext } from "context";
import React, { useContext, useEffect, useState } from "react";
import "./index.css";

const Custom = () => {
  const handleFocus = (event: any) => event.target.select();
  const { setPercentage } = useContext(TextFeildContext);
  const [customPercent, setCustomPercent] = useState("");
  useEffect(() => {
    setPercentage(+customPercent / 100);
  }, [customPercent]);

  return (
    <>
      <input
        onChange={(e) => {
          setCustomPercent(e.target.value);
        }}
        onClick={handleFocus}
        value={customPercent}
        type="number"
        className="Custom"
        placeholder="custom"
      />
    </>
  );
};
export default Custom;
