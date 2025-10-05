import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar({ openModal }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("Home");
  const [scrolled, setScrolled] = useState(false);

  const menuItems = [
    { name: "Home", link: "#home" },
    { name: "Courses", link: "#courses" },
    { name: "Features", link: "#features" },
    { name: "Testimonials", link: "#testimonials" },
    { name: "Contact", link: "#contact" },
  ];

  // Change navbar style when scrolling
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll and highlight active link
  const handleNavClick = (name, link) => {
    setActive(name);
    setMenuOpen(false);
    const section = document.querySelector(link);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "backdrop-blur-lg bg-white/70 shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <h1 className="text-2xl md:text-3xl font-extrabold text-blue-600 tracking-tight">
          IELTS<span className="text-gray-800">Institute</span>
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          {menuItems.map((item) => (
            <button
              key={item.name}
              onClick={() => handleNavClick(item.name, item.link)}
              className={`relative text-[15px] font-medium transition-colors duration-300 ${
                active === item.name
                  ? "text-blue-600"
                  : "text-gray-700 hover:text-blue-500"
              }`}
            >
              {item.name}
              {active === item.name && (
                <motion.div
                  layoutId="underline"
                  className="absolute left-0 right-0 -bottom-1 h-[2px] bg-blue-600 rounded-full"
                />
              )}
            </button>
          ))}
          <button
            onClick={() => openModal("Enroll")}
            className="bg-blue-600 text-white px-5 py-2 rounded-xl font-semibold shadow-sm hover:shadow-md hover:bg-blue-700 transition-all"
          >
            Enroll
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu (Animated) */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-white/95 backdrop-blur-lg border-t shadow-lg"
          >
            <div className="flex flex-col items-center py-4 space-y-3">
              {menuItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.name, item.link)}
                  className={`text-lg font-medium transition-colors ${
                    active === item.name
                      ? "text-blue-600"
                      : "text-gray-700 hover:text-blue-500"
                  }`}
                >
                  {item.name}
                </button>
              ))}
              <button
                onClick={() => {
                  openModal("Enroll");
                  setMenuOpen(false);
                }}
                className="w-[80%] bg-blue-600 text-white py-2 rounded-lg mt-2 font-semibold hover:bg-blue-700 transition-all"
              >
                Enroll Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
