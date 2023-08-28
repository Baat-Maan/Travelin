import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./location-search-bar.module.css";
const LocationSearchBar: NextPage = () => {
  const router = useRouter();

  const onButtonContainerClick = useCallback(() => {
    router.push("/search-location-and-date");
  }, [router]);

  const onCloseIconClick = useCallback(() => {
    router.push("/search-location-and-date");
  }, [router]);

  return (
    <div className={styles.locationSearchBar}>
      <img
        className={styles.locationSearchBarChild}
        alt=""
        src="/rectangle-11.svg"
      />
      <img
        className={styles.rwcriFacadeByNight12WideIcon}
        alt=""
        src="/rwcrifacadebynight12-widelarge169-2@2x.png"
      />
      <img className={styles.groupIcon} alt="" src="/group2.svg" />
      <img className={styles.vectorIcon} alt="" src="/vector10.svg" />
      <img className={styles.navigationIcon} alt="" src="/navigation.svg" />
      <div className={styles.explore}>
        <img className={styles.exploreChild} alt="" src="/group-7.svg" />
        <div className={styles.headline}>Explore</div>
      </div>
      <div className={styles.bookings}>
        <img
          className={styles.bedOccupancyIcon}
          alt=""
          src="/bed-occupancy5.svg"
        />
        <div className={styles.headline1}>Bookings</div>
      </div>
      <div className={styles.wishlist}>
        <img className={styles.vectorIcon1} alt="" src="/vector5.svg" />
        <div className={styles.headline2}>Wishlist</div>
      </div>
      <div className={styles.profile}>
        <img className={styles.guestsIcon} alt="" src="/guests5.svg" />
        <div className={styles.headline3}>Profile</div>
      </div>
      <div className={styles.component18}>
        <div className={styles.mapView}>{`Map view `}</div>
        <img className={styles.mapIcon} alt="" src="/map.svg" />
      </div>
      <img
        className={styles.locationSearchBarItem}
        alt=""
        src="/vector-111.svg"
      />
      <div className={styles.component16}>
        <div className={styles.luxuryHotelsAnd}>Hotels in your region</div>
        <img className={styles.crosshairIcon} alt="" src="/crosshair1.svg" />
      </div>
      <div className={styles.profile}>
        <img className={styles.guestsIcon} alt="" src="/guests5.svg" />
        <div className={styles.headline3}>Profile</div>
      </div>
      <img
        className={styles.locationSearchBarInner}
        alt=""
        src="/vector-111.svg"
      />
      <img
        className={styles.locationSearchBarItem}
        alt=""
        src="/vector-111.svg"
      />
      <div className={styles.button} onClick={onButtonContainerClick}>
        <img className={styles.iconLeft} alt="" src="/icon-left9.svg" />
        <div className={styles.label}>CONFIRM</div>
        <img className={styles.iconLeft} alt="" src="/icon-right9.svg" />
      </div>
      <div className={styles.card}>
        <div className={styles.rajasthan}>{`Rajasthan `}</div>
      </div>
      <div className={styles.card1}>
        <div className={styles.rajasthan}>Madhya Pradesh</div>
      </div>
      <div className={styles.gujarat}>Gujarat</div>
      <img className={styles.component21Icon} alt="" src="/component-21.svg" />
      <img className={styles.component22Icon} alt="" src="/component-22.svg" />
      <img className={styles.component23Icon} alt="" src="/component-23.svg" />
      <img className={styles.component24Icon} alt="" src="/component-24.svg" />
      <div className={styles.card2}>
        <div className={styles.rajasthan}>Delhi</div>
      </div>
      <div className={styles.card3}>
        <div className={styles.rajasthan}>Jain Temple</div>
      </div>
      <div className={styles.card4}>
        <div className={styles.rajasthan}>Near by destination</div>
      </div>
      <img className={styles.clockIcon} alt="" src="/clock.svg" />
      <img className={styles.clockIcon1} alt="" src="/clock1.svg" />
      <div className={styles.hotelNearMe}>Hotel Near Me</div>
      <img className={styles.clockIcon2} alt="" src="/clock2.svg" />
      <div className={styles.recentSearches}>RECENT SEARCHES</div>
      <img className={styles.clockIcon} alt="" src="/clock.svg" />
      <img className={styles.clockIcon1} alt="" src="/clock1.svg" />
      <img className={styles.clockIcon2} alt="" src="/clock2.svg" />
      <div className={styles.rectangleDiv} />
      <img
        className={styles.closeIcon}
        alt=""
        src="/close.svg"
        onClick={onCloseIconClick}
      />
      <div className={styles.searchField}>
        <div className={styles.searchFieldInner}>
          <div className={styles.groupWrapper}>
            <div className={styles.groupWrapper}>
              <div className={styles.groupChild} />
            </div>
          </div>
        </div>
        <img className={styles.searchIcon} alt="" src="/search-icon.svg" />
        <div className={styles.findAPlace}>Find a place to stay</div>
      </div>
      <div className={styles.component21Parent}>
        <img
          className={styles.component21Icon1}
          alt=""
          src="/component-211.svg"
        />
        <div className={styles.location}>
          <span className={styles.locationTxt}>
            <p className={styles.location1}>LOCATION</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default LocationSearchBar;
