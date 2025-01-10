import Button from "./Button";

export default function Advertisment() {
  return (
    <div className="bg-[#0052FE] rounded-xl min-h-[450px] flex flex-col items-center justify-center p-6 gap-4">
      <h2 className="text-xl w-4/5 text-center text-white font-semibold">
        Get Started with KoinX for FREE
      </h2>
      <p className="text-white text-sm text-center">
        With our range of features that you can equip for free, KoinX allows you
        to be more educated and aware of your tax reports.
      </p>
      <img src={"Frame.png"} />
      <Button
        content="Get Started for FREE ->"
        bgColor="bg-white"
        textColor="text-black"
      />
    </div>
  );
}
