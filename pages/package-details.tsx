import type { NextPage } from "next";
import { useCallback } from "react";
import { TextField } from "@mui/material";
import { useRouter } from "next/router";
import styles from "./package-details.module.css";
const PackageDetails: NextPage = () => {
  const router = useRouter();

  const onButtonClick = useCallback(() => {
    router.push("/package-details2");
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
      <img className={styles.groupIcon} alt="" src="/group-171@2x.png" />
      <div className={styles.receiverDetails}>Receiver details</div>
      <TextField
        className={styles.rectangleTextfield}
        sx={{ width: 345 }}
        color="primary"
        variant="outlined"
        type="text"
        size="medium"
        margin="none"
        required
      />
      <TextField
        className={styles.packageDetailsChild1}
        sx={{ width: 345 }}
        color="primary"
        variant="outlined"
        type="text"
        size="medium"
        margin="none"
        required
      />
      <div className={styles.nameOfReceiver}>Name of receiver</div>
      <div className={styles.phoneNumberOf}>Phone number of receiver</div>
      <TextField
        className={styles.packageDetailsChild2}
        sx={{ width: 341 }}
        color="primary"
        variant="outlined"
        type="text"
        size="medium"
        margin="none"
      />
      <div className={styles.ewayBillNumberoptional}>
        Eway bill number(optional)
      </div>
      <button className={styles.button} onClick={onButtonClick}>
        <img className={styles.iconLeft} alt="" src="/icon-left15.svg" />
        <div className={styles.label}>{`PROCEED `}</div>
        <img className={styles.iconLeft} alt="" src="/icon-right15.svg" />
      </button>
    </div>
  );
};

export default PackageDetails;
