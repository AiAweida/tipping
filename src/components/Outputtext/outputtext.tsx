import * as React from "react";
import "./index.css";
const OutPutText: React.FC<{
  title: string;
  value: number;
}> = ({ title, value }) => {
  return (
    <div className="OutputText">
      <label>{title}</label>

      <span>/person</span>
      <p dir="rtl ">{value}</p>
    </div>
  );
};
export default OutPutText;
