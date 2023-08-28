import type { NextPage } from "next";
import { useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import { useRouter } from "next/router";
import styles from "./index.module.css";
const ViewCarParks: NextPage = () => {
  const router = useRouter();

  const onFaSolidparkingIconClick = useCallback(() => {
    router.push("/car-park-selected-senspr");
  }, [router]);

  const onFaSolidparkingIcon3Click = useCallback(() => {
    router.push("/no-parking-slot-selected");
  }, [router]);

  return (
    <div className={styles.viewCarParks}>
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
      <Form.Group className={styles.buttonprimarydefaultFormgroup}>
        <Form.Label>{`Lekki Gardens `}</Form.Label>
        <Form.Control type="text" placeholder="Lekki Gardens" />
      </Form.Group>
      <img className={styles.vectorIcon} alt="" src="/bed-occupancy.svg" />
      <div className={styles.viewCarParksChild} />
      <div className={styles.viewCarParksItem} />
      <img
        className={styles.gridiconsLocation}
        alt=""
        src="/gridiconslocation.svg"
      />
      <img
        className={styles.faSolidparkingIcon}
        alt=""
        src="/fasolidparking.svg"
        onClick={onFaSolidparkingIconClick}
      />
      <img
        className={styles.faSolidparkingIcon1}
        alt=""
        src="/fasolidparking.svg"
      />
      <img
        className={styles.faSolidparkingIcon2}
        alt=""
        src="/fasolidparking.svg"
      />
      <img
        className={styles.faSolidparkingIcon3}
        alt=""
        src="/fasolidparking1.svg"
        onClick={onFaSolidparkingIcon3Click}
      />
      <img
        className={styles.faSolidparkingIcon4}
        alt=""
        src="/fasolidparking1.svg"
      />
      <img
        className={styles.faSolidparkingIcon5}
        alt=""
        src="/fasolidparking2.svg"
      />
      <img className={styles.unionIcon} alt="" src="/union.svg" />
      <img className={styles.unionIcon} alt="" src="/union.svg" />
      <div className={styles.parkingSpot}> Parking Spot</div>
      <div className={styles.yourLocation}>Your location</div>
      <img className={styles.unionIcon} alt="" src="/union.svg" />
      <div className={styles.noParking}>No Parking</div>
    </div>
  );
};

export default ViewCarParks;
