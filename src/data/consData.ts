const trendingCoins: {
  icon: string;
  title: string;
  percent: string;
  gain: "Increment" | "Decrement";
  image: string;
  shortForm: string;
}[] = [
  {
    icon: "",
    title: "Ethereum(ETH)",
    percent: "8.21%",
    gain: "Increment",
    image: "./eth.png",
    shortForm: "ETH",
  },
  {
    icon: "",
    title: "Bitcoin (BTC)",
    percent: "5.26%",
    gain: "Increment",
    image: "./btc.png",
    shortForm: "BTC",
  },
  {
    icon: "",
    title: "Polygon (MATIC)",
    percent: "4.32%",
    gain: "Increment",
    image: "./matic.png",
    shortForm: "MATIC",
  },
];

export default trendingCoins;
