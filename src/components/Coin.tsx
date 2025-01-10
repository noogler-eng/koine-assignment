export default function Coin({
  coin,
}: {
  coin: {
    name: string;
    priceUsd: string;
    priceInr: string;
    image: string;
  };
}) {
  return (
    <div className="py-3 text-sm text-gray-700">
      Cryptocurrencies {">>"}{" "}
      <span className="text-semibold text-black">{coin.name}</span>
    </div>
  );
}
