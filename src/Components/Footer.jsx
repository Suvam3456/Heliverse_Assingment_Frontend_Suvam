import React from 'react';
import browserIcons from '../assets/chrome-icon.png'; 
import thumbImage from '../assets/thumb.png'; 
import moonImage from '../assets/moon.png'; 
import lightningImage from '../assets/lightning.png'; 

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto text-center">
        <h3 className="text-2xl md:text-3xl font-bold">Supported by All Popular Browsers</h3>
        <div className="flex justify-center mt-4">
          <img src={browserIcons} alt="Browser Icons" className="w-50 h-30 mx-2" /> 
        </div>
        <p className="mt-4 text-lg">Rest assured, Motion Art is designed to be compatible with all major web browsers.</p>

        <div className="mt-11"> 
          <p className="text-3xl md:text-4xl font-bold text-white">An All-Round Plugin With Powerful Features</p>
          <p className="mt-4 text-lg md:text-xl text-gray-300">Whether you're a seasoned web designer or just starting out, Motion Art for Elementor seamlessly integrates with the Elementor platform, providing you with a seamless and intuitive experience.</p>
        </div>

        <div className="mt-10 flex flex-wrap justify-center space-y-8 md:space-y-0 md:space-x-8">
          <div className="bg-gray-800 p-6 rounded w-full md:w-80 flex flex-col items-center hover:bg-gray-700 transition duration-300 ease-in-out mx-2">
            <img src={thumbImage} alt="Light Weight" className="w-4/5 h-auto mb-4" /> 
            <div className="text-center">
              <h3 className="text-xl font-bold">Light Weight</h3>
              <p className="mt-2 text-gray-400">Motion Art for Elementor is designed to be lightweight.</p>
            </div>
          </div>
          <div className="bg-gray-800 p-6 rounded w-full md:w-80 flex flex-col items-center hover:bg-gray-700 transition duration-300 ease-in-out mx-2">
            <img src={moonImage} alt="100% Responsive" className="w-4/5 h-auto mb-4" /> 
            <div className="text-center">
              <h3 className="text-xl font-bold">100% Responsive</h3>
              <p className="mt-2 text-gray-400">Create a consistent visual experience across all devices.</p>
            </div>
          </div>
          <div className="bg-gray-800 p-6 rounded w-full md:w-80 flex flex-col items-center hover:bg-gray-700 transition duration-300 ease-in-out mx-2">
            <img src={lightningImage} alt="User Friendly Interface" className="w-4/5 h-auto mb-4" /> 
            <div className="text-center">
              <h3 className="text-xl font-bold">User Friendly Interface</h3>
              <p className="mt-2 text-gray-400">Ensure a smooth experience for both applicants and administrators.</p>
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-center space-x-4">
          <a href="/documentation" className="text-sm text-gray-400 hover:text-white transition duration-300 ease-in-out">Documentation</a>
          <a href="/support" className="text-sm text-gray-400 hover:text-white transition duration-300 ease-in-out">Support</a>
        </div>
        <div className="mt-8 text-sm text-gray-400">© 2023 Copywrite. All rights reserved by QodeMatrix</div>
      </div>
    </footer>
  );
};

export default Footer;
