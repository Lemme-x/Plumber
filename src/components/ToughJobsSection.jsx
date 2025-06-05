import React from "react";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import toughjobs from "./../assets/toughjobs.webp"; // TODO: Resize this image to approx. 192x192px (or 384x384px for retina displays)

const ToughJobsSection = () => {
  return (
    <section
      className="py-16 px-4"
      style={{ backgroundColor: "#00aac2" }}
      data-oid="22okl40"
    >
      <div className="container mx-auto" data-oid="uhjqr3g">
        <div
          className="grid lg:grid-cols-2 gap-12 items-center"
          data-oid="1o7qh9a"
        >
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
            data-oid="6vqy2mw"
          >
            <div className="mb-8" data-oid="wpq8fk:">
              <div
                className="w-48 h-48 mx-auto lg:mx-0 rounded-lg overflow-hidden"
                data-oid="zkp97eg"
              >
                <img
                  src={toughjobs}
                  alt="Tough plumbing jobs"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  data-oid="aemnq1w"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
            data-oid="-qe5_4x"
          >
            <h2
              className="text-3xl lg:text-4xl font-bold text-white mb-8 leading-tight"
              data-oid="8.smerf"
            >
              Built for Tough Jobs. Trusted by Castle Pines Homes
            </h2>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="button"
              onClick={() => (window.location.href = "tel:720-757-6776")}
              className="inline-flex items-center text-white font-bold py-4 px-8 rounded-full text-lg border-2 border-black shadow-xl bg-[#00aac2] transition-all duration-300"
              style={{ color: "white" }}
              data-oid="v179nrd"
            >
              <Phone className="w-5 h-5 mr-2" data-oid="0mtbps1" />
              CALL NOW! | 720-757-6776
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ToughJobsSection;
