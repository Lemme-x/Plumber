import React from "react";
import { motion } from "framer-motion";
import logo from '../assets/toughjobs.webp';


const HeadstrongSection = () => {
  return (
    <section
      className="py-16 px-4"
      style={{
        background: "radial-gradient(circle at 50% 0%, #00aac2 0%, #009cb3 100%)",
        minHeight: "320px",
      }}
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-10">
        <img
          src={logo}
          alt="Logo"
          className="w-72 max-w-full mb-6 md:mb-0 md:mr-8"
          style={{ minWidth: "220px" }}
        />
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center md:text-left mb-6">
            Not Just Strong—Headstrong
            <br />
            Plumbing Strong
          </h2>
          <a
            href="tel:720-757-6776"
            className="bg-[#00aac2] text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg border-2 border-[#067a89] transition-all duration-200 hover:scale-105"
            style={{
              boxShadow: "0 4px 12px 0 rgba(0,0,0,0.15)",
            }}
          >
            CALL NOW! | 720-757-6776
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeadstrongSection;
