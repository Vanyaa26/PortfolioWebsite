import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FaBars, FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
    const navigate = useNavigate();

    const projects = [
        {
            title: "MicroTasking App",
            description: "An All-in-one Task Management you need which not only plan your days but also plans you weeks too. ",
            technologies: ["React", "Tailwind CSS", "Framer Motion", "Firebase"],
            github: "https://github.com/Vanyaa26/MicroTaskingApp.git",
            // live: "https://your-portfolio.com",
            image: require('../assets/microtasking.png')
        },
        {
            title: "Portfolio Website",
            description: "Personal portfolio website showcasing my skills and projects. Built with modern web technologies and animations.",
            technologies: ["React", "Tailwind CSS", "Framer Motion"],
            github: "https://github.com/Vanyaa26/PortfolioWebsite.git",
            
            image: require('../assets/Portfolio.png')
        },
        {
            title: "Household Service Application",
            description: "A full-stack application connecting service providers with households. Features include real-time booking system, service provider management, and user authentication.",
            technologies: ["Bootstrap", "Python", "Flask", "SQLAlchemy"],
            github: "https://github.com/Vanyaa26/HouseHoldApp.git",
            live: "https://drive.google.com/file/d/1qh7CCH6N9Qg1mW63rm4nTEc1c0DGpbqn/view?usp=sharing",
            image: require('../assets/HouseholdApp.png') // Add your project screenshot
        },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-200 via-blue-300 to-slate-500 p-4 sm:p-6 lg:p-8">
          
            <button 
                onClick={() => navigate('/menu')} 
                className="fixed top-4 right-4 p-2 bg-slate-400 text-white rounded-md hover:bg-slate-500 transition-all duration-300 z-50"
            >
                <FaBars className="text-xl sm:text-2xl" />
            </button>

         
            <div className="max-w-6xl mx-auto">
              
                <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-8 sm:mb-12"
                >
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-gray-700">Projects</h1>
                    <div className="h-1 w-24 sm:w-32 bg-slate-400"></div>
                </motion.div>

             
                <div className="grid gap-6 sm:gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="bg-white rounded-lg shadow-lg overflow-hidden"
                        >
                            <div className="flex flex-col md:flex-row">
                            
                                <div className="md:w-1/2 bg-gray-100">
                                    <img 
                                        src={project.image} 
                                        alt={project.title}
                                        className="w-full h-48 sm:h-64 md:h-full object-cover"
                                    />
                                </div>

                              
                                <div className="md:w-1/2 p-4 sm:p-6 md:p-8">
                                    <h3 className="text-xl sm:text-2xl font-bold text-gray-700 mb-2 sm:mb-4">
                                        {project.title}
                                    </h3>
                                    <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
                                        {project.description}
                                    </p>
                                    
                                  
                                    <div className="mb-4 sm:mb-6">
                                        <div className="flex flex-wrap gap-2">
                                            {project.technologies.map((tech, idx) => (
                                                <span 
                                                    key={idx}
                                                    className="px-2 py-1 bg-slate-100 text-gray-700 rounded-full text-xs sm:text-sm"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                   
                                    <div className="flex space-x-4">
                                        <a 
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center space-x-1 sm:space-x-2 text-gray-700 hover:text-gray-900 transition-colors text-sm sm:text-base"
                                        >
                                            <FaGithub className="text-lg sm:text-xl" />
                                            <span>Code</span>
                                        </a>
                                        {project.live && (
                                            <a 
                                                href={project.live}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center space-x-1 sm:space-x-2 text-gray-700 hover:text-gray-900 transition-colors text-sm sm:text-base"
                                            >
                                                <FaExternalLinkAlt className="text-base sm:text-lg" />
                                                <span>Live Demo</span>
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
