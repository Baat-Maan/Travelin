import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./no-parking-slot-selected.module.css";
const NoParkingSlotSelected: NextPage = () => {
  const router = useRouter();

  const onEiCloseIconClick = useCallback(() => {
    router.push("/view-car-parks");
  }, [router]);

  return (
    <div className={styles.noParkingSlotSelected}>
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
      <img
        className={styles.faSolidparkingIcon}
        alt=""
        src="/fasolidparking4.svg"
      />
      <div className={styles.noParkingSlotSelectedChild} />
      <div className={styles.rs500Parent}>
        <b className={styles.rs500}>Rs 500</b>
        <div className={styles.noParkingZone}>NO PARKING ZONE FINE</div>
        <div className={styles.m}>500 m</div>
        <div className={styles.distanceToVenue}>Distance to Venue:</div>
        <div className={styles.thisIsA}>
          This is a residential area. You cannot park here
        </div>
        <div className={styles.groupChild} />
        <img
          className={styles.siGlyphmoneyIcon}
          alt=""
          src="/siglyphmoney.svg"
        />
      </div>
    </div>
  );
};

export default NoParkingSlotSelected;
