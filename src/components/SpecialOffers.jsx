import React from "react";
import logo from '../assets/logo.png';

const SpecialOffers = () => {
  return (
    <section
      className="py-12 px-4"
      style={{
        background: "radial-gradient(circle at 50% 0%, #06818e 0%, #00727e 100%)",
      }}
    >
      <div className="max-w-2xl mx-auto flex flex-col items-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-2">
          Special Offers
        </h2>
        <p className="text-xl font-semibold text-white text-center mb-8">
          Claim Now! Keep These in Mind for When You Need Us!
        </p>
        <div className="bg-white border-dashed border-4 border-[#00aac2] rounded-lg p-8 flex flex-col items-center w-full max-w-md mx-auto">
          <img
            src={logo} 
            alt="Logo" 
            className="w-48 mx-auto mb-2"
            style={{ marginTop: "-2rem" }}
          />
          <div className="text-4xl font-bold text-[#06818e] mb-2 mt-2">
            10% OFF
          </div>
          <div className="text-xl font-bold text-[#06818e] mb-2">
            For New Customers
          </div>
          <div className="text-sm italic text-gray-700 mb-6 text-center">
            Cannot be combined with any other offer or discount.
            <br />
            Limit one per household.
          </div>
          <a
            href="tel:720-757-6776"
            className="bg-[#00aac2] text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg border-2 border-[#067a89] transition-all duration-200 hover:scale-105"
            style={{
              boxShadow: "0 4px 12px 0 rgba(0,0,0,0.15)",
            }}
          >
            Claim Now!
          </a>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
