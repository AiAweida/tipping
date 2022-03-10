import { OutPutText } from "Components/Outputtext";
import { Reset } from "Components/reset/reset";
import "./output.css";
interface props {
  totaltopay: number;
  reset: (newValue: number) => void;
  perpersontopay: number;
  gettheValues: (
    totaltopay: number,
    personToPay: number,
    bill: number,
    percentage: string,
    people: number
  ) => void;
}
export const OutputLayout: React.FC<props> = ({
  totaltopay,
  perpersontopay,
  reset,
  gettheValues,
}) => {
  return (
    <div className="Output__Container">
      <OutPutText title="Tip Amount" value={perpersontopay} />
      <OutPutText title="Total" value={totaltopay} />
      <div className="Reset__Layout">
        <Reset reset={reset} />
      </div>
    </div>
  );
};
