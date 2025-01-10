import { Link } from "react-router-dom";
import Button from "./Button";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-gray-100">
      <div>
        <img src="/koinx.png" alt="Logo" className="h-5 w-auto" />
      </div>
      <div className="flex space-x-4 items-center">
        <Link to="/" className="text-gray-800 hover:text-blue-600">
          Crypto Taxes
        </Link>
        <Link to="/" className="text-gray-800 hover:text-blue-600">
          Free Tools
        </Link>
        <Link to="/" className="text-gray-800 hover:text-blue-600">
          Resource Center
        </Link>
        <Button
          content="Get Started"
          bgColor="bg-gradient-to-r from-[#2870EA] to-[#1B4AEF]"
          textColor="text-white"
        />
      </div>
    </nav>
  );
}
