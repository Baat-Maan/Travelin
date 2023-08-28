import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./hotel-booking.module.css";
const HotelBooking: NextPage = () => {
  const router = useRouter();

  const onHomeTextClick = useCallback(() => {
    router.push("/home");
  }, [router]);

  const onImage10Click = useCallback(() => {
    router.push("/search-location-and-date");
  }, [router]);

  return (
    <div className={styles.hotelBooking}>
      <img className={styles.hotelBookingChild} alt="" src="/line-4.svg" />
      <img className={styles.hotelBookingItem} alt="" src="/line-4.svg" />
      <div className={styles.home} onClick={onHomeTextClick}>
        Home
      </div>
      <img className={styles.image15Icon} alt="" src="/image-15@2x.png" />
      <div className={styles.button}>
        <img className={styles.iconLeft} alt="" src="/icon-left10.svg" />
        <div className={styles.label}>BOOK NOW</div>
        <img className={styles.iconLeft} alt="" src="/icon-right10.svg" />
      </div>
      <div className={styles.button1}>
        <img className={styles.iconLeft} alt="" src="/icon-left111.svg" />
        <div className={styles.label}>BOOK NOW</div>
        <img className={styles.iconLeft} alt="" src="/icon-right111.svg" />
      </div>
      <div className={styles.discountBanner}>
        <div className={styles.getYourFamily}>
          Get your family and yourself insured and avail 30% off on next 3 hotel
          bookings
        </div>
        <div className={styles.button2}>
          <img className={styles.iconLeft2} alt="" src="/icon-left12.svg" />
          <div className={styles.label2}>BUY INSURANCE</div>
          <img className={styles.iconLeft2} alt="" src="/icon-right12.svg" />
        </div>
      </div>
      <div className={styles.hotel}>Hotel</div>
      <div className={styles.button3}>
        <div className={styles.buttonChild} />
      </div>
      <img className={styles.image9Icon} alt="" src="/image-9@2x.png" />
      <img
        className={styles.image10Icon}
        alt=""
        src="/image-10@2x.png"
        onClick={onImage10Click}
      />
      <img className={styles.image16Icon} alt="" src="/image-16@2x.png" />
      <div className={styles.indiaMumbai}>INDIA / Mumbai</div>
      <div className={styles.jwMarriott}>
        <p className={styles.blankLine}>&nbsp;</p>
        <p className={styles.jwMarriott1}>
          <b>JW Marriott</b>
        </p>
      </div>
      <b className={styles.holidayInn}>
        <p className={styles.blankLine}>&nbsp;</p>
        <p className={styles.blankLine}>Holiday INN</p>
      </b>
    </div>
  );
};

export default HotelBooking;
