import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./select-parking-space-sensor.module.css";
const SelectParkingSpaceSensor: NextPage = () => {
  const router = useRouter();

  const onButtonprimarydefaultContainerClick = useCallback(() => {
    router.push("/../components/book-space");
  }, [router]);

  const onBackContainerClick = useCallback(() => {
    router.push("/view-car-parks");
  }, [router]);

  return (
    <div className={styles.selectParkingSpaceSensor}>
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
      <div
        className={styles.buttonprimarydefault}
        onClick={onButtonprimarydefaultContainerClick}
      >
        <div className={styles.rectangle} />
        <b className={styles.continue}>Continue</b>
      </div>
      <div className={styles.selectPreferredSpace}>Select preferred space</div>
      <div className={styles.slotsAvailable}>4 SLOTS AVAILABLE</div>
      <div className={styles.c}>4c</div>
      <div className={styles.rectangleParent}>
        <div className={styles.rectangle1} />
        <div className={styles.rs200Parent}>
          <b className={styles.rs200}>Rs200</b>
          <div className={styles.hr}>/Hr</div>
        </div>
        <div className={styles.lekkiGardensCar}>Lekki Gardens Car Park A</div>
      </div>
      <div className={styles.back} onClick={onBackContainerClick}>
        <img className={styles.vectorIcon} alt="" src="/vector13.svg" />
        <div className={styles.toolbarsIphone8textOnly} />
      </div>
      <div className={styles.selectParkingSpaceSensorChild} />
      <img
        className={styles.icRoundDirectionsCarIcon}
        alt=""
        src="/icrounddirectionscar.svg"
      />
      <img
        className={styles.icRoundDirectionsCarIcon1}
        alt=""
        src="/icrounddirectionscar.svg"
      />
      <img
        className={styles.icRoundDirectionsCarIcon2}
        alt=""
        src="/icrounddirectionscar.svg"
      />
      <img
        className={styles.icRoundDirectionsCarIcon3}
        alt=""
        src="/icrounddirectionscar.svg"
      />
      <img
        className={styles.selectParkingSpaceSensorItem}
        alt=""
        src="/group-21.svg"
      />
      <img
        className={styles.selectParkingSpaceSensorInner}
        alt=""
        src="/group-21.svg"
      />
      <img className={styles.groupIcon} alt="" src="/group-211.svg" />
      <img
        className={styles.selectParkingSpaceSensorChild1}
        alt=""
        src="/group-212.svg"
      />
      <img
        className={styles.selectParkingSpaceSensorChild2}
        alt=""
        src="/group-212.svg"
      />
      <div className={styles.c1}>4C</div>
      <img
        className={styles.selectParkingSpaceSensorChild3}
        alt=""
        src="/group-47.svg"
      />
      <div className={styles.b}>3b</div>
      <div className={styles.c2}>5c</div>
      <div className={styles.a}>6a</div>
      <img
        className={styles.icRoundDirectionsCarIcon4}
        alt=""
        src="/icrounddirectionscar1.svg"
      />
      <img
        className={styles.icRoundDirectionsCarIcon5}
        alt=""
        src="/icrounddirectionscar1.svg"
      />
      <img className={styles.lineIcon} alt="" src="/line-41.svg" />
    </div>
  );
};

export default SelectParkingSpaceSensor;
