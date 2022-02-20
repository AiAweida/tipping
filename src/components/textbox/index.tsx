import React from "react";
import "./index.css";

export const Amount: React.FC<{
  icon: string;
  title: string;
}> = ({ icon, title }) => {
  return (
    <div className="Input_text">
      <label className="label__layout">{title}</label>
      <input dir="rtl" id={icon} className="Text" typeof="text" />
    </div>
  );
};
