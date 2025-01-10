import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import formatToUSD from "../utils/ConvertToUSDF";

type CourselProps = {
  data: {
    icon: string;
    name: string;
    shortName: string;
    percent: string;
    sparkline: string;
    usdPrice: string;
    gain: "Increment" | "Decrement";
  }[];
};

export function Coursel({ data }: CourselProps) {
  if (!data || data.length === 0) {
    return <div>No data available</div>;
  }

  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full"
    >
      <CarouselContent>
        {data.map((coin, index) => (
          <CarouselItem
            key={index}
            className="md:basis-1/2 lg:basis-1/5 p-[0.5]"
          >
            <div className="p-1">
              <Card className="flex items-center p-2 max-w-[250px]">
                <CardContent className="flex flex-col gap-1 items-start justify-center p-2">
                  <div className="flex gap-3 items-center">
                    <img
                      src={coin.icon}
                      alt={coin.name}
                      height={30}
                      width={30}
                      className="rounded-full"
                    />
                    <div className="flex gap-1 items-center">
                      <h3 className="text-lg">{coin.shortName}</h3>
                      <span
                        className={`text-[10px] h-[20px] py-0 flex items-center rounded-sm ${
                          coin.gain == "Increment"
                            ? "bg-green-200 text-[#51a687]"
                            : "bg-red-200 text-[#FF0000]"
                        }`}
                      >
                        {coin.percent}
                      </span>
                    </div>
                  </div>
                  <div>{formatToUSD(parseFloat(coin.usdPrice))}</div>
                  <img
                    src={coin.sparkline}
                    width={100}
                    height={100}
                    className="place-self-center"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
