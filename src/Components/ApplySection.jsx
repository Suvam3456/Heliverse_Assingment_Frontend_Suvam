import React from 'react';
import applyOnPage from '../assets/Applyonepage.png'; 
import applyOnSection from '../assets/Applyonsection.png';

const ApplySection = () => {
  return (
    <section className="apply-section bg-gray-900 text-white py-20">
      <style>
        {`
          .card {
            background-color: #4B5563;
            padding: 2rem;
            border-radius: 1.5rem;
            width: 30rem;
            transition: transform 0.3s ease;
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
            margin-right: 2rem; /* Add margin between cards */
          }

          .card:last-child {
            margin-right: 0; /* Remove margin from the last card */
          }

          .card:hover {
            transform: translateY(-10px);
          }

          @media (max-width: 768px) {
            .card {
              width: calc(50% - 2rem); /* Adjust card width for smaller screens */
              margin-right: 0;
              margin-bottom: 2rem;
            }
          }

          @media (max-width: 480px) {
            .card {
              width: 100%; /* Adjust card width for even smaller screens */
            }
          }
        `}
      </style>
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10">Apply On Any Section Or Enable For Whole Page</h2>
        <div className="flex flex-wrap justify-center items-center space-x-10">
          <div className="card">
            <img src={applyOnSection} alt="Apply on Section" className="mx-auto mb-4" />
            <h3 className="text-xl font-bold">Apply On Section</h3>
            <p className="mt-2">Apply on section is a game-changer, offering an unparalleled way to manage applications directly from your website.</p>
          </div>
          <div className="card">
            <img src={applyOnPage} alt="Apply on Page" className="mx-auto mb-4" />
            <h3 className="text-xl font-bold">Apply On Page</h3>
            <p className="mt-2">Take your website to new heights with Motion Art for Elementor. Embrace the power of motion and animation.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplySection;
