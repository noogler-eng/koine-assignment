import convertToUSD from "../utils/ConvertToUSDF";

export default function ProgressBar({
  low,
  value,
  high,
  recordData,
}: {
  low: string;
  high: string;
  value: string;
  recordData: string;
}) {
  // Calculate the percentage of the progress
  const progress =
    ((parseFloat(value) - parseFloat(low)) /
      (parseFloat(high) - parseFloat(low))) *
    100;

  return (
    <div className="w-full">
      <div className="flex justify-between mb-2 text-sm font-semibold">
        <span>
          {recordData} Low: {convertToUSD(parseFloat(low))}
        </span>
        <span>
          {recordData} High: {convertToUSD(parseFloat(high))}
        </span>
      </div>

      <div className="relative w-full bg-gray-200 rounded-full h-3">
        <div
          className="absolute top-0 left-0 h-3 rounded-full bg-gradient-to-r from-green-400 via-yellow-400 to-red-500"
          style={{
            width: `${Math.min(100, Math.max(0, progress))}%`,
          }}
        ></div>

        <div
          className="absolute translate-y-6 translate-x-[-50%] flex flex-col items-center"
          style={{
            left: `${Math.min(100, Math.max(0, progress))}%`,
          }}
        >
          <div className="w-3 h-3 bg-black rotate-45 transform mb-1"></div>
          <div className="text-xs text-black font-semibold">
            {convertToUSD(parseFloat(value))}
          </div>
        </div>
      </div>
    </div>
  );
}
