import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#2b4174] text-white py-4">
      <div className="mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-center items-center">
          <p className="text-white">&copy; {new Date().getFullYear()} Decent Bakery. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
