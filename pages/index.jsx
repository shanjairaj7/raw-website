import Head from "next/head";
import Image from "next/image";
import { AiFillAndroid, AiFillApple } from "react-icons/ai";
import { Navbar } from "../components/navbar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.container}>
        <Head>
          <title>RAW - It's more than just a gym!</title>
          <meta
            name="description"
            content="RAW - Improve your fitness experience by exploring multiple workouts like Yoga, Boxing etc and various places, book fitness classes, track your fitness progress and more to come. We are working on more features to improve your experience more."
          />
          <link rel="icon" href="/rawLogoBlack.png" />
        </Head>

        <Navbar />
        <main className={styles.header}>
          <div className={styles.headerContainer}>
            <div className={styles.headerLeft}>
              <p className={styles.welcomeText}>WELCOME TO RAW</p>
              <h1 className={styles.title}>
                Explore multiple workouts & improve your fitness.
              </h1>
              <p className={styles.description}>
                Get access to gyms from anywhere around the world, Track your
                fitness activity and keep your fitness goals in track, all with
                a single Subscription.
              </p>

              <div className={styles.headerButtons}>
                <a
                  target="_blank"
                  href="https://apps.apple.com/app/raw-fitness-for-you/id1642336260?platform=iphone"
                  rel="noreferrer"
                  className={styles.iosDownloadButton}
                >
                  <Image
                    className={styles.icon}
                    src="/appleIconWhite.png"
                    width={20}
                    height={23}
                    alt="download rawapp apple"
                  />
                  <p className={styles.buttonText}>Download for iOS</p>
                </a>

                <a
                  target="_blank"
                  href="https://play.google.com/store/apps/details?id=com.gymapp.gym"
                  rel="noreferrer"
                >
                  <button className={styles.androidDownloadButton}>
                    <Image
                      className={styles.icon}
                      src="/androidIcon.png"
                      width={24}
                      height={24}
                      alt="download rawapp android"
                    />
                    <p className={styles.buttonText}>Download for Android</p>
                    {/* <p className={styles.soon}>Coming Soon!</p> */}
                  </button>
                </a>
              </div>
              {/* 
              <Link href="/SupportedLocations">
                <p className={styles.supportedLocationsLink}>
                  or check the supported locations
                </p>
              </Link> */}
            </div>

            <div className={styles.image}>
              <Image
                alt="rawapp ios app"
                width={320}
                height={600}
                src="/appScreenshot.png"
              />
            </div>
          </div>
        </main>
      </div>

      <div id="features" className={styles.benefitsContainer}>
        <div className={styles.benefitsHeader}>
          <h1>Features</h1>
          <div className={styles.headerLine}></div>
        </div>

        <div className={styles.benefit}>
          <Image
            width={350}
            height={650}
            className={styles.benefitImage}
            src="/appScreenshot.png"
            alt="rawapp explore multiple workouts"
          />

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
              <a
                target="_blank"
                href="https://apps.apple.com/app/raw-fitness-for-you/id1642336260?platform=iphone"
                rel="noreferrer"
                aria-label="rawapp download ios"
              >
                <div className={styles.downloadButton}>
                  <AiFillApple className={styles.downloadIcon} />
                </div>
              </a>
              <a
                target="_blank"
                href="https://play.google.com/store/apps/details?id=com.gymapp.gym"
                rel="noreferrer"
                aria-label="rawapp download android"
              >
                <div className={styles.downloadButton}>
                  <AiFillAndroid className={styles.downloadIcon} />
                </div>
              </a>
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
              <a
                target="_blank"
                href="https://apps.apple.com/app/raw-fitness-for-you/id1642336260?platform=iphone"
                rel="noreferrer"
                aria-label="rawapp download ios"
              >
                <div className={styles.downloadButton}>
                  <AiFillApple className={styles.downloadIcon} />
                </div>
              </a>
              <a
                target="_blank"
                href="https://play.google.com/store/apps/details?id=com.gymapp.gym"
                rel="noreferrer"
                aria-label="rawapp download android"
              >
                <div className={styles.downloadButton}>
                  <AiFillAndroid className={styles.downloadIcon} />
                </div>
              </a>
            </div>
          </div>

          <Image
            width={350}
            height={650}
            className={styles.benefitImage}
            src="/appScreenshot2.png"
            alt="rawapp fitness center details"
          />
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
              <a>
              <div  className={styles.downloadButton}>
                <AiFillApple className={styles.downloadIcon} />
              </div></a>
              <a>
              <div className={styles.downloadButton}>
                <AiFillAndroid className={styles.downloadIcon} />
              </div></a>
            </div>
          </div>
        </div> */}

        <div className={styles.benefit}>
          <Image
            width={350}
            height={650}
            className={styles.benefitImage}
            src="/appScreenshot4.png"
            alt="rawapp book classes fitness"
          />

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
              <a
                target="_blank"
                href="https://apps.apple.com/app/raw-fitness-for-you/id1642336260?platform=iphone"
                rel="noreferrer"
                aria-label="rawapp download ios"
              >
                <div className={styles.downloadButton}>
                  <AiFillApple className={styles.downloadIcon} />
                </div>
              </a>
              <a
                target="_blank"
                href="https://play.google.com/store/apps/details?id=com.gymapp.gym"
                rel="noreferrer"
                aria-label="rawapp download android"
              >
                <div className={styles.downloadButton}>
                  <AiFillAndroid className={styles.downloadIcon} />
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className={styles.benefit}>
          <div className={styles.benefitLeft}>
            <p className={styles.label}>TRACK</p>
            <h1 className={styles.benefitLeftTitle}>
              Track, Manage your exercises and workouts easily!
            </h1>
            <p className={styles.benefitLeftDescription}>
              Create multiple lists with what workouts and exercises you will be
              doing and track them through the app. Also take breaks after or
              during your current workout.
            </p>
            <div className={styles.buttons}>
              <a
                target="_blank"
                href="https://apps.apple.com/app/raw-fitness-for-you/id1642336260?platform=iphone"
                rel="noreferrer"
                aria-label="rawapp download ios"
              >
                <div className={styles.downloadButton}>
                  <AiFillApple className={styles.downloadIcon} />
                </div>
              </a>
              <a
                target="_blank"
                href="https://play.google.com/store/apps/details?id=com.gymapp.gym"
                rel="noreferrer"
                aria-label="rawapp download android"
              >
                <div className={styles.downloadButton}>
                  <AiFillAndroid className={styles.downloadIcon} />
                </div>
              </a>
            </div>
          </div>

          <Image
            width={350}
            height={650}
            className={styles.benefitImage}
            src="/appScreenshot5.png"
            alt="rawapp track workout reps sets"
          />
        </div>

        <div className={styles.benefit}>
          <Image
            width={350}
            height={650}
            className={styles.benefitImage}
            src="/demo3.png"
            alt="rawapp scan and get access"
          />

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
              <a
                target="_blank"
                href="https://apps.apple.com/app/raw-fitness-for-you/id1642336260?platform=iphone"
                rel="noreferrer"
                aria-label="rawapp download ios"
              >
                <div className={styles.downloadButton}>
                  <AiFillApple className={styles.downloadIcon} />
                </div>
              </a>
              <a
                target="_blank"
                href="https://play.google.com/store/apps/details?id=com.gymapp.gym"
                rel="noreferrer"
                aria-label="rawapp download android"
              >
                <div className={styles.downloadButton}>
                  <AiFillAndroid className={styles.downloadIcon} />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* <p className={styles.moreToComeText}>and more to come...</p> */}

      <div className={styles.footerCallToAction}>
        <Image
          width={350}
          height={650}
          className={styles.footerImage}
          src="/appScreenshot.png"
          alt="download raw app apple android"
        />

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

          <div style={{ marginTop: 20, width: "100%" }}>
            <a
              href="https://apps.apple.com/app/raw-fitness-for-you/id1642336260?platform=iphone"
              target="_blank"
              rel="noreferrer"
              style={{ marginRight: 20 }}
            >
              <Image
                width={145}
                height={47}
                className={styles.downloadImage}
                src="/downloadAppStore.png"
                alt="rawapp download apple ios"
              />
            </a>

            <a
              href="https://play.google.com/store/apps/details?id=com.gymapp.gym"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                style={{ paddingLeft: 20 }}
                width={160}
                height={46}
                className={styles.googlePlayImage}
                src="/googlePlayStore.png"
                alt="rawapp download android"
              />
            </a>
          </div>
        </div>
      </div>

      <div className={styles.footerContainer}>
        <div className={styles.footerLeft}>
          <Image
            width={80}
            height={20}
            className={styles.logo}
            src="/rawblacktext.png"
            alt="rawapp logo"
          />
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
            <img
              alt="rawapp twitter"
              className={styles.socialMediaIcon}
              src="/twitter.png"
            />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/raw_app/"
          >
            <img
              alt="rawapp instagram"
              className={styles.socialMediaIcon}
              src="/instagramLogo.png"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
