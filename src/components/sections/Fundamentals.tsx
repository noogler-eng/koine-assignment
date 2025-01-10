import ProgressBar from "../ProgressBar";

export default function Fundamentals() {
  return (
    <div className="flex flex-col gap-16 p-5 bg-white rounded-xl">
      <h2 className="text-xl">Performance</h2>
      <div className="flex flex-col gap-10">
        <ProgressBar
          low={"46930.22"}
          high={"49343.83"}
          value={"48637.83"}
          recordData={"Today's"}
        />
        <ProgressBar
          low={"91251"}
          high={"95799"}
          value={"91799"}
          recordData={"52 weeks"}
        />
      </div>
      <h2>Fundamentals</h2>
      <div className="flex justify-between gap-4">
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
