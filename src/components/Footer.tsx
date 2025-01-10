import CoinsCoursel from "./CoinsCoursel";

export default function Footer() {
  return (
    <div className="flex flex-col gap-2 w-full p-4 bg-white px-20 py-10">
      <div className="flex flex-col gap-1 w-full">
        <h2 className="font-extrabold">You May Also Like</h2>
        <CoinsCoursel limit={10} />
      </div>
      <div className="flex flex-col gap-1 w-full">
        <h2 className="font-extrabold">Trending Coins</h2>
        <CoinsCoursel limit={20} />
      </div>
    </div>
  );
}
