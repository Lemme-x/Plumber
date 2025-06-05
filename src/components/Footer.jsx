import React from "react";
import { Facebook, Instagram } from "lucide-react";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#00aac2" }} className="pt-0">
      {/* Top Social Bar */}
      <div className="w-full bg-[#067a89] py-2 flex justify-center items-center">
        <div className="flex space-x-6">
          <a href="#" aria-label="Facebook">
            <Facebook className="w-7 h-7 text-white" />
          </a>
          <a href="#" aria-label="Instagram">
            <Instagram className="w-7 h-7 text-white" />
          </a>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start text-center md:text-left">
          {/* Logo & License */}
          <div className="flex flex-col items-center md:items-start">
            <img src={logo} alt="Headstrong Plumbing Logo" className="w-56 mb-2" />
            <div className="font-bold text-lg text-[#1a5c66] mt-2 mb-2">License Information</div>
            <div className="flex items-center text-[#1a5c66] mb-4">
              <span className="mr-2">🏆</span> PC.0005321
            </div>
            <a href="#" className="text-white underline text-sm mb-1">Privacy Policy</a>
            <a href="#" className="text-white underline text-sm">Terms & Conditions</a>
          </div>

          {/* Contact */}
          <div>
            <div className="font-bold text-lg text-[#1a5c66] mb-2">Contact</div>
            <div className="flex items-center justify-center md:justify-start text-white mb-2">
              <span className="mr-2">📞</span> 720-757-6776
            </div>
            <div className="flex items-center justify-center md:justify-start text-white mb-2">
              <span className="mr-2">📍</span> 10344 Lone Lynx<br />
            </div>
            <div className="text-white text-sm">
              Lone Tree, Colorado 80124
            </div>
          </div>

          {/* Hours of Operation */}
          <div>
            <div className="font-bold text-lg text-[#1a5c66] mb-2">Hours of Operation</div>
            <div className="flex items-center justify-center md:justify-start text-white mb-1">
              <span className="mr-2">●</span> Monday to Friday
            </div>
            <div className="text-white text-sm text-center md:text-left">8AM - 5PM</div>
          </div>
        </div>
        {/* Bottom Bar */}
        <div className="mt-10 text-center text-[#1a5c66] italic text-base">
          Owned by Headstrong Plumbing. Designed & Powered by Mammoth for Plumbers.
        </div>
      </div>
    </footer>
  );
};

export default Footer;