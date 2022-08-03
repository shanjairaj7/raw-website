import Link from "next/link";
import React from "react";
import styles from "../styles/Navbar.module.css";

export const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <Link href="/">
        <h1 className={styles.logo}>RAW</h1>
      </Link>
      <div className={styles.links}>
        <Link style={styles.linkText} href="/SupportedLocations">
          <a className={styles.link}>Supported Locations</a>
        </Link>
        <Link style={styles.linkText} href="/ContactUs">
          <a className={styles.link}>Contact Us</a>
        </Link>
      </div>
    </div>
  );
};
