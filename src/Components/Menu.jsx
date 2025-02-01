import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import imageMe from "../assets/imageMe.png";
import "./Menu.css"

const Menu = () => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Left Black Section */}
      <div className="w-full lg:w-1/3 bg-black relative p-6 lg:p-0   ">
        <motion.h2 
          className="text-white text-4xl sm:text-5xl lg:text-6xl lg:absolute lg:top-1/4 lg:left-9"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="block mb-2 lg:mb-4">Hey,</span>
          <span className="block">I am Vanya!</span>
        </motion.h2>
        
        {/* Image with static text around it */}
        <motion.div 
          className="mt-8 lg:mt-0 lg:absolute lg:-right-[11rem] lg:top-[29rem] lg:-translate-y-1/2 flex justify-center lg:block"
          transition={{ duration: 0.5 }}
        >
          <div className="relative p-4 lg:p-[2rem]">
            <img
              src={imageMe}
              alt="Vanya"
              className="w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-full border-black shadow-2xl"
            />
            
            {/* Static text around image */}
            <svg className="absolute -inset-4 lg:-inset-8 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96" viewBox="0 0 200 200">
              <path
                id="textCircle"
                d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
                fill="none"
              />
              <text className="text-[8px] sm:text-[9px] lg:text-[10.9px] fill-white rotating-text tracking-wider">
                <textPath href="#textCircle" className="tracking-widest">
                •  Data Scientist • Web Developer • A Learner • Problem Solver
                </textPath>
              </text>
            </svg>
          </div>
        </motion.div>
      </div>

      {/* Right Gradient Section */}
      <div className="w-full lg:w-2/3 bg-gradient-to-r from-blue-200 via-blue-300 to-slate-500 flex items-center justify-center p-8 lg:p-0">
        <motion.nav 
          className="space-y-4 sm:space-y-6 lg:space-y-8"
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
                className="text-2xl sm:text-3xl lg:text-4xl text-white hover:text-gray-200 transition-all duration-300"
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
