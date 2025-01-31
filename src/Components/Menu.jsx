import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import imageMe from "../assets/imageMe.png";
import "./Menu.css"
const Menu = () => {
  return (
    <div className="h-screen flex">
      {/* Left Black Section */}
      <div className="w-1/3 bg-black relative">
        <motion.h2 
          className="text-white text-6xl absolute top-1/4 left-9"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="block mb-4">Hey,</span>
          <span className="block">I am Vanya!</span>
        </motion.h2>
        
        {/* Image with static text around it */}
        <motion.div 
          className="absolute -right-[11rem] top-[29rem] -translate-y-1/2"
          
          
          transition={{ duration: 0.5 }}
        >
          <div className="relative p-[2rem] ">
            <img
              src={imageMe}
              alt="Vanya"
              className=" w-64 h-64 rounded-full  border-black shadow-2xl"
            />
            
            {/* Static text around image */}
            <svg className="absolute -inset-8 w-96 h-96" viewBox="0 0 200 200">
              <path
                id="textCircle"
                d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
                fill="none"
              />
              <text className=" text-[10.9px] fill-white rotating-text tracking-wider">
                <textPath href="#textCircle" className="tracking-widest ">
                •  Data Scientist • Web Developer • A Learner • Problem Solver
                </textPath>
              </text>
            </svg>
          </div>
        </motion.div>
      </div>

      {/* Right Gradient Section */}
      <div className="w-2/3 bg-gradient-to-r from-blue-200 via-blue-300 to-slate-500 flex items-center justify-center">
        <motion.nav 
          className="space-y-8"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {[
            { to: "/", text: "Home" },
            { to: "/skills", text: "Skills & Achievements" },
            { to: "/Projects", text: "Projects" },
            { to: "/contact", text: "Contact Me" }
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, x: 10 }}
              className="block"
            >
              <Link 
                to={item.to} 
                className="text-4xl text-white hover:text-gray-200 transition-all duration-300"
              >
                {item.text}
              </Link>
            </motion.div>
          ))}
        </motion.nav>
      </div>
    </div>
  );
};

export default Menu;
