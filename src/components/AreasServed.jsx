import React from "react";
import { motion } from "framer-motion";

const AREAS = [
  "Lone Tree",
  "Highland Ranch",
  "Heritage Hills",
  "Montecito",
  "Castle Pines",
  "Castle Rock",
  "Ridge Gate",
  "The Meadows",
];

const AreasServed = () => {
  return (
    <section
      className="min-h-screen w-full flex flex-col items-center justify-start py-12 px-4 pb-24"
      style={{
        background: "radial-gradient(circle at 50% 0%, #06818e 0%, #00727e 100%)",
      }}
    >
      <div className="w-full max-w-7xl flex flex-col items-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
          Areas We Serve
        </h2>
        <p className="text-2xl font-semibold text-white text-center mb-6">
          We’re local, reliable, and ready to assist with all your plumbing needs!
        </p>
        <motion.a
          href="tel:720-757-6776"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mb-10 inline-block bg-[#00aac2] text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg border-2 border-[#067a89]"
        >
          CALL NOW! | 720-757-6776
        </motion.a>
        {/* Areas grid */}
        <div className="w-full flex flex-col items-center mb-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-2 gap-x-8 text-white text-xl font-semibold text-center">
            {AREAS.map((area, idx) => (
              <div key={idx}>{area}</div>
            ))}
          </div>
        </div>
        {/* Map */}
        <div className="w-full flex justify-center">
          <div className="rounded-lg overflow-hidden shadow-xl border-4 border-white">
            <iframe
              title="Service areas map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3068.553917367799!2d-104.8871466846237!3d39.54496397947809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c8d1b2e9e7b7b%3A0x7e7e7e7e7e7e7e7e!2sLone%20Tree%2C%20CO!5e0!3m2!1sen!2sus!4v1680000000000!5m2!1sen!2sus"
              width="1200"
              height="600"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AreasServed;