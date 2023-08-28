import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./itinerary-choice.module.css";
const ItineraryChoice: NextPage = () => {
  const router = useRouter();

  const onVectorContainerClick = useCallback(() => {
    router.push("/hotel-page");
  }, [router]);

  const onFamilyTripTextClick = useCallback(() => {
    router.push("/itinerary-family-trip");
  }, [router]);

  const onWorkTripTextClick = useCallback(() => {
    router.push("/itinerary-work-trip");
  }, [router]);

  return (
    <div className={styles.itineraryChoice}>
      <div className={styles.beachViewWrapper}>
        <b className={styles.beachView}>{`Beach View `}</b>
      </div>
      <div className={styles.viewMoreParent}>
        <div className={styles.viewMore}>VIEW MORE</div>
        <img className={styles.vectorIcon} alt="" src="/vector2.svg" />
      </div>
      <div className={styles.offeringUnparalleledBeachfroWrapper}>
        <div className={styles.offeringUnparalleledBeachfroContainer}>
          <span className={styles.offeringUnparalleledBeachfroContainer1}>
            <p className={styles.offeringUnparalleledBeachfro}>
              Offering unparalleled beachfront living (530-565 sq. ft.)
            </p>
            <p className={styles.offeringUnparalleledBeachfro}>
              <b>&nbsp;</b>
            </p>
            <p className={styles.offeringUnparalleledBeachfro}>
              <b>{`WHAT’S INCLUDED `}</b>
            </p>
            <p className={styles.offeringUnparalleledBeachfro}>
              <b>{` `}</b>
              <span> Luxurious accomodations</span>
            </p>
            <p
              className={styles.offeringUnparalleledBeachfro}
            >{`      Complimentary wireless internet access `}</p>
            <p className={styles.offeringUnparalleledBeachfro}>
              <b>&nbsp;</b>
            </p>
          </span>
        </div>
      </div>
      <img
        className={styles.screenshot20220426At756}
        alt=""
        src="/screenshot-20220426-at-756-1@2x.png"
      />
      <div className={styles.bed1ExtraParent}>
        <div className={styles.bed1Container}>
          <p className={styles.offeringUnparalleledBeachfro}>1 BED / 1 EXTRA</p>
        </div>
        <div className={styles.upTo3GuestsParent}>
          <div className={styles.upTo3}>UP TO 3 GUESTS</div>
          <div className={styles.bedAvailable}>
            <p className={styles.offeringUnparalleledBeachfro}>BED AVAILABLE</p>
          </div>
          <img
            className={styles.bedOccupancyIcon}
            alt=""
            src="/bed-occupancy1.svg"
          />
          <div className={styles.profile}>
            <img className={styles.guestsIcon} alt="" src="/guests3.svg" />
            <div className={styles.headline}>Profile</div>
          </div>
        </div>
      </div>
      <div className={styles.night}>50,000/night</div>
      <img
        className={styles.itineraryChoiceChild}
        alt=""
        src="/vector-27.svg"
      />
      <div className={styles.itineraryChoiceItem} />
      <b className={styles.reviewBooking}>REVIEW BOOKING</b>
      <div className={styles.component114}>
        <div className={styles.aug}>17 Aug</div>
        <div className={styles.checkIn}>
          <span>Check-in</span>
          <span className={styles.span}>{` `}</span>
        </div>
      </div>
      <div className={styles.component115}>
        <div className={styles.aug}>22 Aug</div>
        <div className={styles.checkOut}>{`Check out `}</div>
      </div>
      <div className={styles.component116}>
        <div className={styles.room2Guests}>{`1 room, 2 guests `}</div>
        <div className={styles.roomGuest}>{`Room & Guest`}</div>
      </div>
      <div className={styles.vector} onClick={onVectorContainerClick}>
        <img className={styles.vectorIcon1} alt="" src="/vector3.svg" />
      </div>
      <img
        className={styles.itineraryChoiceInner}
        alt=""
        src="/rectangle-3.svg"
      />
      <div className={styles.rectangleDiv} />
      <div className={styles.groupParent}>
        <div className={styles.groupWrapper}>
          <div className={styles.groupContainer}>
            <div className={styles.groupContainer}>
              <div className={styles.groupChild} />
            </div>
          </div>
        </div>
        <b className={styles.familyTrip} onClick={onFamilyTripTextClick}>
          Family Trip
        </b>
        <b className={styles.workTrip} onClick={onWorkTripTextClick}>
          Work Trip
        </b>
        <b className={styles.youreGoingFor}>You’re going for a?</b>
      </div>
    </div>
  );
};

export default ItineraryChoice;
