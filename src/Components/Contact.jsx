import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaInstagram, FaEnvelope, FaPhone, FaBars } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const ContactMe = () => {
    const contactEmail = process.env.REACT_APP_CONTACT_EMAIL;
    const contactNumber = process.env.REACT_APP_CONTACT_NUMBER;
    const navigate = useNavigate();

    const handleMenu = () => {
        navigate('/menu');
    };

    return (
        <div className="relative min-h-screen bg-slate-400 flex flex-col lg:flex-row items-center justify-center p-4 sm:p-8">
          
            <button 
                onClick={handleMenu} 
                className="absolute top-4 right-4 p-2 bg-white rounded-md shadow-lg hover:bg-gray-200 transition duration-300 z-50"
            >
                <FaBars className="text-xl sm:text-2xl text-gray-700" />
            </button>

        
            <div className="w-full max-w-2xl lg:max-w-4xl lg:mr-8 mb-8 lg:mb-0">
                <div className="grid grid-cols-1 gap-4 sm:gap-6">
                 
                    <motion.div
                        className="bg-white rounded-lg shadow-lg p-4 sm:p-6 flex items-start sm:items-center space-x-3 hover:shadow-xl transition-shadow duration-300"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        whileHover={{ scale: 1.02 }}
                    >
                        <FaLinkedin className="text-2xl sm:text-3xl text-blue-600 flex-shrink-0" />
                        <div className="overflow-hidden">
                            <h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2">Connect on LinkedIn</h3>
                            <a 
                                href="https://www.linkedin.com/in/vanya-tentiwala/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:underline text-sm sm:text-base break-words"
                            >
                                linkedin.com/in/vanya-tentiwala
                            </a>
                        </div>
                    </motion.div>

                
                    <motion.div
                        className="bg-white rounded-lg shadow-lg p-4 sm:p-6 flex items-start sm:items-center space-x-3 hover:shadow-xl transition-shadow duration-300"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        whileHover={{ scale: 1.02 }}
                    >
                        <FaInstagram className="text-2xl sm:text-3xl text-pink-600 flex-shrink-0" />
                        <div className="overflow-hidden">
                            <h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2">Follow on Instagram</h3>
                            <a 
                                href="https://www.instagram.com/ink._itblack?igsh=YTk5ZTZweDZxcTF6" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-pink-600 hover:underline text-sm sm:text-base break-words"
                            >
                                @ink._itblack
                            </a>
                        </div>
                    </motion.div>

                 
                    <motion.div
                        className="bg-white rounded-lg shadow-lg p-4 sm:p-6 flex items-start sm:items-center space-x-3 hover:shadow-xl transition-shadow duration-300"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        whileHover={{ scale: 1.02 }}
                    >
                        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
                            <FaEnvelope className="text-2xl sm:text-3xl text-gray-600 flex-shrink-0" />
                            <FaPhone className="text-2xl sm:text-3xl text-gray-600 flex-shrink-0" />
                        </div>
                        <div className="overflow-hidden">
                            <h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2">Get in Touch</h3>
                            <p className="text-gray-600 text-sm sm:text-base break-words">tentiwalavanya26@gmail.com</p>
                            <p className="text-gray-600 text-sm sm:text-base">+91 7300757445</p>
                        </div>
                    </motion.div>
                </div>
            </div>

           
            <motion.div 
                className="hidden lg:flex absolute right-8 xl:right-16 top-1/2 -translate-y-1/2 flex-col items-center justify-start"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
            >
                <div className="transform rotate-90 origin-center translate-x-1/3">
                    <span className="text-6xl xl:text-8xl font-bold text-white tracking-wider block">
                        CONTACT
                    </span>
                    <span className="text-6xl xl:text-8xl font-bold text-white tracking-wider block">
                        ME
                    </span>
                </div>
            </motion.div>
        </div>
    );
};

export default ContactMe;
