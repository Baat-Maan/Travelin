import type { NextPage } from "next";
import styles from "./payment-done.module.css";
const PaymentDone: NextPage = () => {
  return (
    <div className={styles.paymentDone}>
      <div className={styles.paymentDoneChild} />
      <b className={styles.sendParcel}>Send Parcel</b>
      <div className={styles.debitOrCredit}>Debit or Credit card</div>
      <div className={styles.upi}>UPI</div>
      <div className={styles.back}>
        <img className={styles.vectorIcon} alt="" src="/vector13.svg" />
        <div className={styles.backChild} />
      </div>
      <img className={styles.paymentDoneItem} alt="" src="/line-11.svg" />
      <img
        className={styles.paymentDoneInner}
        alt=""
        src="/rectangle-521.svg"
      />
      <div className={styles.syndicateBankDebit}>Syndicate Bank Debit Card</div>
      <div className={styles.div}>**** 0498</div>
      <div className={styles.firstLastName}>First Last Name</div>
      <div className={styles.expires052024}>Expires 05/2024</div>
      <div className={styles.tickBox}>
        <div className={styles.tickBoxChild} />
        <img className={styles.tickBoxItem} alt="" src="/vector-11.svg" />
      </div>
      <img className={styles.image13Icon} alt="" src="/image-13@2x.png" />
      <div className={styles.rectangleDiv} />
      <div className={styles.stateBankOf}>State Bank of India Debit Card</div>
      <div className={styles.div1}>**** 0498</div>
      <div className={styles.firstLastName1}>First Last Name</div>
      <div className={styles.expires0520241}>Expires 05/2024</div>
      <div className={styles.paymentDoneChild1} />
      <div className={styles.enterCvv}>Enter CVV</div>
      <div className={styles.whatIsCvv}>What is CVV?</div>
      <div className={styles.tickBox1}>
        <div className={styles.tickBoxInner} />
        <img className={styles.tickBoxChild1} alt="" src="/bed-occupancy.svg" />
      </div>
      <img className={styles.image14Icon} alt="" src="/image-14@2x.png" />
      <div className={styles.tickBox2}>
        <div className={styles.tickBoxChild2} />
        <img className={styles.tickBoxChild1} alt="" src="/bed-occupancy.svg" />
      </div>
      <div className={styles.purchaseCreditCardHoverSta}>
        <div className={styles.backChild}>
          <img
            className={styles.backgroundIcon}
            alt=""
            src="/bed-occupancy.svg"
          />
          <img
            className={styles.divider59pt0pt}
            alt=""
            src="/-divider--59pt-0pt.svg"
          />
          <div className={styles.controlsSmallMiscFaceI} />
          <div className={styles.purchase}>
            <img
              className={styles.backgroundIcon}
              alt=""
              src="/backgrounds--white3.svg"
            />
            <div className={styles.container}>
              <div className={styles.title}>Paytm</div>
            </div>
          </div>
        </div>
        <img
          className={styles.controlsSmallArrowFw}
          alt=""
          src="/controls-small--arrow--fw2.svg"
        />
      </div>
      <div className={styles.purchase1}>
        <img
          className={styles.backgroundsWhite2}
          alt=""
          src="/backgrounds--white4.svg"
        />
        <div className={styles.container}>
          <div className={styles.title}>Google Pay</div>
        </div>
      </div>
      <div className={styles.purchase1}>
        <img
          className={styles.backgroundsWhite2}
          alt=""
          src="/backgrounds--white5.svg"
        />
        <div className={styles.container}>
          <div className={styles.title}>Google Pay</div>
        </div>
        <img
          className={styles.controlsSmallArrowFw}
          alt=""
          src="/controls-small--arrow--fw3.svg"
        />
      </div>
      <div className={styles.purchase3}>
        <img
          className={styles.backgroundsWhite4}
          alt=""
          src="/backgrounds--white6.svg"
        />
        <div className={styles.container3}>
          <div className={styles.title}>Phone Pay</div>
        </div>
      </div>
      <img className={styles.lineIcon} alt="" src="/line-4.svg" />
      <img className={styles.rectangleIcon} alt="" src="/rectangle-3.svg" />
      <div className={styles.rectangleParent} class="popup">
        <div className={styles.groupChild} />
        <img
          className={styles.emojioneCheckMarkButtonIcon}
          alt=""
          src="/emojionecheckmarkbutton1.svg"
        />
        <div className={styles.paymentSuccessfullyDone}>
          Payment successfully done
        </div>
      </div>
    </div>
  );
};

export default PaymentDone;
