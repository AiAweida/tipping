import React from "react";
import "./index.css";

interface ResetProps {
  reset: () => void;
  bill: number;
  people: number;
}

export const Reset: React.FC<ResetProps> = ({ reset, bill, people }) => {
  return (
    <button
      disabled={bill > 0 || people > 1 ? false : true}
      type="submit"
      className="Reset"
      id="resetButton"
      onClick={() => reset()}
    >
      Reset
    </button>
  );
};
// export default Reset;
