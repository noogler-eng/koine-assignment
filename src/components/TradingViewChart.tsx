import { useEffect, useRef } from "react";

export default function TradingViewChart({ coinName }: { coinName: string }) {
  const container = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!container.current) return;

    // Create a new script element
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
      {
        "autosize": false,
        "symbol": "BITSTAMP:${coinName}USD",
        "timezone": "Etc/UTC",
        "theme": "light",
        "style": "3",
        "locale": "en",
        "enable_publishing": false,
        "gridColor": "rgba(0, 0, 0, 0.06)",
        "hide_top_toolbar": true,
        "range": "YTD",
        "allow_symbol_change": true,
        "save_image": false,
        "calendar": false,
        "hide_volume": true
      }`;

    container.current.appendChild(script);

    return () => {
      if (container.current) {
        container.current.innerHTML = "";
      }
    };
  }, [coinName]);

  return (
    <div
      className="tradingview-widget-container mt-8 flex justify-center"
      ref={container}
      style={{ height: "70%", width: "80%" }}
    >
      <div className="tradingview-widget-container__widget"></div>
    </div>
  );
}
