import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./frame.module.css";
const Frame: NextPage = () => {
  const router = useRouter();

  const onMyRideContainerClick = useCallback(() => {
    router.push("/home");
  }, [router]);

  const onButtonContainer8Click = useCallback(() => {
    router.push("/parking");
  }, [router]);

  const onButtonContainer9Click = useCallback(() => {
    router.push("/fastag");
  }, [router]);

  return (
    <div className={styles.myRideParent}>
      <div className={styles.myRide} onClick={onMyRideContainerClick}>
        <div className={styles.helloShruti}>
          <p className={styles.helloShruti1}>Hello, Shruti</p>
        </div>
        <div className={styles.explore}>Explore</div>
        <div className={styles.travelin}>TravelIn</div>
        <div className={styles.button}>
          <div className={styles.buttonChild} />
        </div>
        <img className={styles.image2Icon} alt="" src="/image-23@2x.png" />
        <div className={styles.button1}>
          <div className={styles.buttonChild} />
        </div>
        <div className={styles.button2}>
          <div className={styles.buttonChild} />
        </div>
        <div className={styles.button3}>
          <div className={styles.buttonChild} />
        </div>
        <div className={styles.button4}>
          <div className={styles.buttonChild} />
        </div>
        <div className={styles.button5}>
          <div className={styles.buttonChild} />
        </div>
        <div className={styles.button6}>
          <div className={styles.buttonChild} />
        </div>
        <div className={styles.button6}>
          <div className={styles.buttonChild} />
        </div>
        <div className={styles.search}>Search</div>
        <div className={styles.trainBooking}>Train Booking</div>
        <div className={styles.busBooking}>Bus Booking</div>
        <div className={styles.packageDelivery}>Package Delivery</div>
        <div className={styles.myRide1}>My ride</div>
        <div className={styles.hotel}>Hotel</div>
        <div className={styles.flights}>Flights</div>
        <img className={styles.myRideChild} alt="" src="/line-4.svg" />
        <img className={styles.myRideItem} alt="" src="/line-4.svg" />
        <img className={styles.image3Icon} alt="" src="/image-3@2x.png" />
        <b className={styles.home}>Home</b>
        <div className={styles.myRide2}>My ride</div>
        <div className={styles.bookings}>Bookings</div>
        <div className={styles.package}>Package</div>
        <img className={styles.image8Icon} alt="" src="/image-8@2x.png" />
        <div className={styles.myRideInner} />
      </div>
      <div className={styles.div}>
        <div className={styles.myRide3}>MY RIDE</div>
        <div className={styles.button8} onClick={onButtonContainer8Click}>
          <div className={styles.buttonChild5} />
        </div>
        <div className={styles.button9} onClick={onButtonContainer9Click}>
          <div className={styles.buttonChild5} />
        </div>
        <div className={styles.parkingSlots}>Parking slots</div>
        <div className={styles.fastag}>Fastag</div>
      </div>
    </div>
  );
};

export default Frame;
