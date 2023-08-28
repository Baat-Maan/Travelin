import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./payment-screen.module.css";
const PaymentScreen: NextPage = () => {
  const router = useRouter();

  const onTickBoxClick = useCallback(() => {
    router.push("/payment-done");
  }, [router]);

  const onPurchaseCreditCardHoverStaClick = useCallback(() => {
    router.push("/payment-done");
  }, [router]);

  const onPurchaseContainer2Click = useCallback(() => {
    router.push("/payment-done");
  }, [router]);

  const onPurchaseContainer3Click = useCallback(() => {
    router.push("/payment-done");
  }, [router]);

  const onTickBox1Click = useCallback(() => {
    router.push("/payment-done");
  }, [router]);

  return (
    <div className={styles.paymentScreen}>
      <div className={styles.paymentScreenChild} />
      <b className={styles.sendParcel}>Send Parcel</b>
      <div className={styles.debitOrCredit}>Debit or Credit card</div>
      <div className={styles.upi}>UPI</div>
      <div className={styles.back}>
        <img className={styles.vectorIcon} alt="" src="/vector13.svg" />
        <div className={styles.backChild} />
      </div>
      <div className={styles.paymentScreenItem} />
      <img className={styles.paymentScreenInner} alt="" src="/line-111.svg" />
      <img className={styles.rectangleIcon} alt="" src="/rectangle-522.svg" />
      <div className={styles.syndicateBankDebit}>Syndicate Bank Debit Card</div>
      <div className={styles.div}>**** 0498</div>
      <div className={styles.firstLastName}>First Last Name</div>
      <div className={styles.expires052024}>Expires 05/2024</div>
      <img className={styles.image13Icon} alt="" src="/image-13@2x.png" />
      <button className={styles.rectangleButton} />
      <div className={styles.stateBankOf}>State Bank of India Debit Card</div>
      <div className={styles.div1}>**** 0498</div>
      <div className={styles.firstLastName1}>First Last Name</div>
      <div className={styles.expires0520241}>Expires 05/2024</div>
      <div className={styles.tickBox}>
        <div className={styles.tickBoxChild} />
        <img className={styles.tickBoxItem} alt="" src="/bed-occupancy.svg" />
      </div>
      <img className={styles.image14Icon} alt="" src="/image-14@2x.png" />
      <input
        className={styles.tickBox1}
        type="checkbox"
        onClick={onTickBoxClick}
      />
      <div
        className={styles.purchaseCreditCardHoverSta}
        onClick={onPurchaseCreditCardHoverStaClick}
      >
        <div className={styles.backChild}>
          <img
            className={styles.backgroundIcon}
            alt=""
            src="/bed-occupancy.svg"
          />
          <img
            className={styles.divider59pt0pt}
            alt=""
            src="/-divider--59pt-0pt1.svg"
          />
          <div className={styles.controlsSmallMiscFaceI} />
          <div className={styles.purchase}>
            <img
              className={styles.backgroundIcon}
              alt=""
              src="/backgrounds--white7.svg"
            />
            <div className={styles.container}>
              <div className={styles.title}>Paytm</div>
            </div>
          </div>
        </div>
        <img
          className={styles.controlsSmallArrowFw}
          alt=""
          src="/controls-small--arrow--fw4.svg"
        />
      </div>
      <div className={styles.purchase1}>
        <img
          className={styles.backgroundsWhite2}
          alt=""
          src="/backgrounds--white8.svg"
        />
        <div className={styles.container}>
          <div className={styles.title}>Google Pay</div>
        </div>
      </div>
      <div className={styles.purchase2} onClick={onPurchaseContainer2Click}>
        <img
          className={styles.backgroundsWhite2}
          alt=""
          src="/backgrounds--white9.svg"
        />
        <div className={styles.container}>
          <div className={styles.title}>Google Pay</div>
        </div>
        <img
          className={styles.controlsSmallArrowFw}
          alt=""
          src="/controls-small--arrow--fw5.svg"
        />
      </div>
      <div className={styles.purchase3} onClick={onPurchaseContainer3Click}>
        <img
          className={styles.backgroundsWhite4}
          alt=""
          src="/backgrounds--white10.svg"
        />
        <div className={styles.container3}>
          <div className={styles.title}>Phone Pay</div>
        </div>
      </div>
      <input
        className={styles.tickBox2}
        type="checkbox"
        onClick={onTickBox1Click}
      />
    </div>
  );
};

export default PaymentScreen;
