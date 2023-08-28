import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./send-parcel-home.module.css";
const SendParcelHome: NextPage = () => {
  const router = useRouter();

  const onGroupImageClick = useCallback(() => {
    router.push("/activity");
  }, [router]);

  const onBackContainerClick = useCallback(() => {
    router.push("/home");
  }, [router]);

  const onRectangleButtonClick = useCallback(() => {
    router.push("/drop-off");
  }, [router]);

  const onRectangleButton1Click = useCallback(() => {
    router.push("/drop-off");
  }, [router]);

  const onGroupContainerClick = useCallback(() => {
    router.push("/package-details3");
  }, [router]);

  const onButtonContainerClick = useCallback(() => {
    router.push("/package-details3");
  }, [router]);

  return (
    <div className={styles.sendParcelHome}>
      <div className={styles.sendParcelHomeChild} />
      <b className={styles.sendParcel}>Send Parcel</b>
      <img
        className={styles.sendParcelHomeItem}
        alt=""
        src="/group-161@2x.png"
        onClick={onGroupImageClick}
      />
      <div className={styles.back} onClick={onBackContainerClick}>
        <img className={styles.vectorIcon} alt="" src="/vector11.svg" />
        <div className={styles.backChild} />
      </div>
      <div className={styles.sendParcelHomeInner} />
      <div className={styles.pleaseEnsureThat}>
        Please ensure that the package is neatly ppackedand ready to be
        recieved.
      </div>
      <div className={styles.package}>Package</div>
      <button
        className={styles.rectangleButton}
        onClick={onRectangleButtonClick}
      />
      <button
        className={styles.sendParcelHomeChild1}
        onClick={onRectangleButton1Click}
      />
      <div className={styles.pickUpDetails}>Pick-up details</div>
      <div className={styles.dropOffLoaction}>Drop-off loaction</div>
      <div className={styles.lineDiv} />
      <img className={styles.groupIcon} alt="" src="/group-171@2x.png" />
      <div className={styles.rectangleParent} onClick={onGroupContainerClick}>
        <div className={styles.groupChild} />
        <b className={styles.next}>Next</b>
      </div>
      <div className={styles.pickUpLocation}>Pick-up location</div>
      <div className={styles.pickUpLocation1}>Pick-up location</div>
      <div className={styles.button} onClick={onButtonContainerClick}>
        <img className={styles.iconLeft} alt="" src="/icon-left20.svg" />
        <div className={styles.label}>{`PROCEED `}</div>
        <img className={styles.iconLeft} alt="" src="/icon-right20.svg" />
      </div>
      <img className={styles.lineIcon} alt="" src="/line-4.svg" />
      <div className={styles.sendParcelHomeChild2} />
    </div>
  );
};

export default SendParcelHome;
