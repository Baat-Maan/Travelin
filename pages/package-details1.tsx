import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./package-details1.module.css";
const PackageDetails1: NextPage = () => {
  const router = useRouter();

  const onGroupContainerClick = useCallback(() => {
    router.push("/package-details");
  }, [router]);

  const onGroupContainer1Click = useCallback(() => {
    router.push("/insurance");
  }, [router]);

  const onButtonContainerClick = useCallback(() => {
    router.push("/package-details");
  }, [router]);

  return (
    <div className={styles.packageDetails}>
      <div className={styles.packageDetailsChild} />
      <b className={styles.sendParcel}>Send Parcel</b>
      <div className={styles.back}>
        <img className={styles.vectorIcon} alt="" src="/vector14.svg" />
        <div className={styles.backChild} />
      </div>
      <div className={styles.packageDetailsItem} />
      <div className={styles.pleaseEnsureThat}>
        Please ensure that the package is neatly ppackedand ready to be
        recieved.
      </div>
      <div className={styles.package}>Package</div>
      <div className={styles.packageDetailsInner} />
      <img className={styles.groupIcon} alt="" src="/group-171@2x.png" />
      <div className={styles.rectangleParent} onClick={onGroupContainerClick}>
        <div className={styles.groupChild} />
        <b className={styles.next}>Next</b>
      </div>
      <div className={styles.parcelPictures}>Parcel pictures</div>
      <div className={styles.rectangleGroup} onClick={onGroupContainer1Click}>
        <div className={styles.groupItem} />
        <b className={styles.next}>Back</b>
      </div>
      <div className={styles.rectangleDiv} />
      <div
        className={styles.hfaindcoijojwclqujoheic}
      >{`&#8hfaindcOIjO(JWc?L(#QUJ@(O.HEIC`}</div>
      <img className={styles.packageDetailsChild1} alt="" src="/group-34.svg" />
      <div className={styles.button} onClick={onButtonContainerClick}>
        <img className={styles.iconLeft} alt="" src="/icon-left16.svg" />
        <div className={styles.label}>{`PROCEED `}</div>
        <img className={styles.iconLeft} alt="" src="/icon-right16.svg" />
      </div>
      <div className={styles.lineDiv} />
      <button className={styles.rectangleContainer}>
        <div className={styles.groupInner} />
        <b className={styles.uploadPhoto}>Upload photo</b>
        <img className={styles.uploadIcon} alt="" src="/upload@2x.png" />
      </button>
    </div>
  );
};

export default PackageDetails1;
