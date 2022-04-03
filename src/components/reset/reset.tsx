import { TextFeildContext } from "context";
import React, { useContext } from "react";
import "./index.css";

interface ResetProps {}

export const Reset: React.FC<ResetProps> = () => {
  const { billValue, setBillValue, setPeoplenum, setPercentage, peoplenum } =
    useContext(TextFeildContext);
  const ResetValues = (x: number, y: number) => {
    setBillValue(x);
    setPeoplenum(y);
    setPercentage(x);
  };
  return (
    <button
      disabled={billValue > 0 && peoplenum > 1 ? false : true}
      type="submit"
      className="Reset"
      id="resetButton"
      onClick={() => ResetValues(0, 1)}
    >
      Reset
    </button>
  );
};
