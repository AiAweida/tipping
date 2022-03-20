import { TextFeildContext } from "context";
import React, { useContext } from "react";
import "./index.css";

interface ResetProps {
  reset: () => void;
}

export const Reset: React.FC<ResetProps> = ({ reset }) => {
  const { billValue } = useContext(TextFeildContext);
  const { peoplenum } = useContext(TextFeildContext);
  return (
    <button
      disabled={billValue > 0 && peoplenum > 1 ? false : true}
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
