"use client";

import { motion } from "framer-motion";
import styles from "./Profiles.module.css";
import { Code } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Profiles() {
  const profiles = [
    {
      name: "GitHub",
      url: "https://github.com/krishhan",
      icon: <FaGithub size={32} />,
      color: "#ffffff",
      available: true
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/krishan-roy",
      icon: <FaLinkedin size={32} />,
      color: "#0a66c2",
      available: true
    }
  ];

  return (
    <section className={styles.profilesSection}>
      <div className={styles.container}>
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="neon-text-blue">05.</h2>
          <h3 className={styles.title}>Coding Profiles</h3>
          <div className={styles.line}></div>
        </motion.div>

        <div className={styles.grid}>
          {profiles.map((profile, idx) => (
            <motion.a
              key={idx}
              href={profile.available ? profile.url : undefined}
              target={profile.available ? "_blank" : undefined}
              rel={profile.available ? "noopener noreferrer" : undefined}
              className={`glass-card ${styles.profileCard} ${!profile.available ? styles.unavailable : ''}`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={profile.available ? { y: -10, boxShadow: `0 10px 30px ${profile.color}33` } : {}}
              style={profile.available ? { '--hover-color': profile.color } : {}}
            >
              <div className={styles.iconWrapper} style={{ color: profile.available ? profile.color : '#666' }}>
                {profile.icon}
              </div>
              <h4 className={styles.profileName}>{profile.name}</h4>
              {!profile.available && <span className={styles.comingSoon}>Coming Soon</span>}
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
