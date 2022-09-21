import { useMutation } from "@apollo/client";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import { Navbar } from "../components/navbar";
import { CONTACT_US } from "../graphql/mutations";
import styles from "../styles/ContactUs.module.css";

const ContactUs = () => {
  const [
    contactUs,
    { data: contactUsData, loading: contactUsLoading, error: contactUsError },
  ] = useMutation(CONTACT_US);

  const [disableButton, setDisableButton] = useState(true);
  const [showThanks, setShowThanks] = useState(false);

  const contactUsFunction = () => {
    contactUs({
      variables: {
        input: {
          email: input.email,
          description: input.description,
          subject: `RAW Contact`,
        },
      },
    }).then(() => {
      setShowThanks(true);

      setTimeout(() => {
        setShowThanks(false);
      }, 3000);
    });
  };

  const [input, setInput] = useState({
    name: "",
    email: "",
    description: "",
  });

  const changeInput = (key, value) => {
    setInput({
      ...input,
      [key]: value,
    });
  };

  useEffect(() => {
    if (input.name === "" || input.email === "" || input.description === "") {
      setDisableButton(true);
    } else setDisableButton(false);
  }, [input]);

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

        <form
          onSubmit={(e) => {
            e.preventDefault();
            contactUsFunction();
          }}
          className={styles.container}
        >
          <div className={styles.inputContainer}>
            <p className={styles.label}>Name</p>
            <input
              value={input.name}
              onChange={(e) => changeInput("name", e.target.value)}
              className={styles.input}
              placeholder="Enter your name"
            />
          </div>

          <div className={styles.inputContainer}>
            <p className={styles.label}>Email</p>
            <input
              value={input.email}
              onChange={(e) => changeInput("email", e.target.value)}
              className={styles.input}
              placeholder="Enter your email"
            />
          </div>

          <div className={styles.inputContainer}>
            <p className={styles.label}>Message</p>
            <textarea
              value={input.description}
              onChange={(e) => changeInput("description", e.target.value)}
              className={[styles.textarea]}
              placeholder="Enter your message"
            />
          </div>

          <button
            type="submit"
            onClick={() => contactUsFunction()}
            className={
              disableButton || contactUsLoading
                ? styles.disableButton
                : styles.sendButton
            }
            disabled={disableButton || contactUsLoading}
          >
            {contactUsLoading ? "Sending message..." : "Send Message"}
          </button>

          {showThanks && (
            <p className={styles.thankYou}>
              Thank you for your message, We will get back with a reply very
              soon.
            </p>
          )}
        </form>
      </div>

      <div className={styles.footerContainer}>
        <div className={styles.footerLeft}>
          <img className={styles.logo} src="/rawblacktext.png" />
          <p className={styles.footerDescription}>
            Copyright 2022. All rights reserved
          </p>
          <div className={styles.privacy__links}>
            <a
              href="https://www.privacypolicies.com/live/a12aac82-6d6f-4e51-a6f0-0a8510939e62"
              target="_blank"
              className={styles.terms}
              rel="noreferrer"
            >
              Privacy Policy
            </a>
            <a
              href="https://www.app-privacy-policy.com/live.php?token=nXyyUuGWpj2d8k2nmSF8ywsGt0HwFEjp"
              target="_blank"
              className={styles.terms}
              rel="noreferrer"
            >
              Terms & Conditions
            </a>
          </div>
        </div>

        <div className={styles.footerRight}>
          <h1 className={styles.footerRightText}>Social Media</h1>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://twitter.com/getrawapp"
          >
            <img className={styles.socialMediaIcon} src="/twitter.jpeg" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/raw_app/"
          >
            <img className={styles.socialMediaIcon} src="/instagramLogo.svg" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
