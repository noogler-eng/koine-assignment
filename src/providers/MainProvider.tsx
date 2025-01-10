import { BrowserRouter } from "react-router-dom";

export default function MainProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <BrowserRouter>{children}</BrowserRouter>;
}
