import React from "react";
import { NavLink } from "react-router-dom";
import { Home, User, Mail } from "lucide-react"; // Icons

const Navigation = () => {
  return (
    <nav className="fixed bottom-5 left-1/2 transform -translate-x-1/2 bg-slate-500 bg-opacity-30 backdrop-blur-lg shadow-lg border border-gray-200 rounded-full px-6 py-4 flex gap-8">
      

      <NavLink
        to="/about"
        className="flex items-center gap-2 text-lg text-white hover:text-blue-500 transition duration-300"
      >
        <User size={20} />
        About Me
      </NavLink>
    
      <NavLink
        to="/contact"
        className="flex items-center gap-2 text-lg text-white hover:text-blue-500 transition duration-300"
      >
        <Mail size={20} />
        Contact
      </NavLink>
    </nav>
  );
};

export default Navigation;
