import React from "react";
import Image from "next/image";
import styles from "./Projects.module.css";


const projects = [
    {
        name: "Image Editor",
        description: "An online image filtering tool that allows users to apply various filters to images.",
        techStack: ["HTML", "CSS", "JavaScript"],
        link: "https://image-filtering-akshatshah.vercel.app/imageFilter.html",
        image: "/websiteLinks/imageEditor.png"
    },
    {
        name: "URL Shortener",
        description: "A simple and efficient URL shortener built with Django and Bootstrap, hosted on Render.",
        techStack: ["Django", "Bootstrap", "Python", "Render"],
        link: "https://url-shortener-f8ii.onrender.com/shortener",
        image: "/websiteLinks/urlShort.jpg"
    },
    {
        name: "Footwear E-commerce Website",
        description: "An online footwear store built with Django, featuring a shopping cart, authentication, and payment integration.",
        techStack: ["Django", "Bootstrap", "Python", "Razorpay"],
        link: "https://your-ecommerce-site.com", // Replace with actual deployed URL
        image: "/websiteLinks/footwearEcommerce.png" // Replace with an actual image path
    },
    {
        name: "Tourist App",
        description: "A React-based web app that provides information about tourist destinations, attractions, and travel guides.",
        techStack: ["React.js", "API Integration", "Bootstrap", "JavaScript"],
        link: "https://your-tourist-app.com", // Replace with actual deployed URL
        image: "/websiteLinks/touristApp.png" // Replace with an actual image path
    },
    // {
    //     name: "Project Placeholder",
    //     description: "Description for a future project.",
    //     techStack: ["React.js", "Next.js"],
    //     link: "#",
    //     image: "/projects/placeholder.png"
    // }
];


export default function Projects() {
    return (
        <main className="flex flex-col items-center justify-center bg-background text-foreground py-20 px-6">
            <h1 className="text-4xl md:text-6xl font-bold font-playfair mb-12">Projects</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl">
                {projects.map((project, index) => (
                    <div key={index} className={`group relative block bg-gray-800 text-white p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 ${styles.card}`}>
                        <div className="relative w-full h-40 mb-4">
                            <Image src={project.image} alt={project.name} layout="fill" objectFit="cover" className="rounded-lg" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">{project.name}</h3>
                        <p className="text-sm mb-3">{project.description}</p>
                        <div className="flex flex-wrap gap-2">
                            {project.techStack.map((tech, i) => (
                                <span key={i} className="tech-stack px-3 py-1 bg-stone-800 border-solid bottom-1 border-red-800 text-pretty text-zinc-300 rounded-lg text-sm">{tech}</span>
                            ))}
                        </div>
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="absolute inset-0"></a>
                    </div>
                ))}
            </div>
        </main>
    );
}
