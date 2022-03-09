import * as React from "react";
import "./index.css";
interface output {
  title: string;
  value: number;
}
export const OutPutText: React.FC<output> = ({ title, value }) => {
  return (
    <div className="OutputText">
      <div className="Output-title">
        <h3>{title}</h3>
        <p>/Person</p>
      </div>
      <div className="Value">
        <p dir="rtl ">{value}</p>
      </div>
    </div>
  );
};
