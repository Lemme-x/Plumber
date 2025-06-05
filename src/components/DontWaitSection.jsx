import React from "react";
import { motion } from "framer-motion";

const DontWaitSection = () => {
  return (
    <section
      className="bg-white py-16 px-4"
      style={{ color: "#02444d" }}
      data-oid="qnyc4u8"
    >
      <div className="container mx-auto text-center" data-oid="kvwmclm">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          data-oid="_:01pv7"
        >
          <h2
            className="text-3xl lg:text-4xl font-bold mb-8"
            data-oid="_6:lmy0"
          >
            Plumbing Problems? Don't Wait - Call Us Today!
          </h2>
          <motion.a
            href="tel:720-757-6776"
            target=""
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block text-white font-bold py-4 px-8 text-center transition-all duration-300 border-2 border-solid rounded-full shadow-2xl hover:shadow-3xl transform hover:-translate-y-1"
            style={{
              backgroundColor: "#00aac2",
              borderColor: "black",
              boxShadow:
                "0 8px 20px rgba(0, 170, 194, 0.4), 0 4px 12px rgba(0, 0, 0, 0.15)",
              borderRadius: "150px",
            }}
            aria-label="CALL NOW! | 720-757-6776"
            data-oid="sjj9uyt"
          >
            
            <span
              className="flex items-center justify-center"
              data-oid="ticmhbu"
            >
              <span className="mr-1" data-oid="73ow.5_"></span>
              <span className="font-semibold" data-oid="f:f1tfg">
                CALL NOW! | 720-757-6776
              </span>
              <span className="ml-1" data-oid="nq0m9e-"></span>
            </span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default DontWaitSection;
