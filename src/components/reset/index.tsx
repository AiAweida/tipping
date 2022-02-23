import React from "react";
import "./index.css";

interface ResetProps {
  reset: (newValue: string) => void;
}

const Reset: React.FC<ResetProps> = ({ reset }) => {
  return (
    <button className="Reset" onClick={() => reset("$0")}>
      Reset
    </button>
  );
};

export default Reset;
