import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./search-location-and-date.module.css";
const SearchLocationAndDate: NextPage = () => {
  const router = useRouter();

  const onGroupContainer2Click = useCallback(() => {
    router.push("/calender");
  }, [router]);

  const onButtonContainerClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onGroupContainer11Click = useCallback(() => {
    router.push("/location-search-bar");
  }, [router]);

  const onVectorContainerClick = useCallback(() => {
    router.push("/hotel-booking");
  }, [router]);

  return (
    <div className={styles.searchLocationAndDate}>
      <img
        className={styles.searchLocationAndDateChild}
        alt=""
        src="/rectangle-11.svg"
      />
      <img
        className={styles.rwcriFacadeByNight12WideIcon}
        alt=""
        src="/rwcrifacadebynight12-widelarge169-2@2x.png"
      />
      <img className={styles.navigationIcon} alt="" src="/navigation.svg" />
      <div className={styles.explore}>
        <img className={styles.exploreChild} alt="" src="/group-71.svg" />
        <div className={styles.headline}>Explore</div>
      </div>
      <div className={styles.bookings}>
        <img
          className={styles.bedOccupancyIcon}
          alt=""
          src="/bed-occupancy4.svg"
        />
        <div className={styles.headline1}>Bookings</div>
      </div>
      <div className={styles.wishlist}>
        <img className={styles.vectorIcon} alt="" src="/vector5.svg" />
        <div className={styles.headline2}>Wishlist</div>
      </div>
      <div className={styles.profile}>
        <img className={styles.guestsIcon} alt="" src="/guests4.svg" />
        <div className={styles.headline3}>Profile</div>
      </div>
      <div
        className={styles.searchLocationAndDateInner}
        onClick={onGroupContainer2Click}
      >
        <div className={styles.groupWrapper}>
          <div className={styles.groupWrapper}>
            <div className={styles.groupChild} />
          </div>
        </div>
      </div>
      <div className={styles.fri18Aug}>Fri, 18 Aug - Tues, 22 Aug</div>
      <img
        className={styles.searchLocationAndDateItem}
        alt=""
        src="/vector-23.svg"
      />
      <img
        className={styles.searchLocationAndDateChild1}
        alt=""
        src="/vector-23.svg"
      />
      <div className={styles.groupDiv}>
        <div className={styles.groupWrapper}>
          <div className={styles.groupWrapper}>
            <div className={styles.groupChild} />
          </div>
        </div>
      </div>
      <div className={styles.room2Guests}>1 Room, 2 Guests</div>
      <div className={styles.searchLocationAndDateInner1}>
        <div className={styles.groupWrapper}>
          <div className={styles.groupWrapper}>
            <div className={styles.groupChild} />
          </div>
        </div>
      </div>
      <div className={styles.ind}>IND</div>
      <div className={styles.profile}>
        <img className={styles.guestsIcon} alt="" src="/guests4.svg" />
        <div className={styles.headline3}>Profile</div>
      </div>
      <img className={styles.component20Icon} alt="" src="/component-20.svg" />
      <div className={styles.location}>
        <p className={styles.location1}>LOCATION</p>
      </div>
      <div className={styles.dates}>
        <p className={styles.location1}>DATES</p>
      </div>
      <img
        className={styles.searchLocationAndDateChild2}
        alt=""
        src="/vector-23.svg"
      />
      <img className={styles.calendarIcon} alt="" src="/calendar.svg" />
      <div className={styles.roomGuest}>{`ROOM & GUEST`}</div>
      <img
        className={styles.searchLocationAndDateChild3}
        alt=""
        src="/vector-23.svg"
      />
      <div className={styles.currency}>CURRENCY</div>
      <img
        className={styles.searchLocationAndDateChild4}
        alt=""
        src="/vector-23.svg"
      />
      <img
        className={styles.searchLocationAndDateItem}
        alt=""
        src="/vector-23.svg"
      />
      <div className={styles.button} onClick={onButtonContainerClick}>
        <img className={styles.iconLeft} alt="" src="/icon-left8.svg" />
        <div className={styles.label}>CHECK RATES</div>
        <img className={styles.iconLeft} alt="" src="/icon-right8.svg" />
      </div>
      <div
        className={styles.searchLocationAndDateInner2}
        onClick={onGroupContainer11Click}
      >
        <div className={styles.groupWrapper}>
          <div className={styles.groupWrapper}>
            <div className={styles.groupChild} />
          </div>
        </div>
      </div>
      <div className={styles.tajHotel}>Taj Hotel , Mumbai</div>
      <img className={styles.vectorIcon1} alt="" src="/vector6.svg" />
      <img className={styles.vectorIcon2} alt="" src="/vector7.svg" />
      <img className={styles.vectorIcon3} alt="" src="/vector8.svg" />
      <img className={styles.vectorIcon4} alt="" src="/vector9.svg" />
      <div className={styles.vector} onClick={onVectorContainerClick}>
        <img className={styles.vectorIcon5} alt="" src="/vector3.svg" />
      </div>
    </div>
  );
};

export default SearchLocationAndDate;
