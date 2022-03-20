import { OutPutText } from "Components/Outputtext";
import { Reset } from "Components/reset/reset";
import "./output.css";
interface props {
  totalToPay: number;
  reset: () => void;
  perPersonToPay: number;
}

export const OutputLayout: React.FC<props> = ({
  totalToPay,
  perPersonToPay,
  reset,
}) => {
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
