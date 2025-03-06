import React from "react";
import Image from "next/image";

export default function About() {
    return (
        <main className="flex flex-col items-center justify-center bg-background text-foreground">
            {/* About Me Section */}
            <section className="w-full max-w-4xl px-6 md:px-12 py-20 text-center">
                <h1 className="text-4xl md:text-6xl font-bold font-playfair mb-4">About Me</h1>
                <p className="text-lg md:text-xl max-w-3xl mx-auto">
                    I'm currently pursuing a B.Tech in Information Technology at Silver Oak University.
                    Passionate about software development, AI, and building impactful projects.
                    I also focus on upskilling myself
                </p>
            </section>

            {/* Education Section */}
            <section className="w-full max-w-4xl px-6 md:px-12 py-20">
                <h2 className="text-3xl font-playfair mb-6">Education</h2>
                <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg">
                    <h3 className="text-xl font-bold">B.Tech in Information Technology</h3>
                    <p>Silver Oak University</p>
                    <p className="text-sm mt-2">2022 - Present</p>
                </div>
            </section>

            {/* Certifications Section */}
            <section className="w-full max-w-5xl px-6 md:px-12 py-20">
                <h2 className="text-3xl font-playfair mb-6 text-center">Certifications</h2>
                <div className="flex flex-col gap-8">
                    {[
                        {
                            "title": "Microsoft Azure Data Storage Approach (Badge) - 2025",
                            "description": "I learned about various data storage solutions in Azure, including Blob Storage, Azure SQL Database, Cosmos DB, and Table Storage. The course covered data redundancy, replication strategies, security best practices, and cost optimization techniques. I gained hands-on experience in configuring and managing storage accounts, implementing access controls, and selecting the right storage service for different application scenarios.",
                            "image": "/certificates/dataStorageApproach.png"
                        },
                        {
                            "title": "Microsoft Azure AI Services (Badge) - 2025",
                            "description": "I explored Azure AI services, including Cognitive Services, Bot Services, and Machine Learning Studio, to build and integrate AI-powered applications. This certification deepened my understanding of computer vision, NLP, speech recognition, and AI model deployment on Azure.",
                            "image": "/certificates/AzureAI.png"
                        },
                        {
                            "title": "Microsoft Introduction to Azure Virtual Machines (Badge) - 2025",
                            "description": "I learned the fundamentals of Azure Virtual Machines (VMs), covering VM deployment, configuration, networking, security, and cost management. This badge helped me understand how to scale workloads, optimize performance, and manage cloud-based infrastructure effectively.",
                            "image": "/certificates/IntroToVm.png"
                        },
                        {
                            "title": "Microsoft Fundamentals of Machine Learning (Badge) - 2025",
                            "description": "This certification provided a strong foundation in machine learning concepts, including supervised and unsupervised learning, feature engineering, model evaluation, and deployment. I explored Azure ML services for building and training ML models efficiently.",
                            "image": "/certificates/MLfoundations.png"
                        },
                        {
                            "title": "Microsoft Fundamental AI Concepts (Badge) - 2025",
                            "description": "I gained insights into AI fundamentals, covering key topics such as machine learning, deep learning, and responsible AI. The course introduced AI applications, neural networks, and cloud-based AI services, helping me understand how AI solutions are designed and implemented.",
                            "image": "/certificates/AIC.png"
                        },
                        {
                            "title": "Postman API Fundamentals Student Expert Certification - 2024",
                            "description": "Completing the Postman API Fundamentals Student Expert Certification enhanced my understanding of APIs, HTTP methods, and request-response cycles. I gained hands-on experience using Postman for testing, automation, and documentation. Additionally, I learned to write test scripts in JavaScript, improving my API validation and problem-solving skills",
                            "image": "/certificates/Postman.png"
                        },
                        {
                            "title": "Coursera - Introduction to Bash Shell Scripting (Project Certificate) - 2024",
                            "description": "I gained hands-on experience in Bash shell scripting, learning to automate tasks, manage files, and write efficient scripts for Linux-based systems. The project-based approach enhanced my ability to work with variables, loops, conditionals, and system commands, making me proficient in script automation and process optimization.",
                            "image": "/certificates/cBash.png"
                        },
                        {
                            "title": "Coursera - Linux Command Line(Project Certificate)- 2024",
                            "description": "This course strengthened my proficiency in using the Linux terminal, covering essential commands for file system navigation, process management, user permissions, and system administration. I learned to efficiently execute commands, use pipes and redirections, and automate tasks, improving my overall command-line efficiency.",
                            "image": "/certificates/cLinux.png"
                        },
                        {
                            "title": "Spoken Tutorials - JavaScript - 2024",
                            "description": "I built a solid foundation in JavaScript programming, covering variables, functions, loops, DOM manipulation, and event handling. This course strengthened my skills in client-side scripting, essential for interactive web development.",
                            "image": "/certificates/SpokenJS.png"
                        },
                        {
                            "title": "Spoken Tutorials - Python - 2024",
                            "description": "This course reinforced my knowledge of Python programming, focusing on data structures, functions, file handling, and object-oriented programming. It also introduced me to basic data analysis and automation, improving my ability to write efficient Python scripts.",
                            "image": "/certificates/SpokenPy.png"
                        },
                        {
                            "title": "Diploma in Multilingual Computer Programming - 2024",
                            "description": "In the Diploma in Multilingual Computer Programming (DMCP) at CDAC, I learned C, C++, and Java, gaining strong problem-solving and software development skills. I developed applications with multilingual support, focusing on strong programming skills, logic building, and Unicode standards. The course also covered data structures, algorithms, database management, and HTML, giving me hands-on experience in software development.",
                            "image": "/certificates/cdacJava.jpg"
                        },
                        {
                            "title": "Oracle Cloud Data Management Certification - 2023",
                            "description": "In 2023, I earned the Oracle Cloud Infrastructure (OCI) Certified Foundations Associate certification, gaining a solid understanding of Oracle Cloud services and architecture. The program covered OCI core concepts, compute, storage, networking, security, databases, and pricing models, along with hands-on exposure to cloud deployment strategies. It strengthened my knowledge of cloud computing principles, identity and access management (IAM), and high-availability architectures, preparing me for real-world cloud operations and solutions.",
                            "image": "/certificates/OracleCloudData.png"
                        },
                        {
                            "title": "Certification in Python",
                            "description": "I completed a Certification in Python, where I learned the fundamentals of Python programming and focused on logic building. The course covered data types, control structures, functions, and object-oriented programming (OOP). Additionally, I gained hands-on experience with file handling, exception handling, and database interactions using SQLite.",
                            "image": "/certificates/cdacPython.png"
                        },

                        {
                            "title": "Spoken Tutorials in C - 2023",
                            "description": "In 2023, I completed the Spoken Tutorials Test conducted by IIT Bombay which has further strengthened and enhanced my knowledge on C language and basics of Programming.",
                            "image": "/certificates/SpokenC.png"
                        }
                    ]
                        .map((cert, index) => (
                            <div key={index} className={`flex flex-col md:flex-row ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} bg-gray-800 text-white rounded-lg p-6 shadow-lg`}>
                                <div className="md:w-1/3 flex justify-center">
                                    <Image src={cert.image} alt={cert.title} width={225} height={150} className="rounded-lg" />
                                </div>
                                <div className="md:w-2/3 flex flex-col justify-center px-6">
                                    <h3 className="text-xl font-bold mb-2">{cert.title}</h3>
                                    <p className="text-sm">{cert.description}</p>
                                </div>
                            </div>
                        ))}
                </div>
            </section>

            {/* Learning Skills Section */}
            <section className="w-full bg-gray-800 text-white py-20 px-6 md:px-12 text-center">
                <h2 className="text-3xl font-playfair mb-6">Currently Learning</h2>
                <div className="flex flex-wrap justify-center gap-4" id="learning-skills">
                    {["Machine Learning with Microsoft Azure", "Data Science", "Machone Learning Models", "Data Visualization", "Data Processing", "AI Model Optimization", "TypeScript", "Advanced JavaScript Patterns"].map(skill => (
                        <span key={skill} className="px-4 py-2 bg-gray-700 rounded-lg text-lg hover:bg-gray-500 transition duration-300">
                            {skill}
                        </span>
                    ))}
                </div>
            </section>

            {/* Skills Section */}
            <section className="w-full bg-gray-900 text-white py-20 px-6 md:px-12 text-center" >
                <h2 className="text-3xl font-playfair mb-6">Skills</h2>
                <div className="flex flex-wrap justify-center gap-4" id="skills">
                    {["React.js", "Django", "Next.js", "Python", "Java", "C", "C++", "HTML", "CSS", "Java Script", "Bootstrap 5", "MySQL", "Numpy", "Pandas", "Scikit-Learn", "Machine-Learning", "Cloud Computing in Azure", "Tailwind CSS", "SASS", "JQuery"].map(skill => (
                        <span key={skill} className="px-4 py-2 bg-gray-700 rounded-lg text-lg hover:bg-gray-500 transition duration-300">
                            {skill}
                        </span>
                    ))}
                </div>
            </section>
        </main>
    );
}
