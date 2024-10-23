import Link from "next/link";
import { FaMap, FaUser } from "react-icons/fa"; // Importing icons from FontAwesome

export default function Header() {
  return (
    <header className="bg-white dark:bg-gray-800 w-full px-6 py-5 sticky top-0 shadow-md dark:shadow-gray-900">
      <div className="flex justify-between items-center">
        {/* Left Icon */}
        <Link href={"/interactive-map"}>
          <FaMap className="text-teal-700 dark:text-teal-400 text-xl" />
        </Link>

        {/* Centered Link */}
        <div className="text-center">
          <Link
            className="text-xl text-teal-700 dark:text-teal-400 font-semibold"
            href={"/"}
          >
            México Interactivo
          </Link>
        </div>

        {/* Right Icon */}
        <Link href={"/"}>
          <FaUser className="text-teal-700 dark:text-teal-400 text-xl" />
        </Link>
      </div>
    </header>
  );
}
