import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { BiMenu } from "react-icons/bi";
import { HiArrowRight } from "react-icons/hi";
import { Link as ScrollLink } from "react-scroll";
import styles from "../styles/Navbar.module.css";

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

          {/* <ScrollLink
            className={styles.dropdownLink}
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            to="features"
          > */}
          <div className={styles.dropdownLinkContainer}>
            <a className={styles.dropdownLinkText}>Features</a>
            <img className={styles.rightArrow} src="/rightArrow.png" />
          </div>
          {/* </ScrollLink> */}

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
          <BiMenu
            className={styles.menuIcon}
            color="black"
            onClick={() => setShowDropdown(true)}
            fontSize={30}
          />
          {/* <img
            className={styles.menuIcon}
            width="30px"
            height="30px"
            src="/menuIconWhite.png"
            onClick={() => setShowDropdown(true)}
          /> */}

          <Link href="/">
            <Image
              width={80}
              height={20}
              className={styles.logo}
              src="/rawblacktext.png"
              alt="rawapp logo"
            />
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
          <Link href="/">
            <ScrollLink
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              to="features"
              className={styles.link}
              href="/"
            >
              Features
            </ScrollLink>
          </Link>
          {/* <Link className={styles.linkText} href="/ContactUs">
            <a className={styles.link}></a>
          </Link> */}
          <Link className={styles.linkText} href="/ContactUs">
            <a className={styles.link}>Contact us</a>
          </Link>
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
