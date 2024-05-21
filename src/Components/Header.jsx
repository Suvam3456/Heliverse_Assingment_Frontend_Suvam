import React from 'react';
import logo from '../assets/logo.png';

const Header = () => {
  return (
    <header className="flex flex-wrap justify-between items-center py-4 px-8 bg-gray-900 text-white">
      <div className="flex items-center justify-start">
        <img src={logo} alt="MotionArt Logo" className="h-13 mr-4" />
        <h1 className="text-lg font-bold">MotionArt</h1>
      </div>
      <nav className="mt-4 md:mt-0">
        <button className="bg-green-500 text-white px-4 py-2 rounded">Buy Now</button>
      </nav>
    </header>
  );
};

export default Header;
