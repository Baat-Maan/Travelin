import type { NextPage } from "next";
import { useCallback } from "react";
import { FormControlLabel, Checkbox, TextField } from "@mui/material";
import { useRouter } from "next/router";
import styles from "./package-details3.module.css";
const PackageDetails3: NextPage = () => {
  const router = useRouter();

  const onGroupContainer1Click = useCallback(() => {
    router.push("/send-parcel-home");
  }, [router]);

  const onButtonContainerClick = useCallback(() => {
    router.push("/insurance");
  }, [router]);

  return (
    <div className={styles.packageDetails}>
      <div className={styles.packageDetailsChild} />
      <b className={styles.sendParcel}>Send Parcel</b>
      <div className={styles.back}>
        <img className={styles.vectorIcon} alt="" src="/vector.svg" />
        <div className={styles.backChild} />
      </div>
      <div className={styles.packageDetailsItem} />
      <div className={styles.pleaseEnsureThat}>
        Please ensure that the package is neatly ppackedand ready to be
        recieved.
      </div>
      <div className={styles.package}>Package</div>
      <i className={styles.packageDetails1}>Package details</i>
      <div className={styles.packageDetailsInner} />
      <img className={styles.groupIcon} alt="" src="/group-171@2x.png" />
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <b className={styles.next}>Next</b>
      </div>
      <div className={styles.rectangleGroup} onClick={onGroupContainer1Click}>
        <div className={styles.groupItem} />
        <b className={styles.next}>Back</b>
      </div>
      <FormControlLabel
        className={styles.tickBox}
        label=""
        control={<Checkbox color="primary" defaultChecked size="medium" />}
      />
      <TextField
        className={styles.rectangleTextfield}
        sx={{ width: 343 }}
        color="primary"
        variant="outlined"
        type="text"
        label="Label"
        placeholder="Enter weight range"
        size="medium"
        margin="none"
        required
      />
      <TextField
        className={styles.packageDetailsChild1}
        sx={{ width: 343 }}
        color="primary"
        variant="outlined"
        type="text"
        label="Label"
        placeholder="Enter Contents"
        size="medium"
        margin="none"
        required
      />
      <div className={styles.weight}>Weight</div>
      <div className={styles.contentsOfPackage}>Contents of package</div>
      <div className={styles.enterWeightRange}>Enter weight range</div>
      <div className={styles.enterContents}>Enter contents</div>
      <div className={styles.declarePackageAs}>Declare package as fragile</div>
      <div className={styles.button} onClick={onButtonContainerClick}>
        <img className={styles.iconLeft} alt="" src="/icon-left19.svg" />
        <div className={styles.label}>{`PROCEED `}</div>
        <img className={styles.iconLeft} alt="" src="/icon-right19.svg" />
      </div>
      <div className={styles.lineDiv} />
    </div>
  );
};

export default PackageDetails3;
