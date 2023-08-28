import type { NextPage } from "next";
import { useCallback } from "react";
import { FormControlLabel, Checkbox } from "@mui/material";
import { useRouter } from "next/router";
import styles from "./payment-confirmation.module.css";
const PaymentConfirmation: NextPage = () => {
  const router = useRouter();

  const onUPIContainerClick = useCallback(() => {
    router.push("/payment-done-hotel");
  }, [router]);

  const onVectorContainerClick = useCallback(() => {
    router.push("/booking-details");
  }, [router]);

  return (
    <div className={styles.paymentConfirmation}>
      <img
        className={styles.rwcriFacadeByNight12WideIcon}
        alt=""
        src="/rwcrifacadebynight12-widelarge169-2@2x.png"
      />
      <b className={styles.personalDetails}>PERSONAL DETAILS</b>
      <b className={styles.payment}>{`PAYMENT `}</b>
      <div className={styles.upi} onClick={onUPIContainerClick}>
        <img
          className={styles.backgroundsWhite}
          alt=""
          src="/backgrounds--white2.svg"
        />
        <img
          className={styles.controlsSmallArrowFw}
          alt=""
          src="/controls-small--arrow--fw1.svg"
        />
        <div className={styles.container}>
          <div className={styles.muted}>
            <div className={styles.subtitle}>Confirm your payment with UPI</div>
          </div>
          <div className={styles.title}>UPI</div>
        </div>
      </div>
      <div className={styles.creditCard}>
        <img
          className={styles.backgroundsWhite1}
          alt=""
          src="/backgrounds--white1.svg"
        />
        <div className={styles.container1}>
          <div className={styles.muted1}>
            <div className={styles.subtitle}>Pay with a credit card</div>
          </div>
          <div className={styles.title1}>Credit card</div>
        </div>
        <img className={styles.greyCardIcon} alt="" src="/grey-card-icon.svg" />
      </div>
      <div className={styles.groupParent}>
        <input className={styles.frameChild} type="text" required />
        <div className={styles.firstName}>FIRST NAME</div>
        <img className={styles.frameItem} alt="" src="/vector-32.svg" />
        <input className={styles.frameInner} type="text" required />
        <div className={styles.lastName}>LAST NAME</div>
        <img className={styles.vectorIcon} alt="" src="/vector-33.svg" />
        <input className={styles.groupInput} type="email" required />
        <div className={styles.email}>EMAIL</div>
        <img className={styles.frameChild1} alt="" src="/vector-34.svg" />
        <input className={styles.frameChild2} type="tel" required />
        <div className={styles.phoneNumber}>PHONE NUMBER</div>
        <img className={styles.frameChild3} alt="" src="/vector-35.svg" />
      </div>
      <div className={styles.paymentConfirmationChild} />
      <b className={styles.payment1}>PAYMENT</b>
      <div
        className={styles.allFieldsRequired}
      >{`All fields required unless otherwise noted. `}</div>
      <div className={styles.vector} onClick={onVectorContainerClick}>
        <img className={styles.vectorIcon1} alt="" src="/vector3.svg" />
      </div>
      <div className={styles.pickUpLocation}>Pick-up location</div>
      <img
        className={styles.paymentConfirmationItem}
        alt=""
        src="/rectangle-52.svg"
      />
      <div className={styles.syndicateBankDebit}>Syndicate Bank Debit Card</div>
      <div className={styles.div}>**** 0498</div>
      <div className={styles.firstLastName}>First Last Name</div>
      <div className={styles.expires052024}>Expires 05/2024</div>
      <FormControlLabel
        className={styles.tickBox}
        label=""
        labelPlacement="end"
        control={<Checkbox color="warning" defaultChecked size="medium" />}
      />
      <img className={styles.image13Icon} alt="" src="/image-13@2x.png" />
      <input
        className={styles.paymentConfirmationInner}
        type="text"
        placeholder="Enter CVV"
      />
      <div className={styles.whatIsCvv}>What is CVV?</div>
    </div>
  );
};

export default PaymentConfirmation;
