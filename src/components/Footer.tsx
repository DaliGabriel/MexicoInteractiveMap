import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="text-center p-4">
        <p>&copy; {currentYear}</p>
      </footer>
    </>
  );
};

export default Footer;
