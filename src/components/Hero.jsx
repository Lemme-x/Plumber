import React from "react";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";

const Hero = () => {
  return (
    <section
      className="px-4 pt-24 pb-16"
      style={{
        background: "linear-gradient(135deg, #00626E 0%, #00aac2 100%)",
      }}
      data-oid="nk1-.9-"
    >
      <div className="container mx-auto" data-oid="p0b3-v:">
        <div
          className="grid lg:grid-cols-2 gap-8 items-start"
          data-oid="3w8o3z9"
        >
          {/* Left side - Content */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-white"
            data-oid="p70i1t9"
          >
            <h1
              className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 leading-tight"
              data-oid=".f:bx0j"
            >
              RELIABLE PLUMBING SOLUTIONS, ANYTIME YOU NEED!
            </h1>
            <p
              className="text-base lg:text-lg mb-6 opacity-90 leading-relaxed"
              data-oid="v7yccc_"
            >
              Plumbing troubles shouldn't disrupt your routine – not when our
              expert plumbers are equipped to handle any challenge. With
              Headstrong Plumbing, you're choosing experienced professionals who
              specialize in residential and commercial plumbing solutions to
              keep your property running smoothly.
            </p>
            <p
              className="text-lg lg:text-xl font-semibold mb-6"
              data-oid="26e6wmd"
            >
              Plumbers Serving Castle Pines and Surrounding Areas.
            </p>

            {/* Plumbing Image */}
            <div
              className="rounded-lg h-48 lg:h-64 w-full mb-6 overflow-hidden shadow-xl"
              data-oid="gi:w8yx"
            >
              <img
                src="https://images.unsplash.com/photo-1621905251918-48416bd8575a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Professional plumber working in a modern kitchen"
                className="w-full h-full object-cover"
                data-oid="_r0.l9_"
              />
            </div>
          </motion.div>

          {/* Right side - Contact Form */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-gray-800 p-6 lg:p-8 rounded-2xl shadow-2xl mt-8 lg:mt-0"
            style={{ backgroundColor: "#00aac2" }}
            data-oid="xtd_iu:"
          >
            <h3
              className="text-xl lg:text-2xl font-bold text-center mb-6 text-white"
              data-oid="0v4:nes"
            >
              Stronger Solutions. Faster Fixes. Call Now!
            </h3>

            <form className="space-y-4" data-oid="yf03rrg">
              <input
                type="text"
                placeholder="Full Name*"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white text-gray-800"
                data-oid="q_adp._"
              />

              <input
                type="email"
                placeholder="Email*"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white text-gray-800"
                data-oid="y5syk84"
              />

              <input
                type="tel"
                placeholder="Phone*"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white text-gray-800"
                data-oid="ux5ibsz"
              />

              <textarea
                placeholder="Anything you'd like us to know?"
                rows="3"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white text-gray-800 resize-none"
                data-oid="c1.cs3m"
              ></textarea>

              <div className="flex items-start space-x-2" data-oid="e4j7677">
                <input
                  type="checkbox"
                  id="terms"
                  className="mt-1 flex-shrink-0"
                  data-oid="m2grg.l"
                />

                <label
                  htmlFor="terms"
                  className="text-xs text-white leading-relaxed"
                  data-oid="qsyq8im"
                >
                  I agree to terms & conditions provided by the company. By
                  providing my phone number, I agree to receive text messages
                  from the business.
                </label>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full text-white font-bold py-4 rounded-lg transition-colors text-lg"
                style={{ backgroundColor: "#00626E" }}
                data-oid="fm1rqe6"
              >
                GET MY PLUMBING FIXED!
              </motion.button>
            </form>

            <div className="text-center mt-6" data-oid="0fa_f4r">
              <p
                className="text-lg font-bold text-white mb-3"
                data-oid="exso.o4"
              >
                Call Headstrong Plumbing Today!
              </p>
              <div
                className="inline-block bg-white px-6 py-3 rounded-full shadow-lg"
                data-oid="lp7zxta"
              >
                <p
                  className="text-xl font-bold"
                  style={{ color: "#00626E" }}
                  data-oid="genw.x2"
                >
                  720-757-6776
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom section */}
        <div className="text-center mt-16" data-oid="ct4zygh">
          <h2
            className="text-2xl lg:text-3xl xl:text-4xl font-bold text-white mb-8"
            data-oid="bbgr:ab"
          >
            You'll Never Need to Look for a Plumber Again!
          </h2>
          <motion.a
            href="tel:720-757-6776"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center text-white font-bold py-4 px-8 rounded-full text-lg border-2 border-white hover:bg-white transition-all duration-300 shadow-xl"
            style={{ color: "white" }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "white";
              e.target.style.color = "#00626E";
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "transparent";
              e.target.style.color = "white";
            }}
            data-oid="flzozyy"
          >
            <Phone className="w-5 h-5 mr-2" data-oid="rgqpr0g" />
            CALL NOW! | 720-757-6776
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
