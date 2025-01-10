import { useState } from "react";
import MainLeft from "./components/MainLeft";
import MainRight from "./components/MainRight";
import Navbar from "./components/Navbar";
import "./index.css";
import Coin from "./components/Coin";
import Footer from "./components/Footer";

function App() {
  const [coin, setCoin] = useState<{
    name: string;
    priceUsd: string;
    priceInr: string;
    image: string;
    shortForm: string;
    percent: string;
    gain: "Increment" | "Decrement";
  }>({
    name: "Bitcoin",
    priceUsd: "46953.05",
    priceInr: "3942343",
    image: "./btc.png",
    shortForm: "BTC",
    percent: "5.26%",
    gain: "Increment",
  });
  console.log(coin);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="p-10 pt-0 w-full bg-slate-200">
        <Coin coin={coin} />
        <div className="flex w-full gap-4">
          <MainLeft coin={coin} />
          <MainRight />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
