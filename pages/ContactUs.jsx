import React from "react";
import { Navbar } from "../components/navbar";
import styles from "../styles/ContactUs.module.css";

const ContactUs = () => {
  return (
    <div>
      <Navbar />

      <div className={styles.contactUs}>
        <div className={styles.header}>
          <h1>Contact Us</h1>
          <p className={styles.headerDescription}>
            Send us a message if you have any questions, inquiries or any
            recommendations that would make your experience with the app better.
          </p>
        </div>

        <div className={styles.container}>
          <div className={styles.inputContainer}>
            <p className={styles.label}>Name</p>
            <input className={styles.input} placeholder="Enter your name" />
          </div>

          <div className={styles.inputContainer}>
            <p className={styles.label}>Email</p>
            <input className={styles.input} placeholder="Enter your email" />
          </div>

          <div className={styles.inputContainer}>
            <p className={styles.label}>Message</p>
            <textarea
              className={[styles.textarea]}
              placeholder="Enter your message"
            />
          </div>

          <button className={styles.sendButton}>Send Message</button>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
