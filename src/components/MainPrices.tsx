type Gain = "Increment" | "Decrement";
import { ChevronUp } from "lucide-react";
import { ChevronDown } from "lucide-react";
import convertToINRFormat from "../utils/ConvertToINRF";
import convertToUSDFormat from "../utils/ConvertToUSDF";

export default function MainPrices({
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
    <div className="flex flex-col gap-1 mt-8">
      <div className="flex gap-4">
        <span className="flex items-center">
          <p className="text-xl">
            {convertToUSDFormat(parseFloat(coin.priceUsd))}
          </p>
        </span>
        <div
          className={`flex gap-1 items-center rounded-lg text-sm p-1 px-2 ${
            coin.gain == "Increment" ? "bg-green-200" : "bg-red-200"
          }`}
        >
          {coin.gain == "Increment" ? (
            <ChevronUp color="#14B079" size={15} />
          ) : (
            <ChevronDown size={15} />
          )}{" "}
          <p className="text-[#14B079] text-sm">{coin.percent}</p>
        </div>
        <p>{"(24H)"}</p>
      </div>
      <div className="flex items-center">
        <p className="text-sm text-gray-700">
          {convertToINRFormat(parseInt(coin.priceInr))}
        </p>
      </div>
    </div>
  );
}
