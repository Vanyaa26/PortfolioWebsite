import React from "react";
import { motion } from "framer-motion";
import imageMe from "../assets/imageMe.png";
import { Github, Linkedin, Mail, Download, Instagram } from "lucide-react";
import VanyaCV from "../assets/VanyaCV.pdf";

const Header = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-8 lg:gap-[6rem] bg-slate-100 min-h-screen items-center justify-center px-4 sm:px-8 py-12 lg:py-0">
      {/* Left Section */}
      <div className="flex flex-col gap-4 text-center lg:text-left">
        {/* Name Animation */}
        <motion.h1
          className="font-bold text-4xl sm:text-5xl lg:text-6xl text-gray-700"
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
          className="flex flex-col gap-2"
        >
          <p className="text-2xl sm:text-3xl text-gray-500 lg:pl-3 tracking-wider">
            Web Developer
          </p>
          <p className="text-2xl sm:text-3xl text-gray-500 lg:pl-3 tracking-wider">
            Data Scientist
          </p>
        </motion.div>

        {/* Social Icons */}
        <div className="flex space-x-4 mt-3 justify-center lg:justify-start">
          <a 
            href="https://github.com/Vanyaa26" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-gray-500 transition-colors"
          >
            <Github size={24} className="sm:w-[30px] sm:h-[30px]" />
          </a>
          <a 
            href="https://www.linkedin.com/in/vanya-tentiwala/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-gray-500 transition-colors"
          >
            <Linkedin size={24} className="sm:w-[30px] sm:h-[30px]" />
          </a>
          <a 
            href="https://www.instagram.com/ink._itblack?igsh=YTk5ZTZweDZxcTF6" 
            target="_blank" 
            className="hover:text-gray-500 transition-colors"
          >
            <Instagram size={24} className="sm:w-[30px] sm:h-[30px]" />
          </a>
        </div>

        {/* Download Resume Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-4 px-4 sm:px-5 py-2 bg-gray-700 text-white text-base sm:text-lg rounded-lg shadow-lg flex items-center gap-2 hover:bg-gray-600 mx-auto lg:mx-0 transition-colors"
        >
          <Download size={16} className="sm:w-[18px] sm:h-[18px]" /> 
          <a 
            href={require("../assets/VanyaCV.pdf")} 
            download="Vanya_Tentiwala_Resume" 
            className="flex items-center gap-2"
          >
            Download Resume
          </a>
        </motion.button>
      </div>

      {/* Right Section - Image */}
      <div className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 flex items-center justify-center">
        <img 
          className="w-full h-full object-cover rounded-full border-[0.2rem] border-gray-700" 
          src={imageMe} 
          alt="Vanya" 
        />
      </div>
    </div>
  );
};

export default Header;
