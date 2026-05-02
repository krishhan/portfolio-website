"use client";

import { motion } from "framer-motion";
import styles from "./About.module.css";
import { CheckCircle2 } from "lucide-react";

export default function About() {
  const traits = [
    "Quick Learner",
    "Strong Communicator",
    "Team Player",
    "Competitive Mindset",
    "Builder Mentality"
  ];

  return (
    <section className={styles.aboutSection} id="about">
      <div className={styles.container}>
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="neon-text-blue">01.</h2>
          <h3 className={styles.title}>About Me</h3>
          <div className={styles.line}></div>
        </motion.div>

        <div className={styles.splitLayout}>
          <motion.div 
            className={styles.textContent}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className={styles.paragraph}>
              I am a Computer Science student at Bennett University passionate about building impactful digital products. 
              From full-stack applications to AI-powered systems, I enjoy solving real-world problems through clean code and smart design.
            </p>
            <p className={styles.paragraph}>
              I love creating products that are fast, modern, scalable, and user-friendly. 
              My journey in tech is driven by a constant desire to learn and push the boundaries of what I can build.
            </p>
          </motion.div>

          <motion.div 
            className={`glass-card ${styles.traitsCard}`}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h4 className={styles.cardTitle}>Why work with me?</h4>
            <ul className={styles.traitsList}>
              {traits.map((trait, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                  className={styles.traitItem}
                  whileHover={{ x: 10, color: "var(--accent-blue)" }}
                >
                  <CheckCircle2 className={styles.icon} size={20} />
                  <span>{trait}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
