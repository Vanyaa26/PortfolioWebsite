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
        <div className="relative flex min-h-screen bg-slate-400 ">
        <button 
                onClick={handleMenu} 
                className="absolute top-4 left-4 p-2 bg-white rounded-md shadow-lg hover:bg-gray-200 transition duration-300 z-50"
            >
                <FaBars className="text-2xl text-gray-700" />
            </button>
            {/* Main content container with cards - adjusted padding */}
            <div className="flex-1 flex items-center justify-start pl-24 pr-28">
                <div className="grid grid-cols-1 gap-6 p-6 max-w-2xl w-full">
                    {/* LinkedIn Card - adjusted padding and text sizes */}
                    <motion.div
                        className="bg-white rounded-lg shadow-lg p-4 flex items-center space-x-3 hover:shadow-xl transition-shadow duration-300"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        whileHover={{ scale: 1.02 }}
                    >
                        <FaLinkedin className="text-3xl text-blue-600" />
                        <div>
                            <h3 className="text-lg font-semibold mb-2">Connect on LinkedIn</h3>
                            <a 
                                href="https://www.linkedin.com/in/vanya-tentiwala/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:underline text-sm"
                            >
                                linkedin.com/in/vanya-tentiwala
                            </a>
                        </div>
                    </motion.div>

                    {/* Instagram Card - adjusted padding and text sizes */}
                    <motion.div
                        className="bg-white rounded-lg shadow-lg p-4 flex items-center space-x-3 hover:shadow-xl transition-shadow duration-300"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        whileHover={{ scale: 1.02 }}
                    >
                        <FaInstagram className="text-3xl text-pink-600" />
                        <div>
                            <h3 className="text-lg font-semibold mb-2">Follow on Instagram</h3>
                            <a 
                                href="https://www.instagram.com/ink._itblack?igsh=YTk5ZTZweDZxcTF6" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-pink-600 hover:underline text-sm"
                            >
                                @ink._itblack
                            </a>
                        </div>
                    </motion.div>

                    {/* Contact Info Card - adjusted padding and text sizes */}
                    <motion.div
                        className="bg-white rounded-lg shadow-lg p-4 flex items-center space-x-3 hover:shadow-xl transition-shadow duration-300"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        whileHover={{ scale: 1.02 }}
                    >
                        <div className="flex space-x-3">
                            <FaEnvelope className="text-3xl text-gray-600" />
                            <FaPhone className="text-3xl text-gray-600" />
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-2">Get in Touch</h3>
                            <p className="text-gray-600 text-sm">tentiwalavanya26@gmail.com</p>
                            <p className="text-gray-600 text-sm">+91 7300757445</p>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Vertical "Contact Me" text - adjusted size and positioning */}
            <motion.div 
                className="absolute right-[2rem] top-[14rem] -translate-y-1/2 flex flex-col items-center justify-start"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
            >
                <div className="transform rotate-90 origin-center translate-x-1/3">
                    <span className="text-9xl font-bold text-white tracking-wider block">
                        CONTACT
                    </span>
                    <span className="text-9xl font-bold text-white tracking-wider block">
                        ME
                    </span>
                </div>
               
            </motion.div>
            <button>

            </button>
        </div>
    );
};

export default ContactMe;
