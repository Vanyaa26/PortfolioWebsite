import React from "react";
import { motion } from "framer-motion";
import imageMe from "../assets/imageMe.png";
import { Github, Linkedin, Mail, Download, Instagram } from "lucide-react";
import VanyaCV from "../assets/VanyaCV.pdf";

const Header = () => {
   
  return (
    <div className="flex gap-[6rem] bg-slate-100 h-screen items-center justify-center px-8 relative">
      {/* Left Section */}
      <div className="flex flex-col gap-4">
        {/* Name Animation */}
        <motion.h1
          className="font-bold text-6xl text-gray-700"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Vanya Tentiwala
        </motion.h1>

        {/* Profession Titles */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <p className="text-3xl text-gray-500 pl-3 tracking-wider">Web Developer</p>
          <p className="text-3xl text-gray-500 pl-3 tracking-wider">Data Scientist</p>
        </motion.div>

        {/* Social Icons */}
        <div className="flex space-x-4 mt-3">
          <a href="https://github.com/Vanyaa26" target="_blank" rel="noopener noreferrer" className="hover:text-gray-500">
            <Github size={30} />
          </a>
          <a href="https://www.linkedin.com/in/vanya-tentiwala/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-500">
            <Linkedin size={30} />
          </a>
          <a href="https://www.instagram.com/ink._itblack?igsh=YTk5ZTZweDZxcTF6" target="_blank" className="hover:text-gray-500">
            <Instagram size={30} />
          </a>
        </div>

        {/* Download Resume Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="mt-4 px-5 py-2 bg-gray-700 text-white text-lg rounded-lg shadow-lg flex items-center gap-2 hover:bg-gray-600"
        >
          <Download size={18} /> 
          <a href={require("../assets/VanyaCV.pdf")} download="Vanya_Tentiwala_Resume" className="flex items-center gap-2">
            Download Resume
          </a>
        </motion.button>
      </div>

      {/* Right Section - Image with Rotating Text */}
      <div className="relative w-64 h-64 flex items-center justify-center">
        {/* Profile Image */}
        <img 
          className="w-64 h-64 object-cover rounded-full border-[0.2rem] border-gray-700" 
          src={imageMe} 
          alt="Vanya" 
        />
      </div>
    </div>
  );
};

export default Header;
