"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment, ContactShadows, Text3D, Center } from "@react-three/drei";
import styles from "./Hero.module.css";
import { Download, ExternalLink, Mail } from "lucide-react";

// 3D Floating Icons/Elements Component
function FloatingTech() {
  const group = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    group.current.rotation.y = Math.sin(t / 4) / 4;
    group.current.rotation.z = Math.cos(t / 4) / 4;
    group.current.position.y = Math.sin(t / 1.5) / 10;
  });

  return (
    <group ref={group}>
      <Float speed={2} rotationIntensity={1} floatIntensity={2}>
        <mesh position={[1, 1, 0]} rotation={[0.5, 0.5, 0]}>
          <boxGeometry args={[0.8, 0.8, 0.8]} />
          <meshStandardMaterial color="#00e5ff" wireframe />
        </mesh>
      </Float>
      
      <Float speed={1.5} rotationIntensity={1.5} floatIntensity={1.5}>
        <mesh position={[-1.5, -0.5, 1]} rotation={[-0.5, 0.5, 0]}>
          <octahedronGeometry args={[0.6]} />
          <meshStandardMaterial color="#9d4edd" wireframe />
        </mesh>
      </Float>

      <Float speed={2.5} rotationIntensity={0.5} floatIntensity={1}>
        <mesh position={[0.5, -1.5, -0.5]} rotation={[0.5, -0.5, 0]}>
          <torusGeometry args={[0.4, 0.1, 16, 32]} />
          <meshStandardMaterial color="#ffffff" wireframe />
        </mesh>
      </Float>
    </group>
  );
}

const roles = ["React.js", "Django", "React Native", "AI", "Next.js"];

export default function Hero() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.heroSection} id="home">
      {/* Background Particles/Glows */}
      <div className={styles.glowCircle1}></div>
      <div className={styles.glowCircle2}></div>

      <div className={styles.container}>
        <div className={styles.textContent}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className={styles.greeting}>HELLO WORLD, I AM</h2>
            <h1 className={styles.name}>
              KRISHAN <span className="neon-text-blue">ROY</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className={styles.headline}>
              Computer Science Engineering Student | Full Stack Developer | AI Builder
            </h3>
            
            <div className={styles.typingContainer}>
              <span className={styles.staticText}>I build with </span>
              <motion.span
                key={currentRoleIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className={styles.dynamicText}
              >
                {roles[currentRoleIndex]}
              </motion.span>
            </div>

            <p className={styles.subheadline}>
              I build scalable web apps, mobile apps, and intelligent AI-powered solutions with modern technologies.
            </p>
          </motion.div>

          <motion.div 
            className={styles.buttonGroup}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <a href="#projects" className={`${styles.btn} ${styles.primaryBtn}`}>
              View Projects <ExternalLink size={18} />
            </a>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className={`${styles.btn} ${styles.secondaryBtn}`}>
              Resume <Download size={18} />
            </a>
            <a href="#contact" className={`${styles.btn} ${styles.ghostBtn}`}>
              Contact <Mail size={18} />
            </a>
          </motion.div>
        </div>

        <div className={styles.canvasContainer}>
          <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
            <pointLight position={[-10, -10, -10]} intensity={0.5} />
            <FloatingTech />
            <ContactShadows position={[0, -2, 0]} opacity={0.5} scale={10} blur={2} far={4} />
            <Environment preset="city" />
          </Canvas>
        </div>
      </div>
    </section>
  );
}
