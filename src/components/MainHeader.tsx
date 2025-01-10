export default function MainHeader({
  coin,
}: {
  coin: {
    name: string;
    priceUsd: string;
    priceInr: string;
    image: string;
    shortForm: string;
    percent: string;
    gain: "Increment" | "Decrement";
  };
}) {
  return (
    <div className="flex gap-5">
      <div className="flex gap-2 items-center">
        <img src={coin.image} width={25} />
        <h1 className="text-xl font-semibold">{coin.name}</h1>
        <p className="text-sm text-gray-700 place-self-center">
          {coin.shortForm}
        </p>
      </div>
      <div className="bg-[#808A9D] text-white py-1 px-2 text-sm rounded-lg">
        Rank #1
      </div>
    </div>
  );
}
