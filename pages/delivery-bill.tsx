import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./delivery-bill.module.css";
const DeliveryBill: NextPage = () => {
  const router = useRouter();

  const onGroupContainerClick = useCallback(() => {
    router.push("/payment-screen");
  }, [router]);

  const onGroupContainer1Click = useCallback(() => {
    router.push("/package-details2");
  }, [router]);

  const onButtonContainerClick = useCallback(() => {
    router.push("/payment-screen");
  }, [router]);

  return (
    <div className={styles.deliveryBill}>
      <div className={styles.deliveryBillChild} />
      <b className={styles.sendParcel}>Send Parcel</b>
      <div className={styles.back}>
        <img className={styles.vectorIcon} alt="" src="/vector13.svg" />
        <div className={styles.backChild} />
      </div>
      <div className={styles.deliveryBillItem} />
      <div className={styles.pleaseEnsureThat}>
        Please ensure that the package is neatly ppackedand ready to be
        recieved.
      </div>
      <div className={styles.package}>Package</div>
      <div className={styles.deliveryBillInner} />
      <img className={styles.groupIcon} alt="" src="/group-17@2x.png" />
      <div className={styles.rectangleParent} onClick={onGroupContainerClick}>
        <div className={styles.groupChild} />
        <b className={styles.pay}>Pay</b>
      </div>
      <div className={styles.rectangleGroup} onClick={onGroupContainer1Click}>
        <div className={styles.groupItem} />
        <b className={styles.pay}>Back</b>
      </div>
      <div className={styles.amount}>Amount</div>
      <div className={styles.volunteerFeesPorterContainer}>
        <p className={styles.volunteerFees}>
          <span>
            <span>
              <span>Volunteer fees</span>
            </span>
          </span>
        </p>
        <p className={styles.volunteerFees}>
          <span>
            <span>
              <span>&nbsp;</span>
            </span>
          </span>
        </p>
        <p className={styles.volunteerFees}>
          <span>
            <span>
              <span>{`Porter `}</span>
              <span className={styles.hdfcergo}>HDFCErgo</span>
            </span>
          </span>
        </p>
        <ul className={styles.deliveryInsuranceServiceTyp}>
          <li className={styles.delivery}>
            <span>
              <span>Delivery</span>
            </span>
          </li>
          <li className={styles.delivery}>
            <span>
              <span>Insurance</span>
            </span>
          </li>
          <li className={styles.delivery}>
            <span>
              <span>Service type</span>
            </span>
          </li>
        </ul>
        <p className={styles.volunteerFees}>
          <span>
            <span>&nbsp;</span>
          </span>
        </p>
        <p className={styles.volunteerFees}>
          <span>
            <b>Total</b>
          </span>
        </p>
      </div>
      <div className={styles.rs}>
        <p className={styles.volunteerFees}>
          <span>
            <span>400/-</span>
          </span>
        </p>
        <p className={styles.volunteerFees}>
          <span>
            <span>&nbsp;</span>
          </span>
        </p>
        <p className={styles.volunteerFees}>
          <span>
            <span>390/-</span>
          </span>
        </p>
        <p className={styles.p2}>
          <span>
            <span>300/-</span>
          </span>
        </p>
        <p className={styles.volunteerFees}>
          <span>
            <span>99/-</span>
          </span>
        </p>
        <p className={styles.volunteerFees}>
          <span>
            <span>0/-</span>
          </span>
        </p>
        <p className={styles.volunteerFees}>
          <span>
            <span>&nbsp;</span>
          </span>
        </p>
        <p className={styles.rs1}>
          <b>799/- Rs</b>
        </p>
      </div>
      <div className={styles.button} onClick={onButtonContainerClick}>
        <img className={styles.iconLeft} alt="" src="/icon-left14.svg" />
        <div className={styles.label}>PAY</div>
        <img className={styles.iconLeft} alt="" src="/icon-right14.svg" />
      </div>
      <div className={styles.lineDiv} />
    </div>
  );
};

export default DeliveryBill;
