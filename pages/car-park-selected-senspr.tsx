import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./car-park-selected-senspr.module.css";
const CarParkSelectedSenspr: NextPage = () => {
  const router = useRouter();

  const onEiCloseIconClick = useCallback(() => {
    router.push("/view-car-parks");
  }, [router]);

  const onButtonprimarydefaultContainer1Click = useCallback(() => {
    router.push("/select-parking-space-sensor");
  }, [router]);

  return (
    <div className={styles.carParkSelectedSenspr}>
      <img className={styles.image4Icon} alt="" src="/image-42@2x.png" />
      <img
        className={styles.paginationlightIcon}
        alt=""
        src="/paginationlight.svg"
      />
      <div className={styles.toolbarsiphoneXtextOnly2}>
        <div className={styles.toolbarsIphone8textOnly}>
          <img className={styles.backgroundIcon} alt="" src="/background.svg" />
          <div className={styles.action1}>SKIP</div>
          <div className={styles.action2}>NEXT</div>
        </div>
      </div>
      <div className={styles.buttonprimarydefault}>
        <div className={styles.rectangle} />
        <div className={styles.lekkiGardens}>{`Lekki Gardens `}</div>
        <img
          className={styles.gridiconsLocation}
          alt=""
          src="/gridiconslocation3.svg"
        />
        <img
          className={styles.eiCloseIcon}
          alt=""
          src="/eiclose.svg"
          onClick={onEiCloseIconClick}
        />
      </div>
      <img className={styles.vectorIcon} alt="" src="/bed-occupancy.svg" />
      <img
        className={styles.gridiconsLocation1}
        alt=""
        src="/gridiconslocation4.svg"
      />
      <div className={styles.rectangleParent}>
        <div className={styles.rectangle1} />
        <b className={styles.n200}>N200</b>
        <div className={styles.hr}>/Hr</div>
        <div className={styles.lekkiGardensCar}>Lekki Gardens Car Park A</div>
        <div className={styles.spacesAvailable}>Spaces Available:</div>
        <div className={styles.slots}>5 slots</div>
        <div className={styles.m}>700 m</div>
        <div className={styles.distanceToVenue}>Distance to Venue:</div>
        <div className={styles.groupChild} />
        <img
          className={styles.siGlyphmoneyIcon}
          alt=""
          src="/siglyphmoney1.svg"
        />
      </div>
      <div
        className={styles.buttonprimarydefault1}
        onClick={onButtonprimarydefaultContainer1Click}
      >
        <div className={styles.rectangle2} />
        <b className={styles.viewCarParking}>View Car Parking</b>
      </div>
      <img
        className={styles.faSolidparkingIcon}
        alt=""
        src="/fasolidparking3.svg"
      />
    </div>
  );
};

export default CarParkSelectedSenspr;
