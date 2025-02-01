import React from "react";
import { NavLink } from "react-router-dom";
import { Home, User, Mail } from "lucide-react";

const Navigation = () => {
  return (
    <nav className="fixed bottom-4 sm:bottom-5 left-1/2 transform -translate-x-1/2 bg-slate-500 bg-opacity-30 backdrop-blur-lg shadow-lg border border-gray-200 rounded-full px-3 sm:px-6 py-2 sm:py-4 flex gap-4 sm:gap-8">
      <NavLink
        to="/about"
        className="flex items-center gap-3 sm:gap-2 text-xs sm:text-sm text-white hover:text-blue-500 transition duration-300"
      >
        <User size={16} className="sm:w-5 sm:h-5" />
        <span className=" hidden sm:inline">About Me</span>
      </NavLink>
    
      <NavLink
        to="/contact"
        className="flex items-center gap-1 sm:gap-2 text-sm sm:text-sm text-white hover:text-blue-500 transition duration-300"
      >
        <Mail size={16} className="sm:w-5 sm:h-5" />
        <span className="hidden sm:inline">Contact</span>
      </NavLink>
    </nav>
  );
};

export default Navigation;
