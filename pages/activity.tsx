import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./activity.module.css";
const Activity: NextPage = () => {
  const router = useRouter();

  const onGroupContainerClick = useCallback(() => {
    router.push("/live-tracking");
  }, [router]);

  const onBackContainerClick = useCallback(() => {
    router.push("/send-parcel-home");
  }, [router]);

  return (
    <div className={styles.activity}>
      <div className={styles.deliveries}>Deliveries</div>
      <div className={styles.viewPastDeleviries}>View past deleviries</div>
      <img className={styles.activityChild} alt="" src="/group-16@2x.png" />
      <div className={styles.activityItem} />
      <div className={styles.parcelDelivery}>Parcel Delivery</div>
      <div className={styles.currentStatusParcelContainer}>
        <p className={styles.currentStatus}>Current status:</p>
        <p className={styles.parcelDelivered}>Parcel Delivered</p>
      </div>
      <div className={styles.thApril}>12th April</div>
      <b className={styles.viewDetails}>View details</b>
      <div className={styles.rectangleParent} onClick={onGroupContainerClick}>
        <div className={styles.groupChild} />
        <div className={styles.activeParcelDelivery}>
          Active parcel delivery
        </div>
        <div className={styles.currentStatusDeliveryContainer}>
          <p className={styles.currentStatus}>Current status:</p>
          <p className={styles.parcelDelivered}>
            Delivery partner enroute to handover parcel to volunteer.
          </p>
        </div>
        <b className={styles.viewDetails1}>View details</b>
      </div>
      <div className={styles.back} onClick={onBackContainerClick}>
        <img className={styles.vectorIcon} alt="" src="/vector.svg" />
        <div className={styles.backChild} />
      </div>
      <div className={styles.activityInner} />
      <div className={styles.lineDiv} />
      <b className={styles.activity1}>Activity</b>
    </div>
  );
};

export default Activity;
