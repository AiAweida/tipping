// import { TextField } from "@mui/material";
import React, { useState } from "react";
// import { isNumberObject } from "util/types";
import "./index.css";
const Custom: React.FC<{}> = () => {
  const [intial, setIntial] = useState("");
  return (
    <input
      onChange={(event) => setIntial(event.target.value)}
      type="number"
      className="Custom"
      value={intial}
      placeholder="custom"
    />
  );
};
export default Custom;
