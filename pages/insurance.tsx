import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./insurance.module.css";
const Insurance: NextPage = () => {
  const router = useRouter();

  const onGroupContainerClick = useCallback(() => {
    router.push("/package-details1");
  }, [router]);

  const onButtonContainerClick = useCallback(() => {
    router.push("/package-details1");
  }, [router]);

  return (
    <div className={styles.insurance}>
      <div className={styles.insuranceChild} />
      <b className={styles.sendParcel}>Send Parcel</b>
      <div className={styles.back}>
        <img className={styles.vectorIcon} alt="" src="/vector14.svg" />
        <div className={styles.backChild} />
      </div>
      <div className={styles.insuranceItem} />
      <div className={styles.pleaseEnsureThat}>
        Please ensure that the package is neatly ppackedand ready to be
        recieved.
      </div>
      <div className={styles.package}>Package</div>
      <div className={styles.insuranceInner} />
      <img className={styles.groupIcon} alt="" src="/group-171@2x.png" />
      <div className={styles.rectangleParent} onClick={onGroupContainerClick}>
        <div className={styles.groupChild} />
        <b className={styles.next}>Next</b>
      </div>
      <div className={styles.rectangleGroup}>
        <div className={styles.groupItem} />
        <b className={styles.next}>Back</b>
      </div>
      <div className={styles.packageInsurance}>Package Insurance</div>
      <input className={styles.tickBox} type="checkbox" />
      <div className={styles.standard}>Standard</div>
      <div className={styles.paid}>Paid</div>
      <div className={styles.rs99}> Rs 99/-</div>
      <div className={styles.rs299}>Rs 299 /-</div>
      <input
        className={styles.tickBox1}
        type="checkbox"
        defaultChecked={true}
      />
      <div className={styles.getUpto500}>
        Get upto 500/- Rs reimbursed for damage or package loss/theft.
      </div>
      <div className={styles.getUpto5000}>
        Get upto 5000/- Rs reimbursed for damage of package loss/theft.
      </div>
      <div className={styles.button} onClick={onButtonContainerClick}>
        <img className={styles.iconLeft} alt="" src="/icon-left18.svg" />
        <div className={styles.label}>{`PROCEED `}</div>
        <img className={styles.iconLeft} alt="" src="/icon-right18.svg" />
      </div>
      <div className={styles.lineDiv} />
    </div>
  );
};

export default Insurance;
