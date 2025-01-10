import MainHeader from "./MainHeader";
import MainPrices from "./MainPrices";
import TradingViewChart from "./TradingViewChart";

type Gain = "Increment" | "Decrement";

export default function MainLeft({
  coin,
}: {
  coin: {
    name: string;
    priceUsd: string;
    priceInr: string;
    image: string;
    shortForm: string;
    percent: string;
    gain: Gain;
  };
}) {
  return (
    <div className="w-9/12 border bg-white rounded-xl p-5 min-h-screen">
      <MainHeader coin={coin} />
      <MainPrices coin={coin} />
      <div className="mt-8 w-full h-[450px]">
        <TradingViewChart coinName={coin.shortForm} />
      </div>
    </div>
  );
}
