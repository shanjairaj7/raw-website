import { useMutation } from "@apollo/client";
import Head from "next/head";
import React, { useState } from "react";
import { Navbar } from "../components/navbar";
import { CONTACT_US } from "../graphql/mutations";
import styles from "../styles/JoinWaitlist.module.css";

const JoinWaitlist = () => {
  const [
    contactUs,
    { data: contactUsData, loading: contactUsLoading, error: contactUsError },
  ] = useMutation(CONTACT_US);

  const [errorMessage, setErrorMessage] = useState(null);

  const contactUsFunction = (e) => {
    e.preventDefault();

    if (input.name === "" || input.email === "") {
      setErrorMessage("Please enter your Name and Email.");
    } else {
      setErrorMessage(null);
      contactUs({
        variables: {
          input: {
            email: input.email,
            description: `${input.name} (${input.email}) from - ${input.country}`,
            subject: `RAW Waiting List`,
          },
        },
      })
        .then(() => {
          setShowModal(true);
          setErrorMessage(null);

          setInput({
            name: "",
            email: "",
            country: "",
          });
        })
        .catch((err) => {
          setErrorMessage("Error when adding to Waitlist. Please try again.");
        });
    }
  };

  const [input, setInput] = useState({
    name: "",
    email: "",
    country: "",
  });

  const changeInput = (target, value) => {
    setInput({
      ...input,
      [target]: value,
    });
  };

  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <Head>
        <title>
          RAW - Single Subscription to access gyms Worldwide | Supported
          Locations
        </title>
        <meta
          name="description"
          content="Check out the supported locations where RAW is available with Gym Locations"
        />
        <link rel="icon" href="/rawLogoBlack.png" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Navbar />

      {showModal && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <img src="/checkIcon.png" className={styles.waitlistImage} />
            <h1 className={styles.waitlistModalTitle}>
              Thanks for Joining our Waiting List!
            </h1>
            <p className={styles.waitlistModalDescription}>
              We will keep you updated on the progress of our product, and once
              we launch our Product.
            </p>

            <img
              onClick={() => setShowModal(false)}
              src="/closeIconBlack.png"
              className={styles.closeIcon}
            />
          </div>
          <div
            onClick={() => setShowModal(false)}
            className={styles.modalContainer}
          ></div>
        </div>
      )}

      <div className={styles.waitlistContent}>
        <div className={styles.waitlistContainer}>
          <div className={styles.waitlistContainerLeft}>
            <h1 className={styles.waitlistTitle}>Join our waitlist!</h1>
            <p className={styles.waitlistDescription}>
              <p className={styles.waitlistDescriptionText}>
                We will be launching in Dubai very soon. Join our waitlist to
                get access to our app as soon as we launch together with many
                offers.
              </p>

              {/* <p className={styles.waitlistDescriptionText}>
              We also appreciate any feedback from our customers on making our
              app better, please send us an
            </p> */}
            </p>
          </div>

          <form
            onSubmit={(e) => contactUsFunction(e)}
            className={styles.waitlistForm}
          >
            <div className={styles.inputContainer}>
              <label className={styles.inputLabel}>Name</label>
              <input
                value={input.name}
                onChange={(e) => changeInput("name", e.target.value)}
                autoFocus
                className={styles.input}
                placeholder="Enter your Name"
              />
            </div>

            <div className={styles.inputContainer}>
              <label className={styles.inputLabel}>Email</label>
              <input
                value={input.email}
                onChange={(e) => changeInput("email", e.target.value)}
                className={styles.input}
                placeholder="Enter your email"
              />
            </div>

            <div className={styles.inputContainer}>
              <label className={styles.inputLabel}>Country (optional)</label>
              <input
                value={input.country}
                onChange={(e) => changeInput("country", e.target.value)}
                className={styles.input}
                placeholder="Where do you live?"
              />
              <p className={styles.placeholder}>
                This helps us understand where our customers are from and where
                to expand into next.
              </p>
            </div>

            {errorMessage && (
              <p className={styles.errorMessage}>{errorMessage}</p>
            )}

            <button
              type="submit"
              onClick={(e) => contactUsFunction(e)}
              className={styles.joinButton}
            >
              {contactUsLoading ? "Joining waitlist..." : "Join the Waitlist"}
            </button>
          </form>
        </div>
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

export default JoinWaitlist;
