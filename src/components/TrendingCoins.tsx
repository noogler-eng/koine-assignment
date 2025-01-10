import { ChevronUp } from "lucide-react";
import { ChevronDown } from "lucide-react";
import { useTrending } from "../hooks/GetTrending";

export default function TrendingCoins() {
  const { trending, isLoading, error } = useTrending(3);

  if (error) {
    return <div>error...</div>;
  }

  return (
    <div className="w-full bg-white rounded-xl">
      <div className="p-5">
        <div className="font-semibold text-xl">Trending Coins (24h)</div>
        <div className="flex flex-col gap-3 mt-5">
          {trending &&
            trending.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex justify-between items-center"
                >
                  <div className="text-sm flex gap-1 items-center">
                    <img
                      src={item.icon}
                      height={36}
                      width={36}
                      className="rounded-full"
                    />
                    {item.name}
                  </div>
                  <div
                    className={`flex gap-1 items-center rounded-lg text-sm p-1 px-2 w-20 ${
                      item.gain == "Increment"
                        ? "bg-green-200 text-[#51a687]"
                        : "bg-red-200 text-[#FF0000]"
                    }`}
                  >
                    {item.gain == "Increment" ? (
                      <ChevronUp color="#51a687" size={10} />
                    ) : (
                      <ChevronDown size={10} color="#FF0000" />
                    )}{" "}
                    <p className="text-sm">{item.percent}</p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
