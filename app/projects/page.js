"use client";
import React from "react";
import Image from "next/image";
import styles from "./Projects.module.css";

const projects = [
    {
        name: "Image Editor",
        description: "An online image filtering tool that allows users to apply various filters to images.",
        techStack: ["HTML", "CSS", "JavaScript"],
        link: "https://akshat-shah-websites-7iybbh0r0-akshat-shah04s-projects.vercel.app/imageFilter.html?nocache=1",
        github: ["https://github.com/Akshat-Shah04/Vercel-01/tree/main/Image%20Effect"],
        image: "/websiteLinks/imageEditor.png",
        status: "Deployed"
    },
    {
        name: "URL Shortener",
        description: "A simple and efficient URL shortener built with Django and Bootstrap, hosted on Render.",
        techStack: ["Django", "Bootstrap", "Python", "Render"],
        link: "https://url-shortener-f8ii.onrender.com/shortener",
        github: ["https://github.com/Akshat-Shah04/Render-01/tree/main/url-shortener"],
        image: "/websiteLinks/urlShort.jpg",
        status: "Deployed"
    },
    {
        name: "Footwear E-commerce Website",
        description: "An online footwear store built with Django, featuring a shopping cart, authentication, and payment integration.",
        techStack: ["Django", "Bootstrap", "Python", "Razorpay"],
        github: ["https://github.com/Akshat-Shah04/Django-Footwear"],
        image: "/websiteLinks/footwear.png",
        status: "Completed"
    },
    {
        name: "Tourist App",
        description: "A React-based web app that provides information about tourist destinations, attractions, and travel guides.",
        techStack: ["React.js", "API Integration", "Bootstrap", "JavaScript"],
        github: ["https://github.com/Akshat-Shah04/Tourist-App"],
        image: "/websiteLinks/touristApp.png",
        status: "Completed"
    },
    {
        name: "QR Code Generator",
        description: "A simple QR code generator built with Django and Bootstrap, hosted on Render and Vercel.",
        techStack: ["Django", "Bootstrap", "Python", "Render", "Vercel"],
        link: "https://qr-code-topaz-eight.vercel.app/",
        github: [
            "https://github.com/Akshat-Shah04/Render-01/tree/main/QR_CODE_GENERATOR/Backend/backend",
            "https://github.com/Akshat-Shah04/Vercel-01/tree/main/QR_CODE-GENERATOR/Frontend"
        ],
        image: "/websiteLinks/qrCode.png",
        status: "Deployed"
    },
    {
        name: "Finance Tracker",
        description: "A web-based finance tracker that helps users manage expenses, analyze spending patterns, and predict future expenses using AI-powered insights.",
        techStack: ["Next.js", "Django", "Bootstrap 5", "Django Rest Framework", "Chart.js", "Data Visualization", "API Integration"],
        github: [
            "https://github.com/Akshat-Shah04/Finance-Manager-App-Frontend",
            "https://github.com/Akshat-Shah04/Finance-Manager-App"
        ],
        image: "/websiteLinks/finance.png",
        status: "In Progress",
    },
    // {
    //     name: "Client Management Software",
    //     description:"",
    //     techStack: ["Django"],
    //     image: "",
    //     status: "In Progress",
    //     github: [""],
    // }
];

export default function Projects() {
    const handleGithubClick = (links) => {
        if (!Array.isArray(links) || links.length === 0) return;
        window.open(links[0], "_blank");
    };

    return (
        <main className="flex flex-col items-center justify-center bg-background text-foreground py-20 px-6">
            <h1 className="text-4xl md:text-6xl font-bold font-playfair mb-12">Projects</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl">
                {projects.map((project, index) => (
                    <div key={index} className={`group relative block bg-gray-800 text-white p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 ${styles.card}`}>

                        {/* Status Badge */}
                        <span className={`absolute top-3 right-3 px-3 py-1 text-xs font-semibold uppercase rounded-lg 
                            ${project.status === "Deployed" ? "bg-green-600" :
                                project.status === "Completed" ? "bg-purple-600" :
                                    "bg-yellow-600"}`}>
                            {project.status}
                        </span>

                        {/* Image Section */}
                        <div className="relative w-full h-44 mb-6 mt-7 rounded-lg overflow-hidden">
                            <Image src={project.image} alt={project.name} layout="fill" objectFit="cover" className="rounded-lg" />
                        </div>

                        {/* Project Name */}
                        <h3 className="text-lg font-semibold mb-3">{project.name}</h3>

                        {/* Description */}
                        <p className="text-sm text-gray-300 mb-4 leading-relaxed">{project.description}</p>

                        {/* Tech Stack */}
                        <div className="flex flex-wrap gap-2 mb-5">
                            {project.techStack.map((tech, i) => (
                                <span key={i} className="px-2 py-1 bg-stone-800 border border-gray-700 text-xs text-gray-300 rounded-lg">
                                    {tech}
                                </span>
                            ))}
                        </div>

                        {/* Buttons */}
                        <div className="flex gap-3 mt-8 justify-between">
                            {/* GitHub Button */}
                            <button
                                onClick={() => handleGithubClick(project.github)}
                                className="px-4 py-2 bg-gray-700 text-white rounded-lg text-sm hover:bg-gray-600 transition"
                            >
                                GitHub
                            </button>
                            {project.link && (
                                <a href={project.link} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-500 transition">
                                    Live Demo
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
}
