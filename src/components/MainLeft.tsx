import { Routes, Route, Link, useLocation } from "react-router-dom";
import MainHeader from "./MainHeader";
import MainPrices from "./MainPrices";
import TradingViewChart from "./TradingViewChart";
import Fundamentals from "./sections/Fundamentals";
import Insights from "./sections/Insights";
import Main from "./sections/Main";
import Sentiments from "./sections/Sentiments";
import Team from "./sections/Team";
import Tokenomics from "./sections/Tokenomics";

type Gain = "Increment" | "Decrement";

const routes: {
  name: string;
  link: string;
}[] = [
  {
    name: "Overview",
    link: "/",
  },
  {
    name: "Fundamentals",
    link: "/fundamentals",
  },
  {
    name: "News Insight",
    link: "/news_insight",
  },
  {
    name: "Sentiments",
    link: "/sentiments",
  },
  {
    name: "Team",
    link: "/team",
  },
  {
    name: "Technicals",
    link: "/technicals",
  },
  {
    name: "Tokenomics",
    link: "/tokenomics",
  },
];

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
  const location = useLocation();

  return (
    <div className="w-9/12 border">
      <div className="bg-white p-5 rounded-xl">
        <MainHeader coin={coin} />
        <MainPrices coin={coin} />
        <div className="mt-8 w-full h-[450px]">
          <TradingViewChart coinName={coin.shortForm} />
        </div>
      </div>
      <div className="w-full border-b border-gray-400">
        <div className="flex w-4/5 justify-between mt-5">
          {routes.map((item, index) => {
            return (
              <Link
                to={item.link}
                key={index}
                className={`${
                  location.pathname == item.link
                    ? "border-b-2 border-blue-600 text-blue-600"
                    : ""
                } font-semibold pb-3`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      </div>
      <div className="mt-4">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/fundamentals" element={<Fundamentals />} />
          <Route path="/news_insight" element={<Insights />} />
          <Route path="/sentiments" element={<Sentiments />} />
          <Route path="/team" element={<Team />} />
          <Route path="/tokenomics" element={<Tokenomics />} />
        </Routes>
      </div>
    </div>
  );
}
