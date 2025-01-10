import { useTrending } from "../hooks/GetTrending";
import { Coursel } from "./Coursel";

export default function CoinsCoursel({ limit }: { limit: number }) {
  // @ts-ignore
  const { trending, isLoading, error } = useTrending(limit);
  console.log('trending', trending);

  if (error) return <div>error...</div>;

  // Default fallback to empty array if trending is undefined
  return <Coursel data={trending ?? []} />;
}
