import type { NextPage } from "next";
import { useCallback } from "react";
import { FormControlLabel, Checkbox } from "@mui/material";
import { useRouter } from "next/router";
import styles from "./index.module.css";
const VehicleDetails: NextPage = () => {
  const router = useRouter();

  const onButtonClick = useCallback(() => {
    router.push("/recharge-done");
  }, [router]);

  const onButton2Click = useCallback(() => {
    router.push("/tag-balance");
  }, [router]);

  const onBackContainerClick = useCallback(() => {
    router.push("/fastag");
  }, [router]);

  return (
    <div className={styles.vehicleDetails}>
      <input
        className={styles.vehicleDetailsChild}
        type="text"
        placeholder="DL3CC10XX"
        maxLength={10}
        minLength={10}
        required
      />
      <input
        className={styles.vehicleDetailsItem}
        type="number"
        placeholder="Rupees"
        min={1}
        required
      />
      <label className={styles.vehicleDetailsInner}>
        <div className={styles.vehicleNoWrapper}>
          <div className={styles.vehicleNo}>Vehicle No.</div>
        </div>
      </label>
      <div className={styles.groupDiv}>
        <div className={styles.enterTheAmountToRechargeWrapper}>
          <div className={styles.enterTheAmount}>
            Enter the amount to recharge
          </div>
        </div>
      </div>
      <div className={styles.rectangleDiv} />
      <div className={styles.groupParent}>
        <div className={styles.frameParent}>
          <div className={styles.walletBalanceWrapper}>
            <div className={styles.vehicleNo}>Wallet Balance</div>
          </div>
          <div className={styles.wrapper}>
            <div className={styles.div}>₹ 235.00</div>
          </div>
        </div>
        <div className={styles.frame}>
          <img className={styles.groupIcon} alt="" src="/group.svg" />
        </div>
      </div>
      <div className={styles.frameDiv} />
      <div className={styles.krishnaChandhok}>Krishna Chandhok</div>
      <div className={styles.idfcBank}>IDFC Bank</div>
      <div className={styles.switchToHdfc}>Switch to HDFC now</div>
      <div className={styles.nameWrapper}>
        <div className={styles.vehicleNo}>{`Name `}</div>
      </div>
      <div className={styles.issuedBank}>Issued Bank</div>
      <button className={styles.button} autoFocus onClick={onButtonClick}>
        <div className={styles.register}>Recharge</div>
      </button>
      <button className={styles.button1} autoFocus>
        <div className={styles.register}>Confirm</div>
      </button>
      <button className={styles.button2} autoFocus onClick={onButton2Click}>
        <div className={styles.register}>Your Tolls</div>
      </button>
      <div className={styles.separator} />
      <img className={styles.fastTag1} alt="" src="/fast-tag-1@2x.png" />
      <div className={styles.back} onClick={onBackContainerClick}>
        <img className={styles.vectorIcon} alt="" src="/vector.svg" />
        <div className={styles.backChild} />
      </div>
      <div className={styles.fastagHdfcergo}>
        <span>
          <b>Fastag</b>
        </span>
        <span className={styles.hdfcergo}>
          <span>{` `}</span>
          <span>HDFCErgo</span>
        </span>
      </div>
      <FormControlLabel
        className={styles.rectangleFormcontrollabel}
        label=""
        control={<Checkbox color="success" defaultChecked size="medium" />}
      />
      <div className={styles.getInsuredAt}>Get Insured at ₹ 199</div>
    </div>
  );
};

export default VehicleDetails;
