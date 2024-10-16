import React from "react";

const Header = () => {
  return (
    <div>
      <header className="bg-white dark:bg-gray-800 w-full px-6 py-5 z-50 fixed top-0 shadow-md dark:shadow-gray-900 transition-all transform ease-in-out duration-500">
        <div className="text-center">
          <a href="/">
            <span className="text-xl text-teal-700 dark:text-teal-400 font-semibold self-center">
              México Interactivo
            </span>
          </a>
        </div>
      </header>
    </div>
  );
};

export default Header;
