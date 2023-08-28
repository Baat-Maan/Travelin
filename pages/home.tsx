import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./home.module.css";
const Home: NextPage = () => {
  const router = useRouter();

  const onImage3Click = useCallback(() => {
    // Please sync "Bus Booking- home" to the project
  }, []);

  const onMyRideText1Click = useCallback(() => {
    router.push("/frame");
  }, [router]);

  const onBookingsTextClick = useCallback(() => {
    router.push("/bookings");
  }, [router]);

  const onPackageTextClick = useCallback(() => {
    router.push("/send-parcel-home");
  }, [router]);

  const onImage8IconClick = useCallback(() => {
    // Please sync "Profile" to the project
  }, []);

  const onImage2Click = useCallback(() => {
    // Please sync "Train Booking home" to the project
  }, []);

  const onImage4Click = useCallback(() => {
    // Please sync "Flight Booking- home" to the project
  }, []);

  const onImage5Click = useCallback(() => {
    router.push("/frame");
  }, [router]);

  const onImage6Click = useCallback(() => {
    router.push("/hotel-booking");
  }, [router]);

  const onImage7Click = useCallback(() => {
    router.push("/send-parcel-home");
  }, [router]);

  return (
    <div className={styles.home}>
      <div className={styles.home1}>
        <div className={styles.helloShruti}>
          <p className={styles.helloShruti1}>Hello, Shruti</p>
        </div>
        <div className={styles.explore}>Explore</div>
        <div className={styles.travelin}>TravelIn</div>
        <div className={styles.button}>
          <div className={styles.buttonChild} />
        </div>
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
        <div className={styles.button5}>
          <div className={styles.buttonChild} />
        </div>
        <div className={styles.trainBooking}>Train Booking</div>
        <div className={styles.busBooking}>Bus Booking</div>
        <div className={styles.packageDelivery}>Package Delivery</div>
        <div className={styles.myRide}>My ride</div>
        <div className={styles.hotel}>Hotel</div>
        <div className={styles.flights}>Flights</div>
        <img className={styles.homeChild} alt="" src="/line-4.svg" />
        <img className={styles.homeItem} alt="" src="/line-4.svg" />
        <img
          className={styles.image3Icon}
          alt=""
          src="/image-3@2x.png"
          onClick={onImage3Click}
        />
        <b className={styles.home2}>Home</b>
        <div className={styles.myRide1} onClick={onMyRideText1Click}>
          My ride
        </div>
        <div className={styles.bookings} onClick={onBookingsTextClick}>
          Bookings
        </div>
        <div className={styles.package} onClick={onPackageTextClick}>
          Package
        </div>
        <img
          className={styles.image8Icon}
          alt=""
          src="/image-8@2x.png"
          onClick={onImage8IconClick}
        />
      </div>
      <img
        className={styles.image2Icon}
        alt=""
        src="/image-24@2x.png"
        onClick={onImage2Click}
      />
      <img
        className={styles.image4Icon}
        alt=""
        src="/image-43@2x.png"
        onClick={onImage4Click}
      />
      <img
        className={styles.image5Icon}
        alt=""
        src="/image-5@2x.png"
        onClick={onImage5Click}
      />
      <img
        className={styles.image6Icon}
        alt=""
        src="/image-6@2x.png"
        onClick={onImage6Click}
      />
      <img
        className={styles.image7Icon}
        alt=""
        src="/image-7@2x.png"
        onClick={onImage7Click}
      />
    </div>
  );
};

export default Home;
