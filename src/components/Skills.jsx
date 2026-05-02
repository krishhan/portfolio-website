"use client";

import { motion } from "framer-motion";
import styles from "./Skills.module.css";
import { Code2, Database, LayoutTemplate, Layers, Server, TerminalSquare } from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      icon: <TerminalSquare size={24} className="neon-text-blue" />,
      skills: ["Python", "JavaScript", "HTML", "CSS"]
    },
    {
      title: "Frontend",
      icon: <LayoutTemplate size={24} className="neon-text-purple" />,
      skills: ["React.js", "Next.js", "Bootstrap", "Tailwind CSS", "React Native"]
    },
    {
      title: "Backend",
      icon: <Server size={24} className="neon-text-blue" />,
      skills: ["Django", "REST APIs", "Firebase"]
    },
    {
      title: "Database",
      icon: <Database size={24} className="neon-text-purple" />,
      skills: ["MongoDB", "MySQL"]
    },
    {
      title: "Advanced / Tools",
      icon: <Code2 size={24} className="neon-text-blue" />,
      skills: ["Framer Motion", "Three.js", "GitHub", "Context API"]
    },
    {
      title: "Concepts",
      icon: <Layers size={24} className="neon-text-purple" />,
      skills: ["Full Stack Dev", "API Integration", "Responsive Design", "Auth Systems", "UI/UX Thinking"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className={styles.skillsSection} id="skills">
      <div className={styles.container}>
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="neon-text-blue">02.</h2>
          <h3 className={styles.title}>Technical Skills</h3>
          <div className={styles.line}></div>
        </motion.div>

        <motion.div 
          className={styles.skillsGrid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {skillCategories.map((category, idx) => (
            <motion.div 
              key={idx} 
              className={`glass-card ${styles.skillCard}`}
              variants={itemVariants}
              whileHover={{ 
                y: -10, 
                boxShadow: "0 15px 30px rgba(0,229,255,0.1)",
                borderColor: "rgba(0, 229, 255, 0.3)" 
              }}
            >
              <div className={styles.cardHeader}>
                {category.icon}
                <h4 className={styles.cardTitle}>{category.title}</h4>
              </div>
              <div className={styles.skillsList}>
                {category.skills.map((skill, sIdx) => (
                  <span key={sIdx} className={styles.skillBadge}>
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
