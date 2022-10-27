import { useQuery } from "@apollo/client";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import { Navbar } from "../components/navbar";
import { GET_SUPPORTED_COUNTRIES } from "../graphql/queries";
import styles from "../styles/SupportedLocations.module.css";

const locations = [
  {
    name: "Dubai",
    image: "/dubaiImage.jpeg",
    comingSoon: true,
    shortForm: "ae",
  },
];

const SupportedLocations = () => {
  const {
    data: getSupportedData,
    loading: getSupportedLoading,
    error: getSupportedError,
  } = useQuery(GET_SUPPORTED_COUNTRIES);

  const [openedCountries, setOpenedCountries] = useState([]);

  const [filteredCountries, setFilteredCountries] = useState(locations);

  const [emptySupportedCountries, setEmptySupportedCountries] = useState(true);

  const toggleOpenedCountries = (country) => {
    if (!openedCountries.includes(country)) {
      setOpenedCountries([...openedCountries, country]);
    } else {
      const newArray = openedCountries.filter(
        (openedCountry) => openedCountry !== country
      );
      setOpenedCountries(newArray);
    }
  };

  const isCountryOpened = (country) => {
    return openedCountries.filter(
      (openedCountry) => openedCountry === country
    )[0];
  };

  const getFlagImage = (country) => {
    fetch(`https://countryflagsapi.com/png/${country.toLowerCase()}`)
      .then((response) => response.json())
      .then((value) => {
        console.log(value);
        return value;
      });
  };

  const [searchText, setSearchText] = useState("");

  const filterArray = () => {
    // var filteredArray = getSupportedData?.getSupportedCountries?.filter(
    //   (data) => {
    //     return data.name.toLowerCase().indexOf(searchText.toLowerCase()) >= 0;
    //   }
    // );

    var filteredArray = locations?.filter((data) => {
      return (
        data.name.toLowerCase().indexOf(searchText.toLowerCase().trim()) >= 0
      );
    });

    setFilteredCountries(filteredArray);

    if (searchText === "") {
      setFilteredCountries(locations);
    }

    // return filteredArray;
  };

  useEffect(() => {
    if (getSupportedData) {
      if (getSupportedData.getSupportedCountries.length === 0)
        setEmptySupportedCountries(true);
      // setFilteredCountries(getSupportedData.getSupportedCountries);
    }
  }, [getSupportedData]);

  useEffect(() => {
    filterArray();
  }, [searchText]);

  return (
    <div>
      <Head>
        <title>RAW -Supported Locations</title>
        <meta
          name="description"
          content="Check the locations that RAW is currently launched in, RAW is currently launched in Dubai and we will be launching in many places very soon."
        />
        <link rel="icon" href="/rawLogoBlack.png" />
      </Head>

      <Navbar />

      <div className={styles.supportedLocations}>
        <div className={styles.header}>
          <h1 className={styles.headerText}>Supported Locations</h1>
          <div className={styles.searchInput}>
            <img className={styles.searchIcon} src="/searchIcon.png" />

            <input
              className={styles.input}
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              placeholder="Search for locations"
            />
          </div>
        </div>

        {filteredCountries.length === 0 ? (
          // eslint-disable-next-line react/no-unescaped-entities
          <p className={styles.emptySearch}>No countries for '{searchText}'</p>
        ) : (
          <div className={styles.locations}>
            {/* {getSupportedLoading ? (
            <div>
              <h1>Loading...</h1>
            </div>
          ) : ( */}
            <>
              {/* {emptySupportedCountries ? (
                <>
                  <p className={styles.noSupportedCountries}>
                    We are not available in any countries, but we are working on
                    expanding to many countries. Let us know where you want us
                    to expand to, we really appreciate it.
                  </p>
                  <button className={styles.contactButton}>Contact Us</button>
                </>
              ) : filteredCountries?.length === 0 ? (
                <>
                  <p className={styles.emptySearch}>
                    No countries for '{searchText}'
                  </p>
                </>
              ) : (
                filteredCountries?.map((data, index) => (
                  <div
                    className={styles.location}
                    key={index}
                    onClick={() => toggleOpenedCountries(data.name)}
                  >
                    <div className={styles.locationHeader}>
                      <div className={styles.locationLeft}>
                        <img
                          className={styles.flagIcon}
                          src={`https://countryflagsapi.com/png/${data.name.toLowerCase()}`}
                        />
                        <div className={styles.textContent}>
                          <h1 className={styles.locationTitle}>{data.name}</h1>
                          <div className={styles.circle}></div>
                          <p className={styles.locationsCount}>
                            {data.states.length} Locations
                          </p>
                        </div>
                      </div>
                      <div className="locationRight">
                        <img
                          className={styles.downArrow}
                          src="/downArrow.png"
                        />
                      </div>
                    </div>

                    {isCountryOpened(data.name) && (
                      <div className={styles.locationInfo}>
                        {data.states.map((state, index) => (
                          <p key={index} className={styles.locationListName}>
                            • {state.name}
                          </p>
                        ))}
                      </div>
                    )}
                  </div>
                ))
              )} */}

              {filteredCountries.map((location) => (
                <div
                  key={location.name}
                  className={styles.location}
                  // key={index}
                  onClick={() => toggleOpenedCountries("ae")}
                >
                  <div className={styles.locationHeader}>
                    <img
                      src={location.image}
                      className={styles.locationImage}
                    />

                    <div className={styles.locationLeft}>
                      <img
                        className={styles.flagIcon}
                        src={`https://countryflagsapi.com/png/${location.shortForm}`}
                      />
                      <div className={styles.textContent}>
                        <h1 className={styles.locationTitle}>
                          {location.name}
                        </h1>
                        {/* <div className={styles.circle}></div>
                      <p className={styles.locationsCount}>0 Locations</p> */}
                      </div>
                    </div>
                    <div className={styles.locationRight}>
                      {/* <img className={styles.downArrow} src="/downArrow.png" /> */}
                      <p className={styles.comingSoonText}>
                        {location.comingSoon && "Coming Soon"}
                      </p>
                    </div>
                  </div>

                  {/* {isCountryOpened("ae") && ( */}
                  {/* <div className={styles.locationInfo}> */}
                  {/* {data.states.map((state, index) => (
                      <p key={index} className={styles.locationListName}>
                        • {state.name}
                      </p>
                    ))} */}
                  {/* </div> */}
                  {/* )} */}
                </div>
              ))}

              {/* <div className={styles.line}></div> */}

              {/* <div className={styles.location}>
                <div className={styles.locationHeader}>
                  <div className={styles.locationLeft}>
                    <img className={styles.flagIcon} src="/ukFlag.png" />
                    <h1 className={styles.locationTitle}>United Kingdom</h1>
                    <div className={styles.circle}></div>
                    <p className={styles.locationsCount}>30 locations</p>
                  </div>
                  <div className="locationRight">
                    <img className={styles.downArrow} src="/downArrow.png" />
                  </div>
                </div>

                <div className={styles.locationInfo}>
                  <p className={styles.locationListName}>- England</p>
                  <p className={styles.locationListName}>- Scotland</p>
                  <p className={styles.locationListName}>- Wales</p>
                  <p className={styles.locationListName}>- Northern Ireland</p>
                  <p className={styles.locationListName}>- Briston</p>
                  <p className={styles.locationListName}>- Edinburgh</p>
                  <p className={styles.locationListName}>- Birmingham</p>
                </div>
              </div> */}

              {/* <div className={styles.line}></div> */}

              {/* <div className={styles.location}>
                <div className={styles.locationHeader}>
                  <div className={styles.locationLeft}>
                    <img className={styles.flagIcon} src="/canadaLogo.png" />
                    <h1 className={styles.locationTitle}>Canada</h1>
                    <div className={styles.circle}></div>
                    <p className={styles.locationsCount}>50 locations</p>
                  </div>
                  <div className="locationRight">
                    <img className={styles.downArrow} src="/downArrow.png" />
                  </div>
                </div>

                <div className={styles.locationInfo}>
                  <p className={styles.locationListName}>- Toronto</p>
                  <p className={styles.locationListName}>- Vancouver</p>
                  <p className={styles.locationListName}>- Ottawa</p>
                  <p className={styles.locationListName}>- Calgary</p>
                  <p className={styles.locationListName}>- Victoria</p>
                </div>
              </div> */}
            </>
            {/* )} */}
          </div>
        )}
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
};

export default SupportedLocations;
