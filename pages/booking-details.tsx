import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./booking-details.module.css";
const BookingDetails: NextPage = () => {
  const router = useRouter();

  const onButtonContainerClick = useCallback(() => {
    router.push("/itinerary-choice");
  }, [router]);

  const onVectorContainerClick = useCallback(() => {
    router.push("/hotel-page");
  }, [router]);

  const onButtonContainer1Click = useCallback(() => {
    router.push("/payment-confirmation");
  }, [router]);

  return (
    <div className={styles.bookingDetails}>
      <img
        className={styles.rwcriFacadeByNight12WideIcon}
        alt=""
        src="/rwcrifacadebynight12-widelarge169-2@2x.png"
      />
      <div className={styles.weHavePlannedContainer}>
        <p className={styles.weHavePlannedPlacesForYou}>
          <span className={styles.weHavePlannedPlacesForYou1}>
            <span>We have planned places for you to visit!</span>
          </span>
        </p>
        <p className={styles.weHavePlannedPlacesForYou}>
          <span className={styles.weHavePlannedPlacesForYou1}>
            <span>&nbsp;</span>
          </span>
        </p>
        <p className={styles.weHavePlannedPlacesForYou}>
          <span className={styles.weHavePlannedPlacesForYou1}>
            <span>DAY 1</span>
          </span>
        </p>
        <p className={styles.weHavePlannedPlacesForYou}>
          <span className={styles.weHavePlannedPlacesForYou1}>
            <span>&nbsp;</span>
          </span>
        </p>
        <p className={styles.marineDrive}>
          <span>
            <span className={styles.weHavePlannedPlacesForYou1}>
              Marine Drive
            </span>
            <span
              className={styles.span}
            >{`                                   `}</span>
            <span className={styles.span1}>{` `}</span>
          </span>
        </p>
        <p className={styles.weHavePlannedPlacesForYou}>
          <span>
            <span className={styles.weHavePlannedPlacesForYou1}>
              Gateway of India
            </span>
          </span>
        </p>
        <p className={styles.weHavePlannedPlacesForYou}>
          <span>
            <span className={styles.weHavePlannedPlacesForYou1}>
              CSMT Circle
            </span>
          </span>
        </p>
      </div>
      <div className={styles.weHavePlannedContainer}>
        <p className={styles.weHavePlannedPlacesForYou}>
          <span className={styles.weHavePlannedPlacesForYou1}>
            <span>We have planned places for you to visit!</span>
          </span>
        </p>
        <p className={styles.weHavePlannedPlacesForYou}>
          <span className={styles.weHavePlannedPlacesForYou1}>
            <span>&nbsp;</span>
          </span>
        </p>
        <p className={styles.weHavePlannedPlacesForYou}>
          <span className={styles.weHavePlannedPlacesForYou1}>
            <span>DAY 1</span>
          </span>
        </p>
        <p className={styles.weHavePlannedPlacesForYou}>
          <span className={styles.weHavePlannedPlacesForYou1}>
            <span>&nbsp;</span>
          </span>
        </p>
        <p className={styles.marineDrive}>
          <span>
            <span className={styles.weHavePlannedPlacesForYou1}>
              Marine Drive
            </span>
            <span
              className={styles.span}
            >{`                                  `}</span>
          </span>
        </p>
        <p className={styles.weHavePlannedPlacesForYou}>
          <span>
            <span className={styles.weHavePlannedPlacesForYou1}>
              Gateway of India
            </span>
          </span>
        </p>
        <p className={styles.weHavePlannedPlacesForYou}>
          <span>
            <span className={styles.weHavePlannedPlacesForYou1}>
              CSMT Circle
            </span>
          </span>
        </p>
      </div>
      <div className={styles.rs50000XContainer}>
        <p className={styles.weHavePlannedPlacesForYou}>
          <span className={styles.rs50000X1Night1}>
            <span>Rs 50,000 x 1 night Rs 50,000</span>
          </span>
        </p>
        <p className={styles.weHavePlannedPlacesForYou}>
          <span className={styles.rs50000X1Night1}>
            <span>
              <span className={styles.taxesAndFees2}>Taxes and fees</span> Rs
              5,512
            </span>
          </span>
        </p>
        <p className={styles.weHavePlannedPlacesForYou}>
          <span className={styles.rs50000X1Night1}>
            <span>Insurance Rs 2.50</span>
          </span>
        </p>
        <p className={styles.weHavePlannedPlacesForYou}>
          <span className={styles.rs50000X1Night1}>
            <span className={styles.totalInc}>&nbsp;</span>
          </span>
        </p>
        <p className={styles.weHavePlannedPlacesForYou}>
          <span className={styles.totalIncTaxesIncluded1}>
            <span className={styles.totalInc}>{`Total INC `}</span>
            <span className={styles.taxesIncluded}>{`(Taxes included)  `}</span>
            <span
              className={styles.totalInc}
            >{`                           `}</span>
            <span className={styles.rs5551450}>Rs 55,514.50</span>
          </span>
        </p>
        <p className={styles.weHavePlannedPlacesForYou}>
          <span className={styles.totalInc}>
            <span className={styles.blankLine13}>&nbsp;</span>
          </span>
        </p>
        <p className={styles.weHavePlannedPlacesForYou}>
          <span className={styles.totalInc}>
            <span className={styles.blankLine16}>&nbsp;</span>
          </span>
        </p>
      </div>
      <b className={styles.itinerary}>ITINERARY</b>
      <div className={styles.beachViewWrapper}>
        <b className={styles.beachView}>{`Beach View `}</b>
      </div>
      <div className={styles.viewMoreWrapper}>
        <div className={styles.viewMore}>VIEW MORE</div>
      </div>
      <div className={styles.offeringUnparalleledBeachfroWrapper}>
        <div className={styles.offeringUnparalleledBeachfroContainer}>
          <span className={styles.offeringUnparalleledBeachfroContainer1}>
            <p className={styles.weHavePlannedPlacesForYou}>
              Offering unparalleled beachfront living (530-565 sq. ft.)
            </p>
            <p className={styles.weHavePlannedPlacesForYou}>
              <b>&nbsp;</b>
            </p>
            <p className={styles.weHavePlannedPlacesForYou}>
              <b>{`WHAT’S INCLUDED `}</b>
            </p>
            <p className={styles.weHavePlannedPlacesForYou}>
              <b>{` `}</b>
              <span> Luxurious accommodations</span>
            </p>
            <p
              className={styles.weHavePlannedPlacesForYou}
            >{`      Complimentary wireless internet access `}</p>
            <p className={styles.weHavePlannedPlacesForYou}>
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
      <img className={styles.bookingDetailsChild} alt="" src="/vector-27.svg" />
      <img className={styles.bookingDetailsItem} alt="" src="/vector-27.svg" />
      <img className={styles.bookingDetailsInner} alt="" src="/vector-27.svg" />
      <div className={styles.button} onClick={onButtonContainerClick}>
        <img className={styles.iconLeft} alt="" src="/icon-left6.svg" />
        <div className={styles.label}> TAP TO KNOW MORE</div>
        <img className={styles.iconLeft} alt="" src="/icon-right6.svg" />
      </div>
      <div className={styles.bed1ExtraParent}>
        <div className={styles.bed1Container}>
          <p className={styles.weHavePlannedPlacesForYou}>1 BED / 1 EXTRA</p>
        </div>
        <div className={styles.upTo3GuestsParent}>
          <div className={styles.upTo3}>UP TO 3 GUESTS</div>
          <div className={styles.bedAvailable}>
            <p className={styles.weHavePlannedPlacesForYou}>BED AVAILABLE</p>
          </div>
          <img
            className={styles.bedOccupancyIcon}
            alt=""
            src="/bed-occupancy2.svg"
          />
          <div className={styles.profile}>
            <img className={styles.guestsIcon} alt="" src="/guests3.svg" />
            <div className={styles.headline}>Profile</div>
          </div>
        </div>
      </div>
      <div className={styles.night}>50,000/night</div>
      <img className={styles.vectorIcon} alt="" src="/vector-27.svg" />
      <div className={styles.rectangleDiv} />
      <b className={styles.reviewBooking}>REVIEW BOOKING</b>
      <div className={styles.component114}>
        <div className={styles.aug}>17 Aug</div>
        <div className={styles.checkIn}>
          <span>Check-in</span>
          <span className={styles.span4}>{` `}</span>
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
      <div className={styles.buttonWrapper}>
        <div className={styles.button1} onClick={onButtonContainer1Click}>
          <img className={styles.iconLeft} alt="" src="/icon-left7.svg" />
          <div className={styles.label1}>PROCEED TO PAYMENT</div>
          <img className={styles.iconLeft} alt="" src="/icon-right7.svg" />
        </div>
      </div>
    </div>
  );
};

export default BookingDetails;
