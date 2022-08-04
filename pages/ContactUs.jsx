import Head from "next/head";
import React from "react";
import { Navbar } from "../components/navbar";
import styles from "../styles/ContactUs.module.css";

const ContactUs = () => {
  return (
    <div>
      <Head>
        <title>
          RAW - Single Subscription to access gyms Worldwide | Contact Us
        </title>
        <meta
          name="description"
          content="Contact RAW for any questions, inquiries or any recommendations that you have to make the product better."
        />
        <link rel="icon" href="/rawLogoBlack.png" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>

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
