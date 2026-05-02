"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import styles from "./Contact.module.css";
import { Mail, Phone, MapPin, Send, Download, FileText } from "lucide-react";

export default function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({ name: "", email: "", message: "" });
      setTimeout(() => setIsSubmitted(false), 3000);
    }, 1500);
  };

  return (
    <section className={styles.contactSection} id="contact">
      <div className={styles.container}>
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="neon-text-blue">06.</h2>
          <h3 className={styles.title}>Get In Touch</h3>
          <div className={styles.line}></div>
        </motion.div>

        <div className={styles.splitLayout}>
          <motion.div 
            className={styles.contactInfo}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <h4 className={styles.infoTitle}>Let's build something amazing together.</h4>
            <p className={styles.infoDesc}>
              Whether you have a question, a project idea, or just want to say hi, I'll try my best to get back to you!
            </p>

            <div className={styles.infoItems}>
              <div className={styles.infoItem}>
                <div className={styles.iconWrapper}><Mail size={20} className="neon-text-blue" /></div>
                <span>roykrishan382@gmail.com</span>
              </div>
              <div className={styles.infoItem}>
                <div className={styles.iconWrapper}><Phone size={20} className="neon-text-purple" /></div>
                <span>+91 6289355496</span>
              </div>
              <div className={styles.infoItem}>
                <div className={styles.iconWrapper}><MapPin size={20} className="neon-text-blue" /></div>
                <span>Greater Noida, India</span>
              </div>
            </div>

            <div className={`glass-card ${styles.resumeCard}`} id="resume">
              <div className={styles.resumeIcon}><FileText size={24} className="neon-text-purple" /></div>
              <div className={styles.resumeInfo}>
                <h5>Download My Resume</h5>
                <p>One-page PDF Resume</p>
              </div>
              <a href="https://app.luminpdf.com/viewer/69f658830c28128f2ae2f20f" target="_blank" rel="noopener noreferrer" className={styles.downloadBtn}>
                <Download size={18} />
              </a>
            </div>
          </motion.div>

          <motion.form 
            className={`glass-card ${styles.contactForm}`}
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className={styles.formGroup}>
              <label htmlFor="name">Name</label>
              <input 
                type="text" 
                id="name" 
                required 
                value={formState.name}
                onChange={(e) => setFormState({...formState, name: e.target.value})}
                placeholder="John Doe"
              />
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="email">Email</label>
              <input 
                type="email" 
                id="email" 
                required 
                value={formState.email}
                onChange={(e) => setFormState({...formState, email: e.target.value})}
                placeholder="john@example.com"
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message">Message</label>
              <textarea 
                id="message" 
                required 
                rows="5"
                value={formState.message}
                onChange={(e) => setFormState({...formState, message: e.target.value})}
                placeholder="Hello Krishan, I'd like to talk about..."
              ></textarea>
            </div>

            <button 
              type="submit" 
              className={styles.submitBtn}
              disabled={isSubmitting || isSubmitted}
            >
              {isSubmitting ? (
                <span>Sending...</span>
              ) : isSubmitted ? (
                <span>Sent Successfully!</span>
              ) : (
                <>
                  <span>Send Message</span>
                  <Send size={18} />
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
