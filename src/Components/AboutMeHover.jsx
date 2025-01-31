import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { FaBars } from "react-icons/fa";
import { motion } from "framer-motion";
import component1 from "../assets/component1.png";

const AboutMe = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        setIsVisible(false); 
        setTimeout(() => {
            setIsVisible(true); 
        }, 100);
    }, []);

    const handleBackClick = () => {
        navigate('/');
    };
    const handleMenu = () => {
        navigate('/menu');
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="relative flex justify-center items-center bg-slate-400 h-screen">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-3xl w-full relative">
                <div className="absolute -top-16 -left-16 w-48 h-48">
                    <img 
                        src={component1} 
                        alt="L-shaped component"
                        className="w-full h-full object-contain"
                    />
                </div>

                <button 
                    onClick={handleMenu} 
                    className="absolute top-3 right-3 p-2 bg-slate-400 text-white rounded-md hover:bg-slate-500 z-0 transition-all duration-300"
                >
                    <FaBars/>
                </button>

                <div className="flex justify-between items-center mb-6">
                    <motion.h1
                        className="font-bold text-6xl text-gray-700 flex"
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        About Me
                    </motion.h1>
                </div>
                
                <p className="text-base text-gray-700 leading-relaxed mb-4">
                    I am Vanya Tentiwala, a second-year Data Science student at IIT Madras. As an enthusiastic learner, I am always pushing myself to explore new areas. I work on frontend development and am currently learning full stack, while my true passion lies in data science, where I love transforming raw data into meaningful insights. I also enjoy experimenting with UI/UX design, blending creativity with technology.
                </p>
                <p className="text-base text-gray-700 leading-relaxed">
                    I am constantly evolving, learning, and discovering new things about myself, one project at a time. Each day brings new challenges, and I embrace the journey of growth.
                </p>
            </div>
        </div>
    );
};

export default AboutMe;
