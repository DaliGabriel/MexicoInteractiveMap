import React from "react";

const Header = () => {
  return (
    <div>
      <header className="bg-white w-full px-6 py-5 z-50 fixed top-0 shadow-md transition-all transform ease-in-out duration-500">
        <div className=" text-center">
          <a href="/">
            <span className="text-xl text-teal-700 font-semibold self-center">
              México Interactivo
            </span>
          </a>
        </div>
        {/* <nav
            id="menu"
            className="order-last md:order-none items-center flex-grow w-full md:w-auto md:flex hidden mt-2 md:mt-0"
          >
            <a
              href="/about"
              className="block mt-4 md:inline-block md:mt-0 font-medium text-slate-700 hover:text-teal-600 text-base mr-4"
            >
              About
            </a>
            <a
              href="/tags"
              className="block mt-4 md:inline-block md:mt-0 font-medium text-slate-700 hover:text-teal-600 text-base mr-4"
            >
              Tag List
            </a>
            <a
              href="https://github.com/daflh/vredeburg"
              target="_blank"
              rel="noopener"
              className="block mt-4 md:inline-block md:mt-0 font-medium text-slate-700 hover:text-teal-600 text-base mr-4"
            >
              GitHub
            </a>
          </nav> */}
        {/* <form
            id="search"
            action="/search"
            className="order-last sm:order-none flex-grow items-center justify-end hidden sm:block mt-6 sm:mt-0"
          >
            <label className="visually-hidden" htmlFor="header-searchbox">
              Search here ...
            </label>
            <input
              type="text"
              id="header-searchbox"
              name="q"
              placeholder="Search here ..."
              className="w-full sm:max-w-xs bg-slate-200 border border-transparent float-right focus:bg-white focus:border-slate-300 focus:outline-none h-8 p-4 placeholder-slate-500 rounded text-slate-700 text-sm"
            />
          </form> */}
        {/* <div
            id="menu-toggle"
            className="flex items-center md:hidden text-slate-700 hover:text-teal-600 cursor-pointer sm:ml-6"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="feather feather-menu"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </div> */}
      </header>
    </div>
  );
};

export default Header;
