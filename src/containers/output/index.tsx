import { OutPutText } from "Components/Outputtext";
import { Reset } from "Components/reset/reset";
import { TextFeildContext } from "context";
import { useContext, useState } from "react";
import "./output.css";
interface props {
  bill: number;
  people: number;
  totalToPay: number;
  reset: () => void;
  perPersonToPay: number;
}

export const OutputLayout: React.FC<props> = ({
  totalToPay,
  perPersonToPay,
  reset,
  bill,
  people,
}) => {
  const { billValue }: any = useContext(TextFeildContext);
  return (
    <div className="Output__Container">
      <OutPutText title="Tip Amount" value={perPersonToPay} />
      <OutPutText title="Total" value={totalToPay} />
      <div className="Reset__Layout">
        <Reset reset={reset} bill={billValue} people={people} />
      </div>
    </div>
  );
};
