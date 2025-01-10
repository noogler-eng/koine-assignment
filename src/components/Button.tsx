export default function Button({
  content,
  bgColor,
  textColor,
}: {
  content: string;
  bgColor: string;
  textColor: string;
}) {
  return (
    <button
      className={`${bgColor} ${textColor} px-4 py-2 rounded-md font-semibold hover:opacity-90`}
    >
      {content}
    </button>
  );
}
