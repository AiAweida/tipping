import { OutPutText } from "Components/Outputtext";
import { Reset } from "Components/reset/reset";
import { TextFeildContext } from "context";
import { useContext } from "react";
import "./output.css";

interface props {}

export const OutputLayout: React.FC<props> = () => {
  const { peoplenum, billValue, percentage } = useContext(TextFeildContext);
  const totalToPay = billValue * percentage;
  const perPersonToPay = totalToPay / peoplenum;

  return (
    <div className="Output__Container">
      <OutPutText title="Tip Amount" value={perPersonToPay} />
      <OutPutText title="Total" value={totalToPay} />
      <div className="Reset__Layout">
        <Reset />
      </div>
    </div>
  );
};
