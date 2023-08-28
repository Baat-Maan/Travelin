import type { NextPage } from "next";
import { useCallback } from "react";
import { FormControlLabel, Checkbox } from "@mui/material";
import { useRouter } from "next/router";
import styles from "./itinerary-work-trip.module.css";
const ItineraryWorkTrip: NextPage = () => {
  const router = useRouter();

  const onButtonContainerClick = useCallback(() => {
    router.push("/booking-details");
  }, [router]);

  return (
    <div className={styles.itineraryWorkTrip}>
      <img className={styles.image4Icon} alt="" src="/image-4@2x.png" />
      <b className={styles.itinerary}>ITINERARY</b>
      <div className={styles.july17Wrapper}>
        <b className={styles.july17}>July 17</b>
      </div>
      <div className={styles.itineraryWorkTripChild} />
      <div className={styles.regionalCuisineRestaurantContainer}>
        <p className={styles.blankLine}>&nbsp;</p>
        <p className={styles.blankLine}>Regional Cuisine restaurant</p>
      </div>
      <div className={styles.itineraryWorkTripItem} />
      <div className={styles.itineraryWorkTripInner} />
      <div className={styles.ellipseDiv} />
      <div className={styles.itineraryWorkTripChild1} />
      <div className={styles.itineraryWorkTripChild2} />
      <img className={styles.lineIcon} alt="" src="/line-8.svg" />
      <div className={styles.lineDiv} />
      <div className={styles.day1}>Day 1</div>
      <div className={styles.evening}>{`Evening              `}</div>
      <div className={styles.evening1}>{`Evening              `}</div>
      <div className={styles.morningAfternoonEveningContainer}>
        <p className={styles.blankLine}>Morning</p>
        <p className={styles.blankLine}>Afternoon</p>
        <p className={styles.blankLine}>Evening</p>
      </div>
      <div className={styles.morningAfternoonEveningContainer1}>
        <p className={styles.blankLine}>Morning</p>
        <p className={styles.blankLine}>Afternoon</p>
        <p className={styles.blankLine}>Evening</p>
      </div>
      <div className={styles.evening4}>
        <p className={styles.blankLine}>&nbsp;</p>
        <p className={styles.blankLine}>Evening</p>
      </div>
      <div className={styles.day2}>Day 2</div>
      <div className={styles.day3}>Day 3</div>
      <div className={styles.day4}>Day 4</div>
      <div className={styles.day5}>Day 5</div>
      <div className={styles.aug2023}>17 Aug,2023</div>
      <div className={styles.aug20231}>18 Aug,2023</div>
      <div className={styles.aug20232}>19 Aug,2023</div>
      <div className={styles.aug20233}>20 Aug,2023</div>
      <div className={styles.aug20234}>21 Aug,2023</div>
      <img className={styles.vectorIcon} alt="" src="/vector-27.svg" />
      <div className={styles.rectangleDiv} />
      <div className={styles.itineraryWorkTripChild3} />
      <div className={styles.itineraryWorkTripChild4} />
      <div className={styles.itineraryWorkTripChild5} />
      <div className={styles.itineraryWorkTripChild6} />
      <div className={styles.itineraryWorkTripChild7} />
      <div className={styles.itineraryWorkTripChild8} />
      <img className={styles.image2Icon} alt="" src="/image-2@2x.png" />
      <div className={styles.groupHealthInsuranceContainer}>
        <p className={styles.blankLine}>
          Group Health Insurance schemes are only as good as the claim
          experience
        </p>
        <p className={styles.blankLine}>&nbsp;</p>
        <p className={styles.blankLine}>
          Shoutout to HDFC ERGO for deliverying that experince
        </p>
      </div>
      <img className={styles.commaIcon} alt="" src="/comma@2x.png" />
      <img className={styles.commaIcon1} alt="" src="/comma@2x.png" />
      <img className={styles.commaIcon2} alt="" src="/comma1@2x.png" />
      <img className={styles.commaIcon3} alt="" src="/comma2@2x.png" />
      <img
        className={styles.itineraryWorkTripChild9}
        alt=""
        src="/vector-2.svg"
      />
      <div className={styles.getInsuredAt}>Get Insured at once</div>
      <FormControlLabel
        className={styles.tickBox}
        label=""
        control={<Checkbox color="warning" defaultChecked size="medium" />}
      />
      <div className={styles.standard}>Standard</div>
      <div className={styles.paid}>Paid</div>
      <div className={styles.rs99}> Rs 99/-</div>
      <div className={styles.rs299}>Rs 299 /-</div>
      <FormControlLabel
        className={styles.tickBox1}
        label=""
        control={<Checkbox color="warning" defaultChecked size="medium" />}
      />
      <div
        className={styles.coverYourAnd}
      >{`Cover Your and your family’s travel insurance `}</div>
      <div className={styles.coverHealthTravel}>
        Cover Health, Travel, Theft insurance all in one
      </div>
      <img
        className={styles.itineraryWorkTripChild10}
        alt=""
        src="/vector-12.svg"
      />
      <div className={styles.risksAssociated}>Risks Associated</div>
      <div className={styles.communicableDiseasesContainer}>
        <p className={styles.blankLine}>{`> Communicable diseases `}</p>
        <p className={styles.blankLine}>{`> Theft`}</p>
        <p className={styles.blankLine}>{`> Traffic congestion`}</p>
        <p className={styles.blankLine}>{`> Scams`}</p>
      </div>
      <img className={styles.image33Icon} alt="" src="/image-33@2x.png" />
      <div className={styles.siddhivinayakTempleCrawforContainer}>
        <p className={styles.blankLine}>Siddhivinayak temple</p>
        <p className={styles.blankLine}>Crawfor Market</p>
        <p className={styles.blankLine}>National Centre of Performing Arts</p>
      </div>
      <div className={styles.filmCityJuhuContainer}>
        <p className={styles.blankLine}>Film City</p>
        <p className={styles.blankLine}>Juhu Beach , Marine Drive</p>
        <p className={styles.blankLine}>Bandstand Promenade</p>
      </div>
      <div className={styles.bandraKurlaComplexContainer}>
        <p className={styles.blankLine}>Bandra Kurla Complex</p>
        <p className={styles.blankLine}>&nbsp;</p>
      </div>
      <div className={styles.nehruScienceCentre}>Nehru Science Centre</div>
      <div className={styles.buttonWrapper}>
        <div className={styles.button} onClick={onButtonContainerClick}>
          <img className={styles.iconLeft} alt="" src="/icon-left4.svg" />
          <div className={styles.label}>{`PROCEED `}</div>
          <img className={styles.iconLeft} alt="" src="/icon-right4.svg" />
        </div>
      </div>
    </div>
  );
};

export default ItineraryWorkTrip;
