import * as React from "react";
import "./index.css";
interface output {
  title: string;
  value: number;
}
const OutPutText: React.FC<output> = ({ title, value }) => {
  return (
    <div className="OutputText">
      <label>{title}</label>

      <span>/person</span>
      <p dir="rtl ">{value}</p>
    </div>
  );
};
export default OutPutText;
