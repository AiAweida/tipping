import React from "react";
import "./index.css";
interface ResetProps {
  reset: (value: number) => void;
  bill: number;
  people: number;
}
export const Reset: React.FC<ResetProps> = ({ reset, bill, people }) => {
  let button = document.getElementById("resetButton");
  let buttonstatus: boolean;

  if (bill > 0 && people > 1) {
    buttonstatus = false;
  } else {
    buttonstatus = true;
  }
  return (
    <button
      disabled={buttonstatus}
      type="submit"
      className="Reset"
      id="resetButton"
      onClick={() => reset(0)}
    >
      Reset
    </button>
  );
};
// export default Reset;
