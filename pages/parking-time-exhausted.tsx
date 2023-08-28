import type { NextPage } from "next";
import { useCallback } from "react";
import { FormControlLabel, Checkbox } from "@mui/material";
import { useRouter } from "next/router";
import styles from "./parking-time-exhausted.module.css";
const ParkingTimeExhausted: NextPage = () => {
  const router = useRouter();

  const onButtonprimarydefaultContainerClick = useCallback(() => {
    router.push("/done");
  }, [router]);

  return (
    <div className={styles.parkingTimeExhausted}>
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
        className={styles.gridiconsLocation}
        alt=""
        src="/gridiconslocation1.svg"
      />
      <img
        className={styles.gridiconsLocation1}
        alt=""
        src="/gridiconslocation1.svg"
      />
      <img
        className={styles.gridiconsLocation2}
        alt=""
        src="/gridiconslocation1.svg"
      />
      <img className={styles.whhHouseIcon} alt="" src="/whhhouse.svg" />
      <div className={styles.rectangleParent}>
        <div className={styles.rectangle} />
        <div className={styles.rs20}>Rs 20/-</div>
        <div className={styles.insurance}>Insurance:</div>
        <b className={styles.bookedSpace}>Booked Space:</b>
        <div className={styles.awesomeYoureDone}>
          Awesome! You’re done parking
        </div>
        <b className={styles.parkingSession}>Parking Session</b>
        <div className={styles.lekkiGardensCarContainer}>
          <span className={styles.lekkiGardensCarContainer1}>
            <p className={styles.lekkiGardens}>{`Lekki Gardens  Car `}</p>
            <p className={styles.lekkiGardens}>Park A</p>
          </span>
        </div>
        <div className={styles.checkInTime}>Check-in Time:</div>
        <div className={styles.am}>11:00 am</div>
        <div className={styles.checkOutTime}>Check-out Time:</div>
        <div className={styles.pm}>05:00 pm</div>
        <div className={styles.rs1220}>Rs1220</div>
        <div className={styles.total}>Total</div>
        <div className={styles.groupChild} />
      </div>
      <div
        className={styles.buttonprimarydefault}
        onClick={onButtonprimarydefaultContainerClick}
      >
        <div className={styles.rectangle1} />
        <b className={styles.payNow}>Pay Now</b>
      </div>
      <img
        className={styles.emojionePartyPopperIcon}
        alt=""
        src="/emojionepartypopper.svg"
      />
      <div className={styles.rectangleGroup}>
        <div className={styles.rectangle2} />
        <div className={styles.lekkiGardensCar}>Lekki Gardens Car Park A</div>
        <div className={styles.space4c}>Space 4c</div>
      </div>
      <div className={styles.back}>
        <img className={styles.vectorIcon} alt="" src="/vector13.svg" />
        <div className={styles.toolbarsIphone8textOnly} />
      </div>
      <FormControlLabel
        className={styles.mditickCircle}
        label=""
        labelPlacement="end"
        control={<Checkbox color="success" defaultChecked />}
      />
    </div>
  );
};

export default ParkingTimeExhausted;
