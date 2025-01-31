import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FaBars } from "react-icons/fa";

const SkillsAndAchievements = () => {
    const navigate = useNavigate();
    
    const skills = [
        {
            category: "Development",
            items: [
                { name: "React.js", level: 90 },
                { name: "JavaScript", level: 85 },
                { name: "HTML/CSS", level: 90 },
                { name: "Tailwind CSS", level: 85 },
            ]
        },
        {
            category: "Data Science",
            items: [
                { name: "Python", level: 90 },
                { name: "Machine Learning", level: 40 },
                { name: "Data Analysis", level: 30 },
                { name: "SQL", level: 75 },
            ]
        }
    ];

    const achievements = [
        {
            year: "2024",
            items: [
                {
                    title: "IIT Madras Project Excellence",
                    description: "Achieved 100% score in App Development Project - Created a comprehensive Household Service Application integrating modern web technologies and user-centric design"
                },
                {
                    title: "Docker Certification",
                    description: "Successfully completed Docker certification, gaining expertise in containerization and modern deployment workflows"
                },
                {
                    title: "Household Service Application",
                    description: "Developed and deployed a full-stack application connecting service providers with households, featuring real-time booking system and user management"
                }
            ]
        }
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
                    <h1 className="text-5xl font-bold mb-4 text-gray-700">Skills & Achievements</h1>
                    <div className="h-1 w-32 bg-slate-400"></div>
                </motion.div>

                {/* Skills Section */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mb-16"
                >
                    <div className="bg-white rounded-lg shadow-lg p-8">
                        <h2 className="text-3xl font-semibold mb-8 text-gray-700">Technical Skills</h2>
                        <div className="grid md:grid-cols-2 gap-12">
                            {skills.map((skillGroup, index) => (
                                <div key={index} className="space-y-6">
                                    <h3 className="text-xl font-medium mb-4 text-gray-700">{skillGroup.category}</h3>
                                    {skillGroup.items.map((skill, idx) => (
                                        <motion.div 
                                            key={idx}
                                            initial={{ width: 0 }}
                                            animate={{ width: "100%" }}
                                            transition={{ duration: 1, delay: 0.1 * idx }}
                                            className="space-y-2"
                                        >
                                            <div className="flex justify-between text-gray-700">
                                                <span>{skill.name}</span>
                                                <span>{skill.level}%</span>
                                            </div>
                                            <div className="h-2 bg-gray-200 rounded-full">
                                                <motion.div 
                                                    initial={{ width: 0 }}
                                                    animate={{ width: `${skill.level}%` }}
                                                    transition={{ duration: 1, delay: 0.1 * idx }}
                                                    className="h-full bg-slate-400 rounded-full"
                                                />
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Achievements Section */}
                <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.4 }}
    className="bg-white rounded-lg shadow-lg p-8"
>
    <h2 className="text-3xl font-semibold mb-8 text-gray-700">Notable Achievements</h2>
    <div className="space-y-8">
        {achievements.map((achievement, index) => (
            <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="relative pl-8"
            >
                <h3 className="text-xl font-medium mb-6 text-gray-700">{achievement.year}</h3>
                <div className="space-y-6">
                    {achievement.items.map((item, idx) => (
                        <motion.div 
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 * idx }}
                            className="bg-gray-50 rounded-lg p-6 border-l-4 border-slate-400 hover:shadow-lg transition-all duration-300"
                        >
                            <h4 className="text-lg font-medium text-gray-700 mb-2">{item.title}</h4>
                            <p className="text-gray-600">{item.description}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        ))}
    </div>
</motion.div>
            </div>
        </div>
    );
};

export default SkillsAndAchievements;
