import React from "react";
import { Facebook, Instagram } from "lucide-react";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="pt-0">
      {/* Top Social Bar */}
      <div className="w-full bg-[#065d64] py-2 flex justify-center items-center">
        <div className="flex space-x-6">
          <a href="#" aria-label="Facebook">
            <Facebook className="w-6 h-6 text-white" />
          </a>
          <a href="#" aria-label="Instagram">
            <Instagram className="w-6 h-6 text-white" />
          </a>
        </div>
      </div>

      {/* Main Footer */}
      <div className="bg-[#00aac2] w-full px-4 py-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left items-start">

          {/* Logo + Links */}
          <div className="flex flex-col items-center md:items-start text-black">
            <img src={logo} alt="Logo" className="w-48 mb-2" />
            <a href="#" className="text-white text-sm underline mb-1">Privacy Policy</a>
            <a href="#" className="text-white text-sm underline">Terms & Conditions</a>
          </div>

          {/* License Info */}
          <div className="flex flex-col items-center md:items-start text-black">
            <h4 className="font-bold text-lg mb-1">License Information</h4>
            <p className="mb-3">🏆 PC.0005321</p>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-center md:items-start text-white">
            <h4 className="text-black font-bold text-lg mb-2">Contact</h4>
            <p className="mb-2">📞 720-757-6776</p>
            <p className="mb-1">📍 10344 Lone Lynx</p>
            <p className="text-sm">Lone Tree, Colorado 80124</p>
          </div>

          {/* Hours */}
          <div className="flex flex-col items-center md:items-start text-white">
            <h4 className="text-black font-bold text-lg mb-2">Hours of Operation</h4>
            <p className="mb-1">🕒 Monday to Friday</p>
            <p className="text-sm">8AM - 5PM</p>
          </div>
        </div>

        {/* Bottom Text */}
        <div className="mt-10 text-center italic text-black text-sm">
          Owned by Headstrong Plumbing. Designed & Powered by Mammoth for Plumbers.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
