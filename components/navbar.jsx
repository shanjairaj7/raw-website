import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useState } from "react";
import styles from "../styles/Navbar.module.css";
import { HiArrowRight } from "react-icons/hi";

export const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className={styles.navbar}>
      {showDropdown && (
        <div className={styles.navbarDropdown}>
          <img
            className={styles.closeIcon}
            src="/closeIconBlack.png"
            onClick={() => setShowDropdown(false)}
          />

          <Link className={styles.dropdownLink} href="/SupportedLocations">
            <div className={styles.dropdownLinkContainer}>
              <a className={styles.dropdownLinkText}>Supported Locations</a>
              <img className={styles.rightArrow} src="/rightArrow.png" />
            </div>
          </Link>

          <Link className={styles.dropdownLink} href="/ContactUs">
            <div className={styles.dropdownLinkContainer}>
              <a className={styles.dropdownLinkText}>Contact Us</a>
              <img className={styles.rightArrow} src="/rightArrow.png" />
            </div>
          </Link>
        </div>
      )}

      <div className={styles.navbarLeft}>
        <div className={styles.navbarLeftMain}>
          <img
            className={styles.menuIcon}
            width="30px"
            height="30px"
            src="/menuIconWhite.png"
            onClick={() => setShowDropdown(true)}
          />

          <Link href="/">
            <img className={styles.logo} src="/rawblacktext.png" />
          </Link>
        </div>

        <Link href="/JoinWaitlist">
          <a href="#" className={styles.waitlistButton}>
            <p className={styles.waitlistButtonText}>Join the Waitlist</p>
          </a>
        </Link>
      </div>

      <div className={styles.links}>
        <div className={styles.middleLinks}>
          <Link className={styles.linkText} href="/SupportedLocations">
            <a className={styles.link}>Features</a>
          </Link>
          <Link className={styles.linkText} href="/ContactUs">
            <a className={styles.link}></a>
          </Link>
          {/* <Link className={styles.linkText} href="/ContactUs">
            <a className={styles.link}>Supported Locations</a>
          </Link> */}
        </div>

        <Link href="/JoinWaitlist">
          <a href="#" className={styles.waitlistButtonNavbar}>
            <p className={styles.waitlistButtonText}>Join the Waitlist</p>
            <HiArrowRight className={styles.waitlistIcon} color="black" />
          </a>
        </Link>
      </div>
    </div>
  );
};
