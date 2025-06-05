import React from "react";
import { motion } from "framer-motion";

const CommitmentSection = () => {
  return (
    <section className="py-16 px-4 bg-white" data-oid="inx4p-k">
      <div className="container mx-auto" data-oid="6xhrge0">
        <div
          className="grid lg:grid-cols-2 gap-12 items-center"
          data-oid="39y2t6r"
        >
          {/* Left side - Group Photo */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
            data-oid="zt5h4mp"
          >
            <div
              className="rounded-lg overflow-hidden shadow-xl"
              data-oid="uqz3ik-"
            >
              <img
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Professional plumbing team"
                className="w-full h-full object-cover"
                data-oid="c._26ah"
              />
            </div>
          </motion.div>

          {/* Right side - Content */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{ color: "#00626E" }}
            data-oid="g.7485l"
          >
            <h2
              className="text-3xl lg:text-4xl font-bold mb-8"
              data-oid="0-vbc5g"
            >
              Our Commitment to You
            </h2>
            <div className="space-y-4 mb-8" data-oid="sk.mnrx">
              <p className="text-lg" data-oid="7hd_cz5">
                We understand that plumbing problems can happen at any time,
                which is why we offer 24/7 emergency services. Our team is
                dedicated to providing fast, reliable solutions to get your
                plumbing back to working condition.
              </p>
              <p className="text-lg" data-oid="b4ldkts">
                With years of experience in the plumbing industry, we have the
                expertise to handle any plumbing challenge, from simple repairs
                to complex installations.
              </p>
              <p className="text-lg" data-oid="50yx7.c">
                All of our work comes backed by our satisfaction guarantee, and
                we use only the highest quality materials and equipment to
                ensure lasting results.
              </p>
              <p className="text-lg" data-oid="insmm5b">
                We're committed to providing transparent pricing with no hidden
                fees, so you know exactly what to expect before we begin any
                work.
              </p>
            </div>
            <motion.a
              href="tel:720-757-6776"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300"
              style={{
                backgroundColor: "#00aac2",
                boxShadow:
                  "0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 25px 100px -12px rgba(0, 0, 0, 0.5)",
              }}
              data-oid="i5yf9ds"
            >
              CALL NOW: 720-757-6776
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CommitmentSection;
