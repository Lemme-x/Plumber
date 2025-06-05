import React from "react";
import { motion } from "framer-motion";

const NeverLookSection = () => {
  return (
    <section className="bg-teal-600 text-white py-16 px-4">
      <div className="container mx-auto text-center">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            You'll Never Need to Look for a Plumber Again!
          </h2>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-yellow-400 text-black font-bold py-4 px-8 rounded-lg hover:bg-yellow-300 transition-colors"
          >
            CALL NOW: 720-470-2716
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default NeverLookSection;
