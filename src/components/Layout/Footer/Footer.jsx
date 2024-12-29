import React from 'react';
import SvgIcon from '../../../../public/images/Svgicon';

const Footer = () => {
  return (
    <footer className="bg-[#2b4174] text-white py-8">
      <div className="mx-auto px-4 max-w-[1200px] flex flex-col md:flex-row justify-between gap-8">
        {/* Contact Section */}
        <div className="w-full md:w-[40%]">
          <h3 className="text-3xl font-playfair font-semibold mb-4">CONTACT US</h3>
          <p className="text-base font-semibold mb-4">
            If you have any question, please contact us at{' '}
            <span className="text-pink">demo@example.com</span>
          </p>
          <div className="flex gap-2 items-center mb-4">
            <SvgIcon iconName="location" className="w-8 h-auto" />
            <p>Your address goes here. 123, Address</p>
          </div>
          <div className="flex gap-2 ">
            <SvgIcon iconName="phone" className="w-8 h-auto" />
            <div>
              <p>+92 312 5911 875</p>
              <p>+92 312 4658 604</p>
            </div>
          </div>
        </div>

        {/* Information Section */}
        <div className="flex gap-10">
          <div className="flex flex-col w-full">
            <h3 className="sm:text-xl lg:text-2xl font-playfair font-semibold mb-4">INFORMATION</h3>
            <ul className="space-y-5">
              <li><a href="#" className="hover:text-pink transition">About Us</a></li>
              <li><a href="#" className="hover:text-pink transition">Delivery Information</a></li>
              <li><a href="#" className="hover:text-pink transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-pink transition">Terms & Conditions</a></li>
            </ul>
          </div>

          {/* Account Section */}
          <div className="flex flex-col w-full">
            <h3 className="sm:text-xl lg:text-2xl font-playfair font-semibold mb-4">ACCOUNT</h3>
            <ul className="space-y-5">
              <li><a href="#" className="hover:text-pink transition">My Account</a></li>
              <li><a href="#" className="hover:text-pink transition">Order History</a></li>
              <li><a href="#" className="hover:text-pink transition">Wish List</a></li>
              <li><a href="#" className="hover:text-pink transition">Newsletter</a></li>
            </ul>
          </div>
        </div>
      </div>
      <hr className='justify-self-center my-5 w-[70%]' />
      <div className="flex flex-col md:flex-row justify-center items-center mt-6">
        <p className="text-white">&copy; {new Date().getFullYear()} Decent Bakery. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
