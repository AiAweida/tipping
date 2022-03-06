import * as React from "react";
import "./index.css";
interface output {
  title: string;
  value: number;
}
export const OutPutText: React.FC<output> = ({ title, value }) => {
  return (
    <div className="OutputText">
      <label>
        {title}
        <br />
      </label>

      <span>/Person</span>
      <p dir="rtl ">{value}</p>
    </div>
  );
};
