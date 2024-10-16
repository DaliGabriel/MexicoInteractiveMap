import { currentYear } from "@/utils/CurrentYear";
import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="mt-20 px-10 py-8 bg-slate-200 dark:bg-gray-800">
        <div className="max-w-5xl mx-auto text-slate-700 dark:text-slate-300 text-center">
          © {currentYear}{" "}
          <a
            href="/"
            className="font-medium hover:text-slate-900 dark:hover:text-slate-100"
            target="_blank"
            rel="noopener"
          >
            México interactivo
          </a>
          .
        </div>
      </footer>
    </>
  );
};

export default Footer;
