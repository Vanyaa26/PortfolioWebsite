import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FaBars, FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Portfolio from '../assets/Portfolio.png'

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
        
        // Add more projects as needed
    ];

    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-200 via-blue-300 to-slate-500 p-8">
            {/* Menu Button */}
            <button 
                onClick={() => navigate('/menu')} 
                className="fixed top-4 right-4 p-2 bg-slate-400 text-white rounded-md hover:bg-slate-500 transition-all duration-300"
            >
                <FaBars className="text-2xl" />
            </button>

            {/* Main Content */}
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-12"
                >
                    <h1 className="text-5xl font-bold mb-4 text-gray-700">Projects</h1>
                    <div className="h-1 w-32 bg-slate-400"></div>
                </motion.div>

                {/* Projects Grid */}
                <div className="grid gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="bg-white rounded-lg shadow-lg overflow-hidden"
                        >
                            <div className="md:flex">
                                {/* Project Image */}
                                <div className="md:w-1/2 bg-gray-100">
                                    <img 
                                        src={project.image} 
                                        alt={project.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {/* Project Info */}
                                <div className="md:w-1/2 p-8">
                                    <h3 className="text-2xl font-bold text-gray-700 mb-4">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-600 mb-6">
                                        {project.description}
                                    </p>
                                    
                                    {/* Technologies */}
                                    <div className="mb-6">
                                        <div className="flex flex-wrap gap-2">
                                            {project.technologies.map((tech, idx) => (
                                                <span 
                                                    key={idx}
                                                    className="px-3 py-1 bg-slate-100 text-gray-700 rounded-full text-sm"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Links */}
                                    <div className="flex space-x-4">
                                        <a 
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 transition-colors"
                                        >
                                            <FaGithub className="text-xl" />
                                            <span>Code</span>
                                        </a>
                                        <a 
                                            href={project.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 transition-colors"
                                        >
                                            <FaExternalLinkAlt className="text-lg" />
                                            <span>Live Demo</span>
                                        </a>
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
