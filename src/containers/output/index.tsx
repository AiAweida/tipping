import { OutPutText } from "Components/Outputtext";
import { Reset } from "Components/reset/reset";
import "./output.css";
interface props {
  bill: number;
  people: number;
  totaltopay: number;
  reset: (newValue: number) => void;
  perpersontopay: number;
}
export const OutputLayout: React.FC<props> = ({
  totaltopay,
  perpersontopay,
  reset,
  bill,
  people,
}) => {
  return (
    <div className="Output__Container">
      <OutPutText title="Tip Amount" value={perpersontopay} />
      <OutPutText title="Total" value={totaltopay} />
      <div className="Reset__Layout">
        <Reset reset={reset} bill={bill} people={people} />
      </div>
    </div>
  );
};
