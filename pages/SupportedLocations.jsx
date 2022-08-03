import { useQuery } from "@apollo/client";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import { Navbar } from "../components/navbar";
import { GET_SUPPORTED_COUNTRIES } from "../graphql/queries";
import styles from "../styles/SupportedLocations.module.css";

const SupportedLocations = () => {
  const {
    data: getSupportedData,
    loading: getSupportedLoading,
    error: getSupportedError,
  } = useQuery(GET_SUPPORTED_COUNTRIES);

  const [openedCountries, setOpenedCountries] = useState([]);

  const [filteredCountries, setFilteredCountries] = useState([]);

  const [emptySupportedCountries, setEmptySupportedCountries] = useState(false);

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
    var filteredArray = getSupportedData?.getSupportedCountries?.filter(
      (data) => {
        return data.name.toLowerCase().indexOf(searchText.toLowerCase()) >= 0;
      }
    );

    setFilteredCountries(filteredArray);

    // return filteredArray;
  };

  useEffect(() => {
    if (getSupportedData) {
      if (getSupportedData.getSupportedCountries.length === 0)
        setEmptySupportedCountries(true);
      setFilteredCountries(getSupportedData.getSupportedCountries);
    }
  }, [getSupportedData]);

  useEffect(() => {
    filterArray();
  }, [searchText]);

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
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Navbar />

      <div className={styles.supportedLocations}>
        <div className={styles.header}>
          <h1 className={styles.headerText}>Supported Locations</h1>
          <div className={styles.searchInput}>
            <input
              className={styles.input}
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              placeholder="Search for locations"
            />
            <img className={styles.searchIcon} src="/searchIcon.png" />
          </div>
        </div>

        <div className={styles.locations}>
          {getSupportedLoading ? (
            <div>
              <h1>Loading...</h1>
            </div>
          ) : (
            <>
              {emptySupportedCountries ? (
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
              )}

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
          )}
        </div>
      </div>
    </div>
  );
};

export default SupportedLocations;
