import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./payment-done-hotel.module.css";
const PaymentDoneHotel: NextPage = () => {
  const router = useRouter();

  const onVectorContainerClick = useCallback(() => {
    router.push("/booking-details");
  }, [router]);

  return (
    <div className={styles.paymentDoneHotel}>
      <img
        className={styles.rwcriFacadeByNight12WideIcon}
        alt=""
        src="/rwcrifacadebynight12-widelarge169-2@2x.png"
      />
      <b className={styles.personalDetails}>PERSONAL DETAILS</b>
      <b className={styles.payment}>{`PAYMENT `}</b>
      <div className={styles.upi}>
        <img
          className={styles.backgroundsWhite}
          alt=""
          src="/backgrounds--white.svg"
        />
        <img
          className={styles.controlsSmallArrowFw}
          alt=""
          src="/controls-small--arrow--fw.svg"
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
        <div className={styles.groupWrapper}>
          <div className={styles.groupContainer}>
            <div className={styles.groupContainer}>
              <div className={styles.groupChild} />
            </div>
          </div>
        </div>
        <div className={styles.shruti}>Shruti</div>
        <div className={styles.firstName}>FIRST NAME</div>
        <img className={styles.frameChild} alt="" src="/vector-32.svg" />
        <div className={styles.groupFrame}>
          <div className={styles.groupContainer}>
            <div className={styles.groupContainer}>
              <div className={styles.groupChild} />
            </div>
          </div>
        </div>
        <div className={styles.dua}>Dua</div>
        <div className={styles.lastName}>LAST NAME</div>
        <img className={styles.frameItem} alt="" src="/vector-33.svg" />
        <div className={styles.groupWrapper1}>
          <div className={styles.groupContainer}>
            <div className={styles.groupContainer}>
              <div className={styles.groupChild} />
            </div>
          </div>
        </div>
        <div className={styles.duashruti01gmailcom}>duashruti01@gmail.com</div>
        <div className={styles.email}>EMAIL</div>
        <img className={styles.frameInner} alt="" src="/vector-34.svg" />
        <div className={styles.groupWrapper3}>
          <div className={styles.groupContainer}>
            <div className={styles.groupContainer}>
              <div className={styles.groupChild} />
            </div>
          </div>
        </div>
        <div className={styles.div}>+91 8196965986</div>
        <div className={styles.phoneNumber}>PHONE NUMBER</div>
        <img className={styles.vectorIcon} alt="" src="/vector-35.svg" />
      </div>
      <div className={styles.paymentDoneHotelChild} />
      <b className={styles.payment1}>PAYMENT</b>
      <div
        className={styles.allFieldsRequired}
      >{`All fields required unless otherwise noted. `}</div>
      <div className={styles.vector} onClick={onVectorContainerClick}>
        <img className={styles.vectorIcon1} alt="" src="/vector3.svg" />
      </div>
      <div className={styles.pickUpLocation}>Pick-up location</div>
      <img
        className={styles.paymentDoneHotelItem}
        alt=""
        src="/rectangle-52.svg"
      />
      <div className={styles.syndicateBankDebit}>Syndicate Bank Debit Card</div>
      <div className={styles.div1}>**** 0498</div>
      <div className={styles.firstLastName}>First Last Name</div>
      <div className={styles.expires052024}>Expires 05/2024</div>
      <div className={styles.tickBox}>
        <div className={styles.tickBoxChild} />
        <img className={styles.tickBoxItem} alt="" src="/vector-11.svg" />
      </div>
      <img className={styles.image13Icon} alt="" src="/image-13@2x.png" />
      <div className={styles.paymentDoneHotelInner} />
      <div className={styles.enterCvv}>Enter CVV</div>
      <div className={styles.whatIsCvv}>What is CVV?</div>
      <img className={styles.rectangleIcon} alt="" src="/rectangle-31.svg" />
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild1} />
        <img
          className={styles.emojioneCheckMarkButtonIcon}
          alt=""
          src="/emojionecheckmarkbutton.svg"
        />
        <div className={styles.hotelSuccessfullyBooked}>
          Hotel Successfully Booked
        </div>
      </div>
    </div>
  );
};

export default PaymentDoneHotel;
