import React from "react";
import "./index.css";
interface ResetProps {
  reset: (value: number) => void;
  bill: number;
  people: number;
}
export const Reset: React.FC<ResetProps> = ({ reset }) => {
  let button = document.getElementById("resetButton");

  //   if (input. == 0) {
  //     button.disabled = true;
  //   } else {
  //     button.disabled = false;
  //   }
  // ;
  let p;
  return (
    <button
      disabled={p}
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
