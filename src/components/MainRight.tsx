import Advertisment from "./Advertisment";
import TrendingCoins from "./TrendingCoins";

export default function MainRight({ setCoin }: { setCoin: any }) {
  return (
    <div className="w-3/12 flex flex-col gap-5">
      <div>
        <Advertisment />
      </div>
      <div>
        <TrendingCoins setCoin={setCoin} />
      </div>
    </div>
  );
}
