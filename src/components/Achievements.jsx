"use client";

import { motion } from "framer-motion";
import styles from "./Achievements.module.css";
import { Trophy, Award, Target, GraduationCap } from "lucide-react";

export default function Achievements() {
  const achievements = [
    {
      icon: <Trophy size={20} className={styles.icon} />,
      title: "Smart India Hackathon",
      description: "Secured 6th Rank among 420 teams.",
      date: "2023"
    },
    {
      icon: <Target size={20} className={styles.icon} />,
      title: "SSB Final Stage",
      description: "Qualified SSB Final Stage 4 Times.",
      date: "2023"
    },
    {
      icon: <Award size={20} className={styles.icon} />,
      title: "Sports Excellence",
      description: "Represented College Football Team & achieved multiple podium finishes in inter-college competitions.",
      date: "2023 - Present"
    }
  ];

  const education = [
    {
      icon: <GraduationCap size={20} className={styles.iconAlt} />,
      title: "Bennett University",
      subtitle: "B.Tech in Computer Science Engineering",
      date: "2023 – 2027"
    }
  ];

  return (
    <section className={styles.achievementsSection} id="achievements">
      <div className={styles.container}>
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="neon-text-blue">04.</h2>
          <h3 className={styles.title}>Achievements & Education</h3>
          <div className={styles.line}></div>
        </motion.div>

        <div className={styles.grid}>
          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Achievements</h4>
            <div className={styles.timeline}>
              {achievements.map((item, idx) => (
                <motion.div 
                  key={idx}
                  className={`glass-card ${styles.timelineItem}`}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <div className={styles.iconContainer}>{item.icon}</div>
                  <div className={styles.content}>
                    <span className={styles.date}>{item.date}</span>
                    <h5 className={styles.itemTitle}>{item.title}</h5>
                    <p className={styles.itemDescription}>{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Education</h4>
            <div className={styles.timeline}>
              {education.map((item, idx) => (
                <motion.div 
                  key={idx}
                  className={`glass-card ${styles.timelineItem}`}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <div className={`${styles.iconContainer} ${styles.iconContainerAlt}`}>{item.icon}</div>
                  <div className={styles.content}>
                    <span className={styles.date}>{item.date}</span>
                    <h5 className={styles.itemTitle}>{item.title}</h5>
                    <p className={styles.itemDescription}>{item.subtitle}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
