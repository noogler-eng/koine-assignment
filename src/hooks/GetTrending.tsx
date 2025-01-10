import { useState, useEffect } from "react";
import axios from "axios";

export function useTrending(limit: number) {
  const [trending, setTrending] = useState<
    | null
    | {
        icon: string;
        name: string;
        shortName: string;
        percent: string;
        sparkline: string;
        usdPrice: string;
        gain: "Increment" | "Decrement";
      }[]
  >(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchTrendings = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const res = await axios.get(
        "https://api.coingecko.com/api/v3/search/trending",
        {
          headers: {
            Accept: "application/json",
            "x-cg-demo-api-key": "CG-wPN73rR9ZCjLvCd4uzcuju6S",
          },
        }
      );

      const topCoins = res.data.coins.slice(0, limit).map((coin: any) => {
        const percentChange = coin.item.data.price_change_percentage_24h.usd;
        const usdPrice = coin.item.data.price;
        const sparkline = coin.item.data.sparkline;
        console.log("sparkline: ", sparkline);
        return {
          icon: coin.item.small,
          name: coin.item.name,
          shortName: coin.item.symbol,
          percent: `${percentChange.toFixed(2)}%`,
          sparkline: sparkline,
          usdPrice: usdPrice,
          gain: percentChange >= 0 ? "Increment" : "Decrement",
        };
      });

      setTrending(topCoins);
    } catch (err: any) {
      setError(err.message || "An error occurred while fetching data.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchTrendings();
  }, []);

  return { trending, isLoading, error };
}
