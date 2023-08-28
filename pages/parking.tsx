import type { NextPage } from "next";
import { useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import { useRouter } from "next/router";
import styles from "./parking.module.css";
const Parking: NextPage = () => {
  const router = useRouter();

  const onLekkiGardensTextClick = useCallback(() => {
    router.push("/prev-bookings");
  }, [router]);

  const onButtonContainerClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onCloseIconClick = useCallback(() => {
    router.push("/frame");
  }, [router]);

  return (
    <div className={styles.parking}>
      <img className={styles.parkingChild} alt="" src="/rectangle-11.svg" />
      <img
        className={styles.rwcriFacadeByNight12WideIcon}
        alt=""
        src="/rwcrifacadebynight12-widelarge169-2@2x.png"
      />
      <img className={styles.groupIcon} alt="" src="/group3.svg" />
      <img className={styles.vectorIcon} alt="" src="/vector16.svg" />
      <img className={styles.navigationIcon} alt="" src="/navigation.svg" />
      <div className={styles.explore}>
        <img className={styles.exploreChild} alt="" src="/group-72.svg" />
        <div className={styles.headline}>Explore</div>
      </div>
      <div className={styles.bookings}>
        <img
          className={styles.bedOccupancyIcon}
          alt=""
          src="/bed-occupancy6.svg"
        />
        <div className={styles.headline1}>Bookings</div>
      </div>
      <div className={styles.wishlist}>
        <img className={styles.vectorIcon1} alt="" src="/vector5.svg" />
        <div className={styles.headline2}>Wishlist</div>
      </div>
      <div className={styles.profile}>
        <img className={styles.guestsIcon} alt="" src="/guests6.svg" />
        <div className={styles.headline3}>Profile</div>
      </div>
      <div className={styles.component16}>
        <div className={styles.luxuryHotelsAnd}>Parking Spots Near You</div>
        <img className={styles.crosshairIcon} alt="" src="/crosshair2.svg" />
      </div>
      <div className={styles.lekkiGardens} onClick={onLekkiGardensTextClick}>
        Lekki Gardens
      </div>
      <div className={styles.profile}>
        <img className={styles.guestsIcon} alt="" src="/guests6.svg" />
        <div className={styles.headline3}>Profile</div>
      </div>
      <img className={styles.parkingItem} alt="" src="/vector-111.svg" />
      <img className={styles.parkingInner} alt="" src="/vector-111.svg" />
      <div className={styles.button} onClick={onButtonContainerClick}>
        <img className={styles.iconLeft} alt="" src="/icon-left21.svg" />
        <div className={styles.label}>CONFIRM</div>
        <img className={styles.iconLeft} alt="" src="/icon-right21.svg" />
      </div>
      <div className={styles.card}>
        <div className={styles.sidhivinayak}>Sidhivinayak</div>
      </div>
      <img className={styles.clockIcon} alt="" src="/clock3.svg" />
      <div className={styles.recentSearches}>RECENT SEARCHES</div>
      <div className={styles.previousBookings}>PREVIOUS BOOKINGS</div>
      <img className={styles.clockIcon1} alt="" src="/clock4.svg" />
      <img className={styles.image17Icon} alt="" src="/image-17@2x.png" />
      <div className={styles.poweredByPark}>Powered by PARK+</div>
      <div className={styles.rectangleDiv} />
      <img
        className={styles.closeIcon}
        alt=""
        src="/close1.svg"
        onClick={onCloseIconClick}
      />
      <Form.Group className={styles.searchFieldFormgroup}>
        <Form.Label>Find a parking</Form.Label>
        <Form.Control type="search" placeholder="Find a parking" />
      </Form.Group>
      <div className={styles.component21Parent}>
        <img
          className={styles.component21Icon}
          alt=""
          src="/component-212.svg"
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

export default Parking;
