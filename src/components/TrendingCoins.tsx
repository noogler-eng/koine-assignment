import trendingCoins from "../data/consData";
import { ChevronUp } from "lucide-react";
import { ChevronDown } from "lucide-react";

export default function TrendingCoins({ setCoin }: { setCoin: any }) {
  return (
    <div className="w-full bg-white rounded-xl">
      <div className="p-5">
        <div className="font-semibold text-xl">Trending Coins (24h)</div>
        <div className="flex flex-col gap-3 mt-5">
          {trendingCoins.map((item, index) => {
            return (
              <div
                key={index}
                className="flex justify-between items-center"
                onClick={() => {
                  setCoin({
                    name: item.title.split("(")[0],
                    priceUsd: "",
                    priceInr: "",
                    image: item.image,
                    shortForm: item.shortForm,
                    percent: item.percent,
                    gain: item.gain
                  });
                }}
              >
                <div className="text-sm flex gap-1 items-center">
                  <img src={item.image} />
                  {item.title}
                </div>
                <div
                  className={`flex gap-1 items-center rounded-lg text-sm p-1 px-2 ${
                    item.gain == "Increment" ? "bg-green-200" : "bg-red-200"
                  }`}
                >
                  {item.gain == "Increment" ? (
                    <ChevronUp color="#14B079" size={15} />
                  ) : (
                    <ChevronDown size={15} />
                  )}{" "}
                  <p className="text-[#14B079] text-sm">{item.percent}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
