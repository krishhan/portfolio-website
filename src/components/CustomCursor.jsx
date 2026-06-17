"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import styles from "./CustomCursor.module.css";

export default function CustomCursor() {
  const [isMounted, setIsMounted] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [showCursor, setShowCursor] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      // Disable custom cursor on touch/mobile devices
      const isTouch = window.matchMedia("(pointer: coarse)").matches;
      const isMobileScreen = window.innerWidth <= 768;
      setShowCursor(!isTouch && !isMobileScreen);
    };

    checkDevice();
    window.addEventListener("resize", checkDevice);
    setIsMounted(true);

    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (!target) return;

      // Check if target or ancestor is interactive (links, buttons, form controls, etc.)
      const isInteractive =
        target.closest("a") ||
        target.closest("button") ||
        target.closest("input") ||
        target.closest("textarea") ||
        target.closest("[role='button']") ||
        window.getComputedStyle(target).cursor === "pointer";

      setIsHovered(!!isInteractive);
    };

    window.addEventListener("mousemove", updateMousePosition);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("resize", checkDevice);
      window.removeEventListener("mousemove", updateMousePosition);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [isVisible]);

  if (!isMounted || !showCursor) return null;

  return (
    <>
      {/* Ambient background glow tracking mouse with moderate lag */}
      <motion.div
        className={styles.cursorGlow}
        animate={{
          x: mousePosition.x - 200,
          y: mousePosition.y - 200,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          x: { type: "tween", ease: "backOut", duration: 0.5 },
          y: { type: "tween", ease: "backOut", duration: 0.5 },
          opacity: { duration: 0.2 },
        }}
      />

      {/* Precise center dot tracking mouse instantly (very fast spring) */}
      <motion.div
        className={styles.cursorDot}
        animate={{
          x: mousePosition.x - (isHovered ? 8 : 4),
          y: mousePosition.y - (isHovered ? 8 : 4),
          scale: isHovered ? 2.5 : 1,
          backgroundColor: isHovered ? "var(--accent-purple)" : "var(--accent-blue)",
          boxShadow: isHovered
            ? "0 0 16px var(--accent-purple), 0 0 8px var(--accent-purple)"
            : "0 0 8px var(--accent-blue)",
          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          x: { type: "spring", stiffness: 1000, damping: 45, mass: 0.1 },
          y: { type: "spring", stiffness: 1000, damping: 45, mass: 0.1 },
          scale: { type: "spring", stiffness: 400, damping: 25 },
          backgroundColor: { duration: 0.2 },
          opacity: { duration: 0.15 },
        }}
      />
    </>
  );
}
