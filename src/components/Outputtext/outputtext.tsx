import * as React from "react";
import "./index.css";
import dollar from "images/dollar.svg";
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
        <p dir="rtl ">
          <img src={dollar} alt="dollar"></img>
          {value}
        </p>
      </div>
    </div>
  );
};
