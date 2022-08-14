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
                to access gyms around the World.
              </h1>
              <p className={styles.description}>
                Get access to gyms from anywhere around the world, Track your
                fitness activity and keep your fitness goals in track, all with
                a single Subscription.
              </p>

              <div className={styles.buttons}>
                <button className={styles.iosDownloadButton}>
                  <Image
                    className={styles.icon}
                    src="/appleIconWhite.png"
                    width={22}
                    height={22}
                  />
                  <p className={styles.buttonText}>Download for iOS</p>
                </button>

                <button className={styles.androidDownloadButton}>
                  <Image
                    className={styles.icon}
                    src="/androidIcon.png"
                    width={22}
                    height={22}
                  />
                  <p className={styles.buttonText}>Download for Android</p>
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
            <a className={styles.linkContainer} href="#">
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
            <a className={styles.linkContainer} href="#">
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
            <a className={styles.linkContainer} href="#">
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
            <a className={styles.linkContainer} href="#">
              <p className={styles.linkContainerText}>Get the App ▶ </p>
              <img className={styles.rightIcon} src="/rightIcon.png" />
            </a>
          </div>
        </div>
      </div>

      <div className={styles.footerContainer}>
        <div className={styles.footerLeft}>
          <h1 className={styles.footerLogo}>RAW</h1>
          <p className={styles.footerDescription}>
            Copyright 2022. All rights reserved
          </p>
        </div>

        <div className={styles.footerRight}>
          <h1 className={styles.footerRightText}>Social Media</h1>
          <img className={styles.socialMediaIcon} src="/twitter.jpeg" />
          <img className={styles.socialMediaIcon} src="/instagramLogo.svg" />
        </div>
      </div>
    </div>
  );
}
