import React from "react";
import { motion } from "framer-motion";

const ContactForm = () => {
  return (
    <section
      className="min-h-screen flex flex-col justify-center items-center bg-white px-4"
      style={{ backgroundColor: "#fff" }}
    >
      <div className="w-full max-w-xl mx-auto flex flex-col items-center">
        <h2 className="text-4xl md:text-5xl font-bold text-[#00626E] text-center mb-2">
          Need a Plumber?<br />
          Just Send Us a Note!
        </h2>
        <p className="text-xl font-semibold text-[#00626E] text-center mb-8">
          We're always willing to help!
        </p>
        <form className="w-full flex flex-col gap-4 items-center">
          <input
            type="text"
            placeholder="Full Name*"
            className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00aac2] focus:border-transparent shadow-md text-lg"
          />
          <input
            type="email"
            placeholder="Email*"
            className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00aac2] focus:border-transparent shadow-md text-lg"
          />
          <input
            type="tel"
            placeholder="Phone*"
            className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00aac2] focus:border-transparent shadow-md text-lg"
          />
          <textarea
            placeholder="Anything you'd like us to know?"
            rows={2}
            className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00aac2] focus:border-transparent shadow-md text-lg resize-none"
          />
          <div className="flex items-start w-full mt-2">
            <input
              type="checkbox"
              id="contact-terms"
              className="mt-1 mr-2"
            />
            <label
              htmlFor="contact-terms"
              className="text-sm text-gray-700 leading-relaxed"
            >
              I agree to terms & conditions provided by the company. By providing my phone number, I agree to receive text messages from the business.
            </label>
          </div>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full bg-[#00aac2] text-white font-bold py-4 rounded-lg text-2xl shadow-[0_8px_24px_0_rgba(0,0,0,0.25)] mt-6"
            style={{ boxShadow: "0 8px 24px 0 rgba(0,0,0,0.25)" }}
          >
            GET MY PLUMBING FIXED!
          </motion.button>
        </form>
        <motion.a
          href="tel:720-757-6776"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-12 inline-block bg-[#00aac2] text-white font-bold py-3 px-10 rounded-full text-xl shadow-lg"
          style={{
            boxShadow: "4px 8px 16px 0 rgba(0,0,0,0.15)",
            border: "2px solid #067a89",
          }}
        >
          CALL NOW! | 720-757-6776
        </motion.a>
      </div>
    </section>
  );
};

export default ContactForm;