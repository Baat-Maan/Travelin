import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./hotel-page.module.css";
const HotelPage: NextPage = () => {
  const router = useRouter();

  const onArrowLeftIconClick = useCallback(() => {
    router.push("/search-location-and-date");
  }, [router]);

  return (
    <div className={styles.hotelPage}>
      <b className={styles.rooms}>ROOMS</b>
      <img
        className={styles.screenshot20220426At518}
        alt=""
        src="/screenshot-20220426-at-518-1@2x.png"
      />
      <div className={styles.specialRoomWithContainer}>
        <p className={styles.specialRoomWith}>
          special room with all facilities (530-565 sq. ft.)
        </p>
        <p className={styles.roomDetails}>
          <span className={styles.roomDetails1}>
            <span className={styles.roomDetail}>Room detail</span>
            <span className={styles.s}>s</span>
          </span>
          <span className={styles.s}>
            <span className={styles.span1}>{` `}</span>
          </span>
        </p>
      </div>
      <b className={styles.guestHouse}>Guest House</b>
      <img
        className={styles.screenshot20220426At5181}
        alt=""
        src="/screenshot-20220426-at-518-11@2x.png"
      />
      <div className={styles.aVarietyOfContainer}>
        <p className={styles.specialRoomWith}>
          A variety of connecting rooms with furnished semiprivate courtyards
          and terraces (520-685 sq. ft.)
        </p>
        <p className={styles.roomDetails2}>
          <span className={styles.roomDetails3}>Room details</span>
          <span className={styles.span2}>{` `}</span>
        </p>
      </div>
      <b className={styles.specialRoom}>Special Room</b>
      <img
        className={styles.screenshot20220426At522}
        alt=""
        src="/screenshot-20220426-at-522-1@2x.png"
      />
      <b className={styles.bestAvailableRateContainer}>
        <p className={styles.bestAvailableRate}>BEST AVAILABLE RATE</p>
        <p className={styles.bestAvailableRate}>25000</p>
        <p className={styles.blankLine}>&nbsp;</p>
        <p className={styles.blankLine}>{`  `}</p>
      </b>
      <div
        className={styles.averagePerNight}
      >{`Average per night, before taxes and fees `}</div>
      <b className={styles.bestAvailableRateContainer1}>
        <p className={styles.taj}>BEST AVAILABLE RATE</p>
        <p className={styles.taj}>35000</p>
      </b>
      <div
        className={styles.averagePerNight1}
      >{`Average per night, before taxes and fees `}</div>
      <img
        className={styles.screenshot20220427At515}
        alt=""
        src="/screenshot-20220427-at-515-1@2x.png"
      />
      <button className={styles.button}>
        <img className={styles.iconLeft} alt="" src="/icon-left1.svg" />
        <div className={styles.label}>MAP</div>
        <img className={styles.iconLeft} alt="" src="/icon-right1.svg" />
      </button>
      <div className={styles.bed1ExtraParent}>
        <div className={styles.bed1Container}>
          <p className={styles.taj}>1 BED / 1 EXTRA</p>
        </div>
        <div className={styles.upTo3GuestsParent}>
          <div className={styles.upTo3}>UP TO 3 GUESTS</div>
          <div className={styles.bedAvailable}>
            <p className={styles.taj}>BED AVAILABLE</p>
          </div>
          <img
            className={styles.bedOccupancyIcon}
            alt=""
            src="/bed-occupancy.svg"
          />
          <div className={styles.profile}>
            <img className={styles.guestsIcon} alt="" src="/guests1.svg" />
            <div className={styles.headline}>Profile</div>
          </div>
        </div>
      </div>
      <div className={styles.queenBeds}>2 QUEEN BEDS/</div>
      <div className={styles.to4Guests}>3 TO 4 GUESTS</div>
      <div className={styles.cribAvailable}>
        <p className={styles.taj}>1 CRIB AVAILABLE</p>
      </div>
      <div className={styles.profile1}>
        <img className={styles.guestsIcon} alt="" src="/guests2.svg" />
        <div className={styles.headline}>Profile</div>
      </div>
      <div className={styles.component109}>
        <div className={styles.aug}>17 Aug</div>
        <div className={styles.checkIn}>
          <span>Check-in</span>
          <span className={styles.span3}>{` `}</span>
        </div>
      </div>
      <div className={styles.component110}>
        <div className={styles.aug}>22 Aug</div>
        <div className={styles.checkOut}>{`Check out `}</div>
      </div>
      <div className={styles.component113}>
        <div className={styles.room2Guests}>{`1 room, 2 guests `}</div>
        <div className={styles.roomGuest}>{`Room & Guest`}</div>
      </div>
      <img className={styles.image18Icon} alt="" src="/image-18@2x.png" />
      <img className={styles.image19Icon} alt="" src="/image-18@2x.png" />
      <div className={styles.buttonWrapper}>
        <div className={styles.button1}>
          <img className={styles.iconLeft} alt="" src="/icon-left2.svg" />
          <div className={styles.label1}>BOOK</div>
          <img className={styles.iconLeft} alt="" src="/icon-right2.svg" />
        </div>
      </div>
      <div className={styles.buttonContainer}>
        <div className={styles.button1}>
          <img className={styles.iconLeft} alt="" src="/icon-left3.svg" />
          <div className={styles.label1}>BOOK</div>
          <img className={styles.iconLeft} alt="" src="/icon-right3.svg" />
        </div>
      </div>
      <div className={styles.homePageHeader}>
        <img
          className={styles.homePageHeaderChild}
          alt=""
          src="/rectangle-1.svg"
        />
        <div className={styles.tajHotel}>
          <p className={styles.taj}> TAJ</p>
          <p className={styles.taj}>&nbsp;</p>
          <p className={styles.taj}> HOTEL</p>
        </div>
      </div>
      <img className={styles.hotelPageChild} alt="" src="/group-16914.svg" />
      <div className={styles.div}>+91 8196965986</div>
      <img
        className={styles.arrowLeftIcon}
        alt=""
        src="/arrow-left.svg"
        onClick={onArrowLeftIconClick}
      />
    </div>
  );
};

export default HotelPage;
