import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./prev-bookings.module.css";
const PrevBookings: NextPage = () => {
  const router = useRouter();

  const onBackContainerClick = useCallback(() => {
    router.push("/parking");
  }, [router]);

  const onButtonprimarydefaultContainerClick = useCallback(() => {
    router.push("/navigate");
  }, [router]);

  return (
    <div className={styles.prevBookings}>
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
      <img
        className={styles.icRoundDirectionsCarIcon}
        alt=""
        src="/icrounddirectionscar2.svg"
      />
      <img
        className={styles.icRoundDirectionsCarIcon1}
        alt=""
        src="/icrounddirectionscar3.svg"
      />
      <img
        className={styles.icRoundDirectionsCarIcon2}
        alt=""
        src="/icrounddirectionscar4.svg"
      />
      <div className={styles.c}>4c</div>
      <div className={styles.rectangleParent}>
        <div className={styles.rectangle} />
        <div className={styles.yourBookings}>Your Bookings</div>
      </div>
      <div className={styles.back} onClick={onBackContainerClick}>
        <img className={styles.vectorIcon} alt="" src="/vector13.svg" />
        <div className={styles.toolbarsIphone8textOnly} />
      </div>
      <div className={styles.rectangleGroup}>
        <div className={styles.rectangle1} />
        <b className={styles.bookedLocation}>Booked Location:</b>
        <b className={styles.bookedSlot}>Booked Slot :</b>
        <b className={styles.parkingSession}>Parking Session</b>
        <div className={styles.lekkiGardensCarContainer}>
          <span className={styles.lekkiGardensCarContainer1}>
            <p className={styles.lekkiGardens}>{`Lekki Gardens  Car `}</p>
          </span>
        </div>
        <div className={styles.parkASlotContainer}>
          <span className={styles.lekkiGardensCarContainer1}>
            <p className={styles.lekkiGardens}>{`PARK A, Slot 4C       `}</p>
          </span>
        </div>
        <div className={styles.checkInTime}>Check-in Time:</div>
        <div className={styles.am}>11:00 am</div>
        <div className={styles.checkOutTime}>Check-out Time:</div>
        <div className={styles.pm}>05:00 pm</div>
        <div className={styles.groupChild} />
      </div>
      <b className={styles.vehicleNumber}>Vehicle Number : PB07AB9600</b>
      <div
        className={styles.buttonprimarydefault}
        onClick={onButtonprimarydefaultContainerClick}
      >
        <div className={styles.rectangle2} />
        <b className={styles.navigateNow}>Navigate Now</b>
      </div>
    </div>
  );
};

export default PrevBookings;
