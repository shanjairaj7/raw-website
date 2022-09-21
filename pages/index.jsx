import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "../components/navbar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.container}>
        <Head>
          <title>RAW - Single Subscription to access gyms Worldwide</title>
          <meta
            name="description"
            content="Get access to gyms from anywhere around the world, Track your
                fitness activity and keep your fitness goals in track, all with
                a single Subscription."
          />
          <link rel="icon" href="/rawLogoBlack.png" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
            rel="stylesheet"
          />
        </Head>

        <Navbar />
        <main className={styles.header}>
          <div className={styles.headerContainer}>
            <div className={styles.headerLeft}>
              <h1 className={styles.title}>
                Your{" "}
                <span className={styles.greenUnderline}>
                  Single Subscription
                </span>{" "}
                to access all Fitness centers anywhere you go!
              </h1>
              <p className={styles.description}>
                Get access to gyms from anywhere around the world, Track your
                fitness activity and keep your fitness goals in track, all with
                a single Subscription.
              </p>

              <div className={styles.buttons}>
                <a
                  target="_blank"
                  href="https://apps.apple.com/app/raw-fitness-for-you/id1642336260?platform=iphone"
                  className={styles.iosDownloadButton}
                  rel="noreferrer"
                >
                  <Image
                    className={styles.icon}
                    src="/appleIconWhite.png"
                    width={22}
                    height={22}
                  />
                  <p className={styles.buttonText}>Download for iOS</p>
                </a>

                <button className={styles.androidDownloadButton}>
                  <Image
                    className={styles.icon}
                    src="/androidIcon.png"
                    width={22}
                    height={22}
                  />
                  <p className={styles.buttonText}>Download for Android</p>
                  <p className={styles.soon}>Coming Soon!</p>
                </button>
              </div>

              <Link href="/SupportedLocations">
                <p className={styles.supportedLocationsLink}>
                  or check the supported locations
                </p>
              </Link>
            </div>

            <img className={styles.image} src="/rawAppScreens.png" />
          </div>
        </main>
      </div>

      <div className={styles.benefitsContainer}>
        <div className={styles.benefit}>
          <img className={styles.benefitImage} src="/demo1.png" />

          <div className={styles.benefitLeft}>
            <p className={styles.label}>1</p>
            <h1 className={styles.benefitLeftTitle}>
              Browse Gyms from around the world.
            </h1>
            <p className={styles.benefitLeftDescription}>
              Browse gyms near your or any location around the world, based on
              your filters.
            </p>
            <a
              className={styles.linkContainer}
              href="https://apps.apple.com/app/raw-fitness-for-you/id1642336260?platform=iphone"
              target="_blank"
              rel="noreferrer"
            >
              <p className={styles.linkContainerText}>Get the App ▶ </p>
              <img className={styles.rightIcon} src="/rightIcon.png" />
            </a>
          </div>
        </div>

        <div className={styles.benefit}>
          <img className={styles.benefitImage} src="/viewGymImage.png" />

          <div className={styles.benefitLeft}>
            <p className={styles.label}>2</p>
            <h1 className={styles.benefitLeftTitle}>
              View Gym Information before you Go.
            </h1>
            <p className={styles.benefitLeftDescription}>
              Get to know information about the gym before you go, to make sure
              you don't get any sudden suprises when you reach there!
            </p>
            <a
              className={styles.linkContainer}
              href="https://apps.apple.com/app/raw-fitness-for-you/id1642336260?platform=iphone"
              target="_blank"
              rel="noreferrer"
            >
              <p className={styles.linkContainerText}>Get the App ▶ </p>
              <img className={styles.rightIcon} src="/rightIcon.png" />
            </a>
          </div>
        </div>

        <div className={styles.benefit}>
          <img className={styles.benefitImage} src="/demo2.png" />

          <div className={styles.benefitLeft}>
            <p className={styles.label}>3</p>
            <h1 className={styles.benefitLeftTitle}>
              Track your activity and reach your goals.
            </h1>
            <p className={styles.benefitLeftDescription}>
              Get information about your fitness journey through analytics to
              help you keep track and reach your fitness goals.
            </p>
            <a
              className={styles.linkContainer}
              href="https://apps.apple.com/app/raw-fitness-for-you/id1642336260?platform=iphone"
              target="_blank"
              rel="noreferrer"
            >
              <p className={styles.linkContainerText}>Get the App ▶ </p>

              <img className={styles.rightIcon} src="/rightIcon.png" />
            </a>
          </div>
        </div>

        <div className={styles.benefit}>
          <img className={styles.benefitImage} src="/demo3.png" />

          <div className={styles.benefitLeft}>
            <p className={styles.label}>4</p>
            <h1 className={styles.benefitLeftTitle}>
              Scan QR Code to create your activity!
            </h1>
            <p className={styles.benefitLeftDescription}>
              Simply scan the QR Code at the gym to get access and to start your
              activity.
            </p>
            <a
              className={styles.linkContainer}
              href="https://apps.apple.com/app/raw-fitness-for-you/id1642336260?platform=iphone"
              target="_blank"
              rel="noreferrer"
            >
              <p className={styles.linkContainerText}>Get the App ▶ </p>
              <img className={styles.rightIcon} src="/rightIcon.png" />
            </a>
          </div>
        </div>
      </div>

      <div className={styles.footerCallToAction}>
        {/* <img className={styles.footerImage} src="/endFooter.png" /> */}

        <div className={styles.footerContent}>
          <h1 className={styles.footerTitle}>
            Get access to Gyms worldwide with a Single Subscription.
          </h1>
          <p className={styles.footerContentDescription}>
            Get access to high quality gyms all around the world with a single
            subscription, track your fitness progress and reach your fitness
            goals.
          </p>

          {/* className={styles.linkContainer}
              href="https://apps.apple.com/app/raw-fitness-for-you/id1642336260?platform=iphone"
              target="_blank"
              rel="noreferrer" */}

          <div>
            <a
              href="https://apps.apple.com/app/raw-fitness-for-you/id1642336260?platform=iphone"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className={styles.downloadImage}
                src="/downloadAppStore.png"
              />
            </a>

            <img
              className={styles.googlePlayImage}
              src="/googlePlayStore.png"
            />
          </div>
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
}
