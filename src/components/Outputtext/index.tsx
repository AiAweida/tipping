import * as React from "react";
const Output: React.FC<{ type: string }> = ({ type }) => {
  return <input type="text" id={type} value={type} />;
};
export default Output;
