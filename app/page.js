"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false); // Fixed 'loading' not defined

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value }); // Fixed e.target.id issue
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("Sending...");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus(`Error: ${data.message}`);
      }
    } catch (error) {
      setStatus("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex flex-col items-center justify-center bg-background text-foreground">
      {/* Hero Section */}
      <section className="text-center py-20 mt-20 px-6 md:px-12">
        <h1 className="text-4xl md:text-6xl font-bold font-playfair mb-4">
          Hi, I'm <span className="text-blue-500">Akshat Shah</span> 👋
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          Aspiring software developer passionate about web technologies, AI, and impactful projects.
        </p>
        <div className="mt-6">
          <Link href="/projects" className="px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition">
            View My Projects
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="w-full max-w-4xl px-6 md:px-12 py-20">
        <h2 className="text-3xl font-playfair mb-6">About Me</h2>
        <p className="text-lg">
          I'm currently pursuing a B.Tech in Information Technology at Silver Oak University.
          I have a strong foundation in programming, particularly in JavaScript, React.js, Next.js, and Django.
        </p>
        <div className="text-lg mt-4">
          <p>Certifications:</p>
          <ul className="list-disc list-inside mt-2">
            <li>Fundamentals of Machine Learning</li>
            <li>Azure Machine Learning Workspace</li>
          </ul>
        </div>
      </section>

      {/* Skills Section */}
      <section className="w-full bg-gray-900 text-white py-20 px-6 md:px-12 text-center">
        <h2 className="text-3xl font-playfair mb-6">Skills</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {['JavaScript', 'React.js', 'Python', 'Next.js', 'Django', 'Machine Learning', 'Tailwind CSS'].map(skill => (
            <span key={skill} className="px-4 py-2 bg-gray-700 rounded-lg text-lg hover:bg-gray-500 transition duration-300">
              {skill}
            </span>
          ))}
          <Link href="/about#skills" className="px-4 py-2 bg-red-900 rounded-lg text-lg cursor-pointer hover:bg-red-700 transition duration-300">
            View more skills →
          </Link>
        </div>
      </section>

      {/* Projects Section */}
      <section className="w-full max-w-5xl px-6 md:px-12 py-20">
        <h2 className="text-3xl font-playfair mb-6 text-center">My Top Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "Footwear Ecommerce App", description: "A feature-rich e-commerce platform built with Django...", role: "Full-stack developer" },
            { title: "Tourist App", description: "A dynamic travel guide application built with React.js...", role: "Frontend developer" },
            { title: "Image Filter App", description: "A JavaScript-based web app for applying real-time filters...", role: "Full-stack developer" }
          ].map((project, index) => (
            <div key={index} className="bg-gray-800 text-white rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-sm">{project.description}</p>
              <p className="text-sm mt-2"><b>My Role:</b> {project.role}</p>
              <Link href="/projects" className="text-blue-400 mt-4 inline-block hover:underline">
                View Details →
              </Link>
            </div>
          ))}
        </div>
        <div className="w-full mt-10 text-center">
          <Link href="/projects" className="px-6 py-3 bg-fuchsia-900 text-white text-lg font-semibold rounded-lg hover:bg-fuchsia-600 transition">
            View More Projects →
          </Link>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="w-full bg-gray-900 text-white py-16 px-4 md:px-10 flex flex-col items-center">
        <h2 className="text-3xl font-playfair mb-3">Get in Touch</h2>
        <p className="text-base opacity-80 mb-6">Let's collaborate! Send me a message.</p>

        <form onSubmit={handleSubmit} className="w-full max-w-lg bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-white/20">
          {/* Name Field */}
          <div className="mb-5">
            <label className="block text-base font-medium text-white mb-1">Name</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="Enter your name"
              className="w-full p-2 text-xs bg-white/20 text-white rounded-lg border focus:ring-2 focus:ring-blue-500 transition" />
          </div>

          {/* Email Field */}
          <div className="mb-5">
            <label className="block text-base font-medium text-white mb-1">Email</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="Enter your email"
              className="w-full p-2 text-xs bg-white/20 text-white rounded-lg border focus:ring-2 focus:ring-blue-500 transition" />
          </div>

          {/* Message Field */}
          <div className="mb-5">
            <label className="block text-base font-medium text-white mb-1">Message</label>
            <textarea name="message" value={formData.message} onChange={handleChange} required placeholder="Enter your message"
              className="w-full p-2 text-xs bg-white/20 text-white rounded-lg border focus:ring-2 focus:ring-blue-500 transition h-24"></textarea>
          </div>

          {/* Submit Button */}
          <button type="submit" disabled={loading}
            className="w-full py-3 bg-gradient-to-r from-gray-500 to-gray-800 text-white text-base font-semibold rounded-lg transition shadow-lg">
            {loading ? "Sending..." : "Send Message"}
          </button>

          {/* Status Message */}
          {status && <p className="text-center mt-3 text-sm">{status}</p>}
        </form>
      </section>
      {/* Follow me section */}
      {/* Follow Me Section */}
      <section className="w-full bg-gray-800 text-white py-16 px-6 md:px-12 text-center">
        <h2 className="text-3xl font-playfair mb-6">Follow Me</h2>
        <p className="text-lg opacity-80 mb-6">Let’s Network and Stay Connected!</p>
        <div className="flex justify-center gap-6">
          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/akshat-shah3904/" target="_blank" rel="noopener noreferrer">
            <Image src="/logo/linkedIn.svg" alt="LinkedIn" width={40} height={40} className="hover:opacity-80 transition" />
          </a>
          {/* Twitter/X */}
          <a href="https://x.com/AkshatShah_04" target="_blank" rel="noopener noreferrer">
            <Image src="/logo/X.svg" alt="Twitter/X" width={40} height={40} className="hover:opacity-80 transition" />
          </a>
          {/* GitHub */}
          <a href="https://github.com/Akshat-Shah04" target="_blank" rel="noopener noreferrer">
            <Image src="/logo/github.svg" alt="GitHub" width={40} height={40} className="hover:opacity-80 transition" />
          </a>
          {/* Dev.to */}
          <a href="https://dev.to/akshatshah-04" target="_blank" rel="noopener noreferrer">
            <Image src="/logo/dev.png" alt="Dev.to" width={40} height={40} className="hover:opacity-80 transition" />
          </a>
          {/* Portfolio or other site */}
          {/* <a href="https://akshatshah.dev" target="_blank" rel="noopener noreferrer">
            <Image src="/portfolio.svg" alt="Portfolio" width={40} height={40} className="hover:opacity-80 transition" />
          </a> */}
        </div>
      </section>
    </main>
  );
}




