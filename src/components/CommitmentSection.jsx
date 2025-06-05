import React from "react";

const CommitmentSection = () => {
  return (
    <section className="py-8 px-2 bg-white w-full">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Left side - Group Photo */}
        <div className="flex flex-col items-center">
          <img
            src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
            alt="Professional plumbing team"
            className="rounded-lg shadow-lg w-full max-w-md object-cover"
          />
        </div>

        {/* Right side - Content */}
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-3xl md:text-4xl font-bold text-[#00626E] text-center md:text-left mb-4" style={{ fontFamily: "Montserrat, sans-serif" }}>
            Our Commitment To You
          </h2>
          <div className="text-black text-base md:text-[16px] mb-2 text-center md:text-left" style={{ fontFamily: "Open Sans, sans-serif" }}>
            We understand how disruptive plumbing issues can be, which is why we prioritize working around your schedule to reduce inconvenience. Our mission is simple: resolve the issue correctly on the first visit and leave your space as clean as we found it.
          </div>
          <div className="italic text-[#222] text-base md:text-[16px] mb-2 text-center md:text-left" style={{ fontFamily: "Open Sans, sans-serif" }}>
            With upfront pricing, no hidden fees and our honest service - you'll always know what to expect.
          </div>
          <div className="text-black text-base md:text-[16px] mb-2 text-center md:text-left" style={{ fontFamily: "Open Sans, sans-serif" }}>
            Our skilled plumbers deliver dependable plumbing solutions so you can have peace of mind about your plumbing system. Whether it’s a leaky faucet, a clogged drain, or a major pipe replacement, we’ve got you covered. Don’t wait for small plumbing problems to become big ones—contact us today!
          </div>
          <a
            href="#about"
            className="text-[#0062A1] font-bold mt-4 mb-6 text-base md:text-lg"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            More About Us &gt;&gt;
          </a>
          <img
            src="https://cdn.pixabay.com/photo/2017/01/31/13/14/auto-2029591_1280.png"
            alt="Plumbing van"
            className="w-40 mx-auto mb-4"
            style={{ maxWidth: "160px" }}
          />
          <a
            href="tel:720-757-6776"
            className="bg-[#00aac2] text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg border-2 border-[#067a89] transition-all duration-200 hover:scale-105"
            style={{
              fontFamily: "Montserrat, sans-serif",
              boxShadow: "0 4px 12px 0 rgba(0,0,0,0.15)",
              display: "inline-block",
            }}
          >
            CALL NOW! | 720-757-6776
          </a>
        </div>
      </div>
    </section>
  );
};

export default CommitmentSection;