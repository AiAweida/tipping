import React, { useContext } from "react";
import { TextFeildContext } from "context";
import dollar from "images/dollar.svg";
import "./index.css";

interface output {
  title: string;
  value: number;
}

export const OutPutText: React.FC<output> = ({ title, value }) => {
  const { billValue }: any = useContext(TextFeildContext);
  console.log(billValue);
  return (
    <div className="OutputText">
      <div className="Output-title">
        <h3>{title}</h3>
        {billValue}
        <p>/Person</p>
      </div>
      <div className="Value">
        <p>
          <img src={dollar} alt="dollar"></img>
          {value}
        </p>
      </div>
    </div>
  );
};
