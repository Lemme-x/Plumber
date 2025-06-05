import React from "react";
import { motion } from "framer-motion";
import {
  Phone,
  ChevronDown,
  Star,
  MapPin,
  Facebook,
  Instagram,
} from "lucide-react";

import logo from "./../assets/logo.png";

const Header = () => {
  const navItems = [
    { name: "Home", href: "#" },
    { name: "About Us", href: "#" },
    { name: "Services", href: "#", hasDropdown: true },
    { name: "Service Areas", href: "#", hasDropdown: true },
    { name: "Specials", href: "#" },
    { name: "Hiring", href: "#", hasDropdown: true },
    { name: "Contact", href: "#" },
  ];

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 z-50 w-full"
      data-oid="4uzn00e"
    >
      {/* Main Navigation Header */}
      <header
        className="text-white py-3 px-4 shadow-lg"
        style={{ backgroundColor: "#00626E" }}
        data-oid="8c8h_sl"
      >
        <div className="container mx-auto" data-oid="3-kwvoz">
          <div className="flex justify-between items-center" data-oid="47bovay">
            {/* Logo Section */}
            <div className="flex items-center" data-oid="44al_3i">
              <div className="flex items-center" data-oid="llulp_8">
                <img
                  src={logo}
                  alt="Headstrong Plumbing Logo"
                  className="w-40 h-16 rounded mr-3 object-contain"
                  data-oid="ngqc25v"
                />
              </div>
            </div>

            {/* Navigation Menu */}
            <nav
              className="hidden lg:flex items-center space-x-6"
              data-oid="iyenaci"
            >
              {navItems.map((item, index) => (
                <div key={index} className="relative group" data-oid="g8shyvp">
                  <a
                    href={item.href}
                    className="flex items-center text-white hover:text-cyan-300 transition-colors font-medium text-sm"
                    data-oid="nvsf8v0"
                  >
                    {item.name}
                    {item.hasDropdown && (
                      <ChevronDown
                        className="w-4 h-4 ml-1"
                        data-oid="m:qc0q1"
                      />
                    )}
                  </a>
                </div>
              ))}
            </nav>

            {/* Phone Number Button */}
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="tel:720-757-6776"
              className="font-bold py-3 px-6 rounded-full transition-colors shadow-lg text-sm lg:text-base"
              style={{ backgroundColor: "#00aac2", color: "white" }}
              data-oid="a2_asyi"
            >
              720-757-6776
            </motion.a>
          </div>
        </div>
      </header>

      {/* Banner Section */}
      <div
        className="py-2 px-4 text-white"
        style={{ backgroundColor: "#00aac2" }}
        data-oid="whuqw8s"
      >
        <div className="container mx-auto" data-oid=".uwcbcq">
          <div className="flex justify-between items-center" data-oid="lia3m2g">
            {/* Left Side - Five Star Plumber */}
            <div className="flex items-center space-x-2" data-oid="0zri42k">
              <span
                className="font-semibold text-white text-sm"
                data-oid="u49ehlk"
              >
                Your Five Star Plumber!
              </span>
              <div className="flex text-yellow-400" data-oid="r8dvn.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-3 h-3 fill-current"
                    data-oid="gxkb.:g"
                  />
                ))}
              </div>
            </div>

            {/* Center - Location */}
            <div
              className="hidden md:flex items-center space-x-2"
              data-oid="v7ke4l4"
            >
              <MapPin className="w-4 h-4 text-white" data-oid="j6vj77n" />
              <span
                className="font-semibold text-white text-sm"
                data-oid="ttzag49"
              >
                Serving Castle Pines and Surrounding Areas
              </span>
            </div>

            {/* Right Side - Social Media */}
            <div className="flex items-center space-x-3" data-oid="hw0mo29">
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="#"
                aria-label="Follow us on Facebook"
                className="w-6 h-6 rounded-full flex items-center justify-center text-white transition-colors"
                style={{ backgroundColor: "#00626E" }}
                data-oid="uvnwios"
              >
                <Facebook className="w-3 h-3" data-oid="310c:5." />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="#"
                aria-label="Follow us on Instagram"
                className="w-6 h-6 rounded-full flex items-center justify-center text-white transition-colors"
                style={{ backgroundColor: "#00626E" }}
                data-oid="h8bl4di"
              >
                <Instagram className="w-3 h-3" data-oid="t9y7jez" />
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Header;
