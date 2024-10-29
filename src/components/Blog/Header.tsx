"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation"; // Importing useRouter for programmatic navigation
import { FaBars, FaMap } from "react-icons/fa"; // Importing icons from FontAwesome

export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const router = useRouter();

  // Toggle the dropdown visibility
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  // Handle category selection
  const handleCategorySelect = (category:string) => {
    // Update the URL with the selected category as a query parameter
    router.push(`/?category=${encodeURIComponent(category)}`);
    setIsDropdownOpen(false); // Close dropdown after selection
  };

  return (
    <header className="bg-white dark:bg-gray-800 w-full px-6 py-5 sticky top-0 shadow-md dark:shadow-gray-900 z-50">
      <div className="flex justify-between items-center relative">
        {/* Left Icon */}
        <Link href={"/interactive-map"}>
          <FaMap
            className="text-teal-700 dark:text-teal-400 text-xl"
            title="Explore Interactive Map"
          />
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

        {/* Right Icon with Dropdown Menu */}
        <div className="relative">
          <button onClick={toggleDropdown} className="focus:outline-none">
            <FaBars className="text-teal-700 dark:text-teal-400 text-xl" />
          </button>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div
              className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-700 rounded-lg shadow-lg py-2"
              onMouseLeave={() => setIsDropdownOpen(false)} // Close on mouse leave (optional for desktop)
            >
              {/* Dropdown Header */}
              <div className="px-4 py-2 text-gray-600 dark:text-gray-300 font-semibold">
                Categories
              </div>

              {/* Divider Line */}
              <div className="border-t border-gray-300 dark:border-gray-600"></div>

              <button
                onClick={() => handleCategorySelect("Travel & Activities")}
                className="block w-full text-left px-4 py-2 text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600"
              >
                Travel & Activities
              </button>
              <button
                onClick={() => handleCategorySelect("News & Updates")}
                className="block w-full text-left px-4 py-2 text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600"
              >
                News & Updates
              </button>
              <button
                onClick={() => handleCategorySelect("Culture")}
                className="block w-full text-left px-4 py-2 text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600"
              >
                Culture
              </button>
              <button
                onClick={() => handleCategorySelect("Sports")}
                className="block w-full text-left px-4 py-2 text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600"
              >
                Sports
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}