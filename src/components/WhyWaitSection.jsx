import React from "react";
import { motion } from "framer-motion";

const WhyWaitSection = () => {
  return (
    <section className="py-12 px-4 bg-white">
      <div className="w-full max-w-3xl mx-auto flex flex-col items-center">
        <h2 className="text-4xl md:text-5xl font-bold text-[#00626E] text-center mb-2">
          Why Wait to Call?
        </h2>
        <p className="text-2xl font-semibold text-[#00626E] text-center mb-6">
          We really can't think of a good reason either.
        </p>
        <motion.a
          href="tel:720-757-6776"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-[#00aac2] text-white font-bold py-3 px-10 rounded-full text-xl shadow-lg border-2 border-[#067a89] transition-all duration-200"
          style={{
            boxShadow: "0 4px 12px 0 rgba(0,0,0,0.15)",
          }}
        >
          CALL NOW! | 720-757-6776
        </motion.a>
      </div>
    </section>
  );
};

export default WhyWaitSection;
