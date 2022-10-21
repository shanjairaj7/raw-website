import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "../components/navbar";
import styles from "../styles/Home.module.css";
import { AiFillApple, AiFillAndroid } from "react-icons/ai";

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
              <p className={styles.welcomeText}>WELCOME TO RAW</p>
              <h1 className={styles.title}>
                Explore multiple workouts & expand your fitness.
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
                  {/* <p className={styles.soon}>Coming Soon!</p> */}
                </button>
              </div>
              {/* 
              <Link href="/SupportedLocations">
                <p className={styles.supportedLocationsLink}>
                  or check the supported locations
                </p>
              </Link> */}
            </div>

            <img className={styles.image} src="/appScreenshot.png" />
          </div>
        </main>
      </div>

      <div className={styles.benefitsContainer}>
        <div className={styles.benefitsHeader}>
          <h1>Features</h1>
          <div className={styles.headerLine}></div>
        </div>

        <div className={styles.benefit}>
          <img className={styles.benefitImage} src="/appScreenshot1.png" />

          <div className={styles.benefitLeft}>
            <p className={styles.label}>EXPLORE</p>
            <h1 className={styles.benefitLeftTitle}>
              Diversify your fitness with multiple workout options.
            </h1>
            <p className={styles.benefitLeftDescription}>
              Expand your fitness routine with more workout options like Yoga,
              EMS, Boxing and more, to make your fitness more interesting.
            </p>
            {/* <a
              className={styles.linkContainer}
              href="https://apps.apple.com/app/raw-fitness-for-you/id1642336260?platform=iphone"
              target="_blank"
              rel="noreferrer"
            >
              <p className={styles.linkContainerText}>Get the App ▶ </p>
              <img className={styles.rightIcon} src="/rightIcon.png" />
            </a> */}

            <div className={styles.buttons}>
              <div className={styles.downloadButton}>
                <AiFillApple className={styles.downloadIcon} />
              </div>
              <div className={styles.downloadButton}>
                <AiFillAndroid className={styles.downloadIcon} />
              </div>
            </div>
          </div>
        </div>

        <div className={styles.benefit}>
          <div className={styles.benefitLeft}>
            <p className={styles.label}>DETAILS</p>
            <h1 className={styles.benefitLeftTitle}>
              Know about what the place provides.
            </h1>
            <p className={styles.benefitLeftDescription}>
              Get to know information about the gym before you go, to make sure
              you don't get any sudden suprises when you reach there!
            </p>
            <div className={styles.buttons}>
              <div className={styles.downloadButton}>
                <AiFillApple className={styles.downloadIcon} />
              </div>
              <div className={styles.downloadButton}>
                <AiFillAndroid className={styles.downloadIcon} />
              </div>
            </div>
          </div>

          <img className={styles.benefitImage} src="/appScreenshot2.png" />
        </div>

        {/* <div className={styles.benefit}>
          <img className={styles.benefitImage} src="/appScreenshot3.png" />

          <div className={styles.benefitLeft}>
            <p className={styles.label}>3</p>
            <h1 className={styles.benefitLeftTitle}>
              Track your activity and reach your goals.
            </h1>
            <p className={styles.benefitLeftDescription}>
              Get information about your fitness journey through analytics to
              help you keep track and reach your fitness goals.
            </p>
            <div className={styles.buttons}>
              <div className={styles.downloadButton}>
                <AiFillApple className={styles.downloadIcon} />
              </div>
              <div className={styles.downloadButton}>
                <AiFillAndroid className={styles.downloadIcon} />
              </div>
            </div>
          </div>
        </div> */}

        <div className={styles.benefit}>
          <img className={styles.benefitImage} src="/appScreenshot4.png" />

          <div className={styles.benefitLeft}>
            <p className={styles.label}>CLASSES</p>
            <h1 className={styles.benefitLeftTitle}>
              Browse and Book classes from a variety of options.
            </h1>
            <p className={styles.benefitLeftDescription}>
              Browse through various fitness classes like Zumba, Boxing, and
              book both free and paid classes easily through the app.
            </p>
            <div className={styles.buttons}>
              <div className={styles.downloadButton}>
                <AiFillApple className={styles.downloadIcon} />
              </div>
              <div className={styles.downloadButton}>
                <AiFillAndroid className={styles.downloadIcon} />
              </div>
            </div>
          </div>
        </div>

        <div className={styles.benefit}>
          <div className={styles.benefitLeft}>
            <p className={styles.label}>ACCESS</p>
            <h1 className={styles.benefitLeftTitle}>
              Scan & Get access to places on our platform.
            </h1>
            <p className={styles.benefitLeftDescription}>
              Simply scan the QR Code at the gym to get access and to start your
              activity.
            </p>
            <div className={styles.buttons}>
              <div className={styles.downloadButton}>
                <AiFillApple className={styles.downloadIcon} />
              </div>
              <div className={styles.downloadButton}>
                <AiFillAndroid className={styles.downloadIcon} />
              </div>
            </div>
          </div>

          <img className={styles.benefitImage} src="/demo3.png" />
        </div>
      </div>

      <div className={styles.footerCallToAction}>
        <img className={styles.footerImage} src="/appScreenshot.png" />

        <div className={styles.footerContent}>
          <p className={styles.footerLabel}>GET STARTED</p>
          <h1 className={styles.footerTitle}>
            Try it out, and let us known what you think!
          </h1>
          <p className={styles.footerContentDescription}>
            Explore multiple forms of workout and classes to broaden your
            fitness routine, and take your fitness to the next level.
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
