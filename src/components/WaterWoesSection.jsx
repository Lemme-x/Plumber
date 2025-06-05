import React from "react";
import { motion } from "framer-motion";
// TODO: Convert mascot.png to WebP and resize to approx. 192x192px (or 384x384px for retina displays)
import mascot from "./../assets/mascot.png";

const WaterWoesSection = () => {
  return (
    <section className="py-16 px-4" style={{ backgroundColor: "#00aac2" }}>
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <div className="w-60 h-60 mx-auto lg:mx-0 rounded-lg overflow-hidden mb-8">
              <img
                src={mascot}
                alt="Headstrong Plumbing Mascot"
                className=""
                loading="lazy"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-8">
              Don't Wait on Water Woes—
              <br />
              Call Headstrong Today!
            </h2>
            <motion.a
              href="tel:720-757-6776"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 shadow-md"
              style={{
                backgroundColor: "#00aac2",
                border: "2px solid black",
              }}
            >
              CALL NOW! | 720-757-6776
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WaterWoesSection;
