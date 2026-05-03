"use client";

import { motion } from "framer-motion";
import styles from "./Projects.module.css";
import { ExternalLink, FileText } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export default function Projects() {
  const projects = [
    {
      title: "Agentic RAG for Legal Research",
      tagline: "AI-powered legal research platform built for Smart India Hackathon.",
      details: [
        "Secured 6th Rank among 420 teams",
        "Built responsive frontend using Next.js, React, TypeScript",
        "Added Framer Motion animations & Three.js visuals",
        "AI + RAG based legal research workflow"
      ],
      tags: ["Next.js", "AI", "RAG", "TypeScript", "Three.js"],
      links: [
        { name: "Live Demo", icon: <ExternalLink size={16} />, href: "https://dhara-sih.vercel.app/" },
        { name: "GitHub", icon: <FaGithub size={16} />, href: "https://github.com/krishhan/DHARA_SIH" },
        { name: "Case Study", icon: <FileText size={16} />, href: "#" }
      ],
      gradient: "linear-gradient(135deg, rgba(0, 229, 255, 0.1), rgba(157, 78, 221, 0.1))"
    },
    {
      title: "QuickBites – Food Ordering App",
      tagline: "Modern mobile food ordering application.",
      details: [
        "Built modern mobile app using React Native",
        "Firebase authentication (Login / Signup)",
        "Home, Cart, Payment, Profile, Order History",
        "Context API for global state management"
      ],
      tags: ["React Native", "Firebase", "Context API"],
      links: [
        { name: "GitHub", icon: <FaGithub size={16} />, href: "https://github.com/krishhan/QuickBites" }
      ],
      gradient: "linear-gradient(135deg, rgba(157, 78, 221, 0.1), rgba(255, 0, 128, 0.1))"
    }
  ];

  return (
    <section className={styles.projectsSection} id="projects">
      <div className={styles.container}>
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="neon-text-blue">03.</h2>
          <h3 className={styles.title}>Featured Projects</h3>
          <div className={styles.line}></div>
        </motion.div>

        <div className={styles.projectsGrid}>
          {projects.map((project, idx) => (
            <motion.div 
              key={idx}
              className={`glass-card ${styles.projectCard}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              whileHover={{ scale: 1.02 }}
              style={{ background: `var(--glass-bg), ${project.gradient}` }}
            >
              <div className={styles.cardContent}>
                <h4 className={styles.projectTitle}>{project.title}</h4>
                <p className={styles.projectTagline}>{project.tagline}</p>
                
                <ul className={styles.projectDetails}>
                  {project.details.map((detail, dIdx) => (
                    <li key={dIdx}>{detail}</li>
                  ))}
                </ul>

                <div className={styles.projectTags}>
                  {project.tags.map((tag, tIdx) => (
                    <span key={tIdx} className={styles.tag}>{tag}</span>
                  ))}
                </div>

                <div className={styles.projectLinks}>
                  {project.links.map((link, lIdx) => (
                    <a key={lIdx} href={link.href} className={styles.linkBtn}>
                      {link.icon}
                      <span>{link.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
