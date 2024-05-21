import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import review1Image from '../assets/1.png'; 
import review2Image from '../assets/2.png'; 
import review3Image from '../assets/3.png'; 

const HeroSection = () => {
  useEffect(() => {
    const handleMouseMove = (event) => {
      const cursor = document.querySelector(".cursor");
      gsap.to(cursor, {
        x: event.clientX,
        y: event.clientY,
        duration: 0.5,
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="relative bg-black text-white h-screen flex flex-col justify-center items-center px-4 overflow-hidden">
      <div className="cursor absolute top-0 left-0 w-32 h-32 pointer-events-none rounded-full bg-gradient-to-r from-[#F87516] to-[#5E11FF] opacity-70 mix-blend-screen"></div>
      <div className="text-center z-10">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
          <span className="text-gradient">Transform</span> Your Website <br />
          With Motion Art Effect
        </h1>
        <h2 className="text-xl md:text-3xl font-bold mb-8 leading-tight motion-text">
          Attract Your Visitors Attention With Colorful <br />
          <span className="text-gradient">Motion Art Effect</span>
        </h2>
        <p className="text-base md:text-lg max-w-2xl mx-auto motion-text mb-8">
          Unleash the power of creativity with Motion Art for Elementor - your ultimate solution for seamlessly integrating captivating animations into your website.
        </p>
        <a href="https://codecanyon.net/item/motion-art-for-elementor-wordpress-plugin/48826891" className="purchase-button" target="_blank" rel="noopener noreferrer">
          Purchase Now
        </a>
      </div>
      {/* Add Rating Images */}
      <div className="flex items-center justify-center mt-4 space-x-4">
        <div className="w-19 h-19">
          <img src={review1Image} alt="Rating 1" className="w-full h-full object-cover" />
        </div>
        <div className="w-19 h-19">
          <img src={review2Image} alt="Rating 2" className="w-full h-full object-cover" />
        </div>
        <div className="w-19 h-19">
          <img src={review3Image} alt="Rating 3" className="w-full h-full object-cover" />
        </div>
      </div>
      <div className="text-sm text-gray-300 mt-2">4.5 Score, 9 Reviews</div>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;700&family=Outfit:wght@400;700&display=swap');

        .text-gradient {
          background: linear-gradient(90deg, #F87516 0%, #5E11FF 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .bg-black {
          background-color: #000000;
        }

        .text-white {
          color: #ffffff;
        }

        .h-screen {
          height: 100vh;
        }

        .flex {
          display: flex;
        }

        .flex-col {
          flex-direction: column;
        }

        .justify-center {
          justify-content: center;
        }

        .items-center {
          align-items: center;
        }

        .px-4 {
          padding-left: 1rem;
          padding-right: 1rem;
        }

        .text-center {
          text-align: center;
        }

        .text-3xl {
          font-size: 1.875rem; /* 30px */
        }

        .md\\:text-5xl {
          font-size: 3rem; /* 48px */
        }

        .font-bold {
          font-weight: 700;
        }

        .mb-4 {
          margin-bottom: 1rem;
        }

        .leading-tight {
          line-height: 1.25;
        }

        .text-xl {
          font-size: 1.25rem; /* 20px */
        }

        .md\\:text-3xl {
          font-size: 1.875rem; /* 30px */
        }

        .mb-8 {
          margin-bottom: 2rem;
        }

        .text-base {
          font-size: 1rem; /* 16px */
        }

        .md\\:text-lg {
          font-size: 1.125rem; /* 18px */
        }

        .max-w-2xl {
          max-width: 42rem; /* 672px */
        }

        .mx-auto {
          margin-left: auto;
          margin-right: auto;
        }

        .cursor {
          position: absolute;
          width: 8rem; /* 32px */
          height: 8rem; /* 32px */
          pointer-events: none;
          border-radius: 50%;
          background: linear-gradient(90deg, #F87516 0%, #5E11FF 100%);
          opacity: 0.7;
          mix-blend-mode: screen;
          transform: translate(-50%, -50%);
        }

        .purchase-button {
          display: inline-block;
          padding: 0.75rem 1.5rem;
          font-size: 1.125rem;
          font-weight: 700;
          color: #ffffff;
          background-color: transparent;
          border: 2px solid #ffffff;
          border-radius: 0.5rem;
          text-decoration: none;
          transition: background-color 0.3s ease, color 0.3s ease;
        }

        .purchase-button:hover {
          background-color: #ffffff;
          color: #000000;
        }
      `}</style>
    </div>
  );
};

export default HeroSection;
