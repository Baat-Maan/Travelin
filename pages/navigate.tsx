import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./navigate.module.css";
const Navigate: NextPage = () => {
  const router = useRouter();

  const onEiCloseIconClick = useCallback(() => {
    router.push("/parking");
  }, [router]);

  return (
    <div className={styles.navigate}>
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
      <img className={styles.vectorIcon} alt="" src="/bed-occupancy.svg" />
      <img
        className={styles.gridiconsLocation}
        alt=""
        src="/gridiconslocation2.svg"
      />
      <img
        className={styles.faSolidparkingIcon}
        alt=""
        src="/fasolidparking3.svg"
      />
      <img className={styles.image31Icon} alt="" src="/image-311@2x.png" />
      <div className={styles.buttonprimarydefault}>
        <div className={styles.rectangle} />
        <div className={styles.parkingALekki}>Parking A Lekki gardens</div>
        <img
          className={styles.gridiconsLocation1}
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
    </div>
  );
};

export default Navigate;
