import { currentYear } from "@/utils/CurrentYear";
import React from "react";

const Footer = () => {

  return (
    <>
      <footer className="text-center p-4">
        <p>&copy; {currentYear}</p>
      </footer>
    </>
  );
};

export default Footer;
