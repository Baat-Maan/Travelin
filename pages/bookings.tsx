import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./bookings.module.css";
const Bookings: NextPage = () => {
  const router = useRouter();

  const onVectorContainerClick = useCallback(() => {
    router.push("/home");
  }, [router]);

  return (
    <div className={styles.bookings}>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.additions}>Bookings</div>
        <img className={styles.frameItem} alt="" src="/vector-27.svg" />
        <div className={styles.vector} onClick={onVectorContainerClick}>
          <img className={styles.vectorIcon} alt="" src="/vector1.svg" />
        </div>
      </div>
      <img className={styles.image20Icon} alt="" src="/image-20@2x.png" />
      <div className={styles.shrutiDua}>
        <span className={styles.shrutiDuaTxtContainer}>
          <p className={styles.shrutiDua1}>Shruti Dua</p>
        </span>
      </div>
      <img className={styles.bookingsChild} alt="" src="/line-4.svg" />
      <div className={styles.myBookings}>My Bookings</div>
      <img className={styles.image21Icon} alt="" src="/image-21@2x.png" />
      <div className={styles.completedWed}>Completed | Wed 16 Aug</div>
      <div className={styles.completedWed1}>Completed | Wed 16 Aug</div>
      <div className={styles.mumbaiDelhi}>{`Mumbai -> Delhi`}</div>
      <img className={styles.image22Icon} alt="" src="/image-22@2x.png" />
      <div className={styles.adults}>2 Adults</div>
      <div className={styles.indigo}>Indigo</div>
      <div className={styles.tajHotels}>Taj Hotels</div>
      <div className={styles.bookingHistory}>Booking History</div>
      <img className={styles.image25Icon} alt="" src="/image-25@2x.png" />
    </div>
  );
};

export default Bookings;
