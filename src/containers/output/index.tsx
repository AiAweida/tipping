import { OutPutText } from "Components/Outputtext";
import { Reset } from "Components/reset/reset";
import { TextFeildContext } from "context";
import { useContext } from "react";
import "./output.css";

interface props {
  reset: () => void;
  buttonValue: number;
}

export const OutputLayout: React.FC<props> = ({ reset, buttonValue }) => {
  const { peoplenum } = useContext(TextFeildContext);
  const { billValue } = useContext(TextFeildContext);
  const { percentage } = useContext(TextFeildContext);
  const totalToPay = billValue * percentage;
  const perPersonToPay = totalToPay / peoplenum;

  return (
    <div className="Output__Container">
      <OutPutText title="Tip Amount" value={perPersonToPay} />
      <OutPutText title="Total" value={totalToPay} />
      <div className="Reset__Layout">
        <Reset reset={reset} />
      </div>
    </div>
  );
};
