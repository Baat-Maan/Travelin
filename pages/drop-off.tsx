import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./drop-off.module.css";
const DropOff: NextPage = () => {
  const router = useRouter();

  const onGroupButtonClick = useCallback(() => {
    router.push("/send-parcel-home");
  }, [router]);

  const onSendParcelButtonClick = useCallback(() => {
    router.push("/send-parcel-home");
  }, [router]);

  const onEllipse2Click = useCallback(() => {
    router.push("/send-parcel-home");
  }, [router]);

  return (
    <div className={styles.dropOff}>
      <img className={styles.image3Icon} alt="" src="/image-31@2x.png" />
      <button className={styles.dropOffChild} />
      <div className={styles.dropOffItem} />
      <div className={styles.navBar}>
        <div className={styles.navBarChild} />
        <div className={styles.home}>Home</div>
        <div className={styles.activity}>Activity</div>
        <div className={styles.transactions}>Transactions</div>
        <div className={styles.profile}>Profile</div>
        <img className={styles.navBarItem} alt="" src="/group-8.svg" />
        <img className={styles.navBarInner} alt="" src="/group-9.svg" />
        <img className={styles.groupIcon} alt="" src="/group-10.svg" />
        <img className={styles.navBarChild1} alt="" src="/group-11.svg" />
        <div className={styles.rectangleDiv} />
        <div className={styles.navBarChild2} />
        <div className={styles.navBarChild3} />
        <div className={styles.navBarChild4} />
      </div>
      <div className={styles.dropOffInner} />
      <img className={styles.dropOffChild1} alt="" src="/group-12.svg" />
      <img className={styles.dropOffChild2} alt="" src="/group-13.svg" />
      <button className={styles.rectangleParent} onClick={onGroupButtonClick}>
        <div className={styles.groupChild} />
        <div className={styles.thBlockJayanaga}>68, 4th Block, Jayanaga...</div>
        <div className={styles.groupItem} />
        <img className={styles.groupInner} alt="" src="/group-14.svg" />
      </button>
      <div className={styles.dropOffChild3} />
      <div className={styles.volunteerButton}>
        <div className={styles.volunteerButtonChild} />
        <div className={styles.volunteerButtonItem} />
        <div className={styles.volunteer}>Volunteer</div>
        <img className={styles.maskGroupIcon} alt="" src="/mask-group@2x.png" />
      </div>
      <div
        className={styles.sendParcelButton}
        onClick={onSendParcelButtonClick}
      >
        <div className={styles.volunteerButtonChild} />
        <div className={styles.sendParcel}>Send Parcel</div>
        <img className={styles.maskGroupIcon} alt="" src="/group-162@2x.png" />
      </div>
      <button className={styles.arrowParent}>
        <img className={styles.arrowIcon} alt="" src="/arrow.svg" />
        <img
          className={styles.ellipseIcon}
          alt=""
          src="/ellipse-13.svg"
          onClick={onEllipse2Click}
        />
        <img className={styles.vectorIcon} alt="" src="/vector15.svg" />
      </button>
      <b className={styles.thBlockJayanagar}>
        {" "}
        68, 4th Block, Jayanagar, Bengaluru - 560007
      </b>
    </div>
  );
};

export default DropOff;
