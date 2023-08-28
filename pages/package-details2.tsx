import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./package-details2.module.css";
const PackageDetails2: NextPage = () => {
  const router = useRouter();

  const onGroupContainerClick = useCallback(() => {
    router.push("/delivery-bill");
  }, [router]);

  const onGroupContainer1Click = useCallback(() => {
    router.push("/package-details");
  }, [router]);

  const onButtonContainerClick = useCallback(() => {
    router.push("/delivery-bill");
  }, [router]);

  return (
    <div className={styles.packageDetails}>
      <div className={styles.packageDetailsChild} />
      <b className={styles.sendParcel}>Send Parcel</b>
      <div className={styles.back}>
        <img className={styles.vectorIcon} alt="" src="/vector13.svg" />
        <div className={styles.backChild} />
      </div>
      <div className={styles.packageDetailsItem} />
      <div className={styles.pleaseEnsureThat}>
        Please ensure that the package is neatly ppackedand ready to be
        recieved.
      </div>
      <div className={styles.package}>Package</div>
      <div className={styles.packageDetailsInner} />
      <img className={styles.groupIcon} alt="" src="/group-17@2x.png" />
      <div className={styles.rectangleParent} onClick={onGroupContainerClick}>
        <div className={styles.groupChild} />
        <b className={styles.next}>Next</b>
      </div>
      <div className={styles.parcelDetails}>Parcel details</div>
      <div className={styles.rectangleGroup} onClick={onGroupContainer1Click}>
        <div className={styles.groupItem} />
        <b className={styles.next}>Back</b>
      </div>
      <div className={styles.pickUpDropOffInsuranceContainer}>
        <p className={styles.pickUp}>Pick-up</p>
        <p className={styles.pickUp}>&nbsp;</p>
        <p className={styles.pickUp}>&nbsp;</p>
        <p className={styles.pickUp}>Drop-off</p>
        <p className={styles.pickUp}>&nbsp;</p>
        <p className={styles.pickUp}>&nbsp;</p>
        <p className={styles.pickUp}>&nbsp;</p>
        <p className={styles.pickUp}>Insurance</p>
      </div>
      <div className={styles.div}>
        <p className={styles.pickUp}>:</p>
        <p className={styles.pickUp}>&nbsp;</p>
        <p className={styles.pickUp}>&nbsp;</p>
        <p className={styles.pickUp}>:</p>
        <p className={styles.pickUp}>&nbsp;</p>
        <p className={styles.pickUp}>&nbsp;</p>
        <p className={styles.pickUp}>&nbsp;</p>
        <p className={styles.pickUp}>:</p>
      </div>
      <div className={styles.nirmalLifestyleMarigoldContainer}>
        <p className={styles.pickUp}>Nirmal Lifestyle</p>
        <p className={styles.pickUp}>&nbsp;</p>
        <p className={styles.pickUp}>&nbsp;</p>
        <p className={styles.pickUp}>Marigold Meridian</p>
        <p className={styles.pickUp}>&nbsp;</p>
        <p className={styles.pickUp}>&nbsp;</p>
        <p className={styles.pickUp}>&nbsp;</p>
        <p className={styles.pickUp}>Standard</p>
      </div>
      <div className={styles.button} onClick={onButtonContainerClick}>
        <img className={styles.iconLeft} alt="" src="/icon-left17.svg" />
        <div className={styles.label}>CONFIRM</div>
        <img className={styles.iconLeft} alt="" src="/icon-right17.svg" />
      </div>
      <div className={styles.lineDiv} />
    </div>
  );
};

export default PackageDetails2;
