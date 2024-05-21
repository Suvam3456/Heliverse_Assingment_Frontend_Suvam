import React from 'react';
import magicWand from '../assets/magic-wand.png';

const Features = () => {
  return (
    <section className="features bg-gray-900 text-white py-20">
      <div className="container mx-auto text-center">
        <div className="flex justify-center items-center space-x-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              Turn Your Cursor Into A Colorful Magic Wand & Charm Your Visitors
            </h2>
            <p className="mt-4 text-base md:text-lg">
              Motion Art for Elementor is a groundbreaking plugin that empowers you to effortlessly infuse your website with visually stunning motion art elements.
            </p>
            <a href="https://codecanyon.net/item/motion-art-for-elementor-wordpress-plugin/48826891" target="_blank" rel="noopener noreferrer">
              <button className="bg-gradient-to-r from-purple-600 to-orange-500 text-white px-8 py-3 mt-8 rounded-full hover:from-purple-700 hover:to-orange-600 transition-all text-base md:text-lg">
                Purchase From Envato
              </button>
            </a>
          </div>
          <img src={magicWand} alt="Magic Wand" className="w-20 h-20 md:w-28 md:h-28" />
        </div>
      </div>
    </section>
  );
};

export default Features;
