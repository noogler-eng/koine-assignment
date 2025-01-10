import Advertisment from "./Advertisment";
import TrendingCoins from "./TrendingCoins";

export default function MainRight() {
  return (
    <div className="w-3/12 flex flex-col gap-5">
      <div>
        <Advertisment />
      </div>
      <div>
        <TrendingCoins />
      </div>
    </div>
  );
}
