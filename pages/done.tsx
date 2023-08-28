import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./done.module.css";
const Done: NextPage = () => {
  const router = useRouter();

  const onButtonprimarydefaultContainer1Click = useCallback(() => {
    router.push("/navigate");
  }, [router]);

  return (
    <div className={styles.done}>
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
        src="/gridiconslocation2.svg"
      />
      <img
        className={styles.gridiconsLocation1}
        alt=""
        src="/gridiconslocation2.svg"
      />
      <img
        className={styles.gridiconsLocation2}
        alt=""
        src="/gridiconslocation2.svg"
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
        <div className={styles.groupItem} />
      </div>
      <div className={styles.buttonprimarydefault}>
        <div className={styles.rectangle1} />
        <b className={styles.payNow}>Pay Now</b>
      </div>
      <img
        className={styles.emojionePartyPopperIcon}
        alt=""
        src="/emojionepartypopper1.svg"
      />
      <div className={styles.rectangleGroup}>
        <div className={styles.rectangle2} />
        <div className={styles.lekkiGardensCar}>Lekki Gardens Car Park A</div>
        <div className={styles.space4c}>Space 4c</div>
      </div>
      <div className={styles.div}>✅</div>
      <img className={styles.doneChild} alt="" src="/rectangle-3.svg" />
      <div
        className={styles.buttonprimarydefault1}
        onClick={onButtonprimarydefaultContainer1Click}
      >
        <div className={styles.rectangle1} />
        <b className={styles.payNow}>Navigate Now</b>
      </div>
      <div className={styles.rectangleContainer}>
        <div className={styles.groupInner} />
        <img
          className={styles.emojioneCheckMarkButtonIcon}
          alt=""
          src="/emojionecheckmarkbutton1.svg"
        />
        <div className={styles.spaceSuccessfullyBooked}>
          Space Successfully Booked
        </div>
      </div>
    </div>
  );
};

export default Done;
