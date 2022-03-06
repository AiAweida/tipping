import { OutPutText } from "Components/Outputtext";
import Reset from "Components/reset/reset";
interface props {
  totaltopay: number;
  perpersontopay: number;
}
export const OutputLayout: React.FC<props> = ({
  totaltopay,
  perpersontopay,
}) => {
  //for reset
  const resetCallback = () => {
    totaltopay = 0;
    perpersontopay = 0;
  };
  return (
    <div className="Output__Container">
      <OutPutText title="Tip Amount" value={perpersontopay} />
      <OutPutText title="Total" value={totaltopay} />
      <div className="Reset__Layout">
        <Reset reset={resetCallback} />
      </div>
    </div>
  );
};
