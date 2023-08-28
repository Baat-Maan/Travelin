import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./live-tracking.module.css";
const LiveTracking: NextPage = () => {
  const router = useRouter();

  const onBackContainerClick = useCallback(() => {
    router.push("/activity");
  }, [router]);

  return (
    <div className={styles.liveTracking}>
      <div className={styles.deliveryRequest7821032}>
        Delivery request #7821032
      </div>
      <div className={styles.raiseIssue}>Raise issue</div>
      <div className={styles.liveTrackingChild} />
      <div className={styles.frameParent}>
        <div className={styles.vuesaxboldtruckFastWrapper}>
          <img
            className={styles.vuesaxboldtruckFastIcon}
            alt=""
            src="/vuesaxboldtruckfast.svg"
          />
        </div>
        <div className={styles.frameWrapper}>
          <div className={styles.inProcessSendingCityParent}>
            <div className={styles.inProcessSendingCity}>
              In process-sending city
            </div>
            <div className={styles.bangalore}>Bangalore</div>
          </div>
        </div>
      </div>
      <div className={styles.pm}>11:45 PM</div>
      <div className={styles.frameGroup}>
        <div className={styles.vuesaxboldrouting2Wrapper}>
          <img
            className={styles.vuesaxboldtruckFastIcon}
            alt=""
            src="/vuesaxboldrouting2.svg"
          />
        </div>
        <div className={styles.frameWrapper}>
          <div className={styles.inProcessSendingCityParent}>
            <div className={styles.inProcessSendingCity}>Transit</div>
            <div className={styles.bangalore}>Delhi</div>
          </div>
        </div>
      </div>
      <div className={styles.pilani}>
        <p className={styles.pilani1}>Pilani</p>
      </div>
      <div className={styles.frameDiv}>
        <div className={styles.vuesaxboldboxWrapper}>
          <img
            className={styles.vuesaxboldtruckFastIcon}
            alt=""
            src="/vuesaxboldbox.svg"
          />
        </div>
        <div className={styles.frameWrapper}>
          <div className={styles.receivedWrapper}>
            <div className={styles.inProcessSendingCity}>{`Received `}</div>
          </div>
        </div>
      </div>
      <div className={styles.liveTrackingItem} />
      <div className={styles.liveTrackingItem} />
      <div className={styles.lineDiv} />
      <img className={styles.lineIcon} alt="" src="/line-2.svg" />
      <div className={styles.ellipseDiv} />
      <div className={styles.liveTrackingChild1} />
      <div className={styles.liveTrackingChild2} />
      <div className={styles.liveTrackingChild3} />
      <img className={styles.okIcon} alt="" src="/ok@2x.png" />
      <div className={styles.liveTrackingChild4} />
      <div className={styles.liveTrackingChild5} />
      <div className={styles.liveTrackingChild5} />
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <b className={styles.delivery}>Delivery</b>
        <div className={styles.back} onClick={onBackContainerClick}>
          <img className={styles.vectorIcon} alt="" src="/vector.svg" />
          <div className={styles.backChild} />
        </div>
      </div>
    </div>
  );
};

export default LiveTracking;
