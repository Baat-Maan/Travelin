import type { NextPage } from "next";
import { useCallback } from "react";
import { FormControlLabel, Checkbox } from "@mui/material";
import { useRouter } from "next/router";
import styles from "./itinerary-family-trip.module.css";
const ItineraryFamilyTrip: NextPage = () => {
  const router = useRouter();

  const onButtonContainerClick = useCallback(() => {
    router.push("/booking-details");
  }, [router]);

  return (
    <div className={styles.itineraryFamilyTrip}>
      <img className={styles.image4Icon} alt="" src="/image-41@2x.png" />
      <b className={styles.itinerary}>ITINERARY</b>
      <div className={styles.july17Wrapper}>
        <b className={styles.july17}>July 17</b>
      </div>
      <div className={styles.itineraryFamilyTripChild} />
      <div className={styles.filmCityJuhuContainer}>
        <p className={styles.filmCity}>Film City</p>
        <p className={styles.filmCity}>Juhu Beach</p>
        <p className={styles.filmCity}>Bandstand Promenade</p>
      </div>
      <div className={styles.siddhivinayakTempleCrawforContainer}>
        <p className={styles.filmCity}>Siddhivinayak temple</p>
        <p className={styles.filmCity}>Crawfor Market</p>
        <p className={styles.filmCity}>National Centre of Performing Arts</p>
      </div>
      <div className={styles.ferryToElephantaContainer}>
        <p className={styles.filmCity}>Ferry to Elephanta Island</p>
        <p className={styles.filmCity}>Mainland</p>
        <p className={styles.filmCity}>Regional Cuisine restaurant</p>
      </div>
      <div className={styles.itineraryFamilyTripItem} />
      <div className={styles.itineraryFamilyTripInner} />
      <div className={styles.ellipseDiv} />
      <div className={styles.itineraryFamilyTripChild1} />
      <div className={styles.itineraryFamilyTripChild2} />
      <div className={styles.lineDiv} />
      <div className={styles.itineraryFamilyTripChild3} />
      <div className={styles.day1}>Day 1</div>
      <div className={styles.morningAfternoonEveningContainer}>
        <p className={styles.filmCity}>{`Morning         `}</p>
        <p className={styles.filmCity}>Afternoon</p>
        <p className={styles.filmCity}>Evening</p>
      </div>
      <div className={styles.checkInGatewayOfContainer}>
        <p className={styles.filmCity}>Check-in</p>
        <p className={styles.filmCity}>Gateway of India, Marine Drive</p>
        <p className={styles.filmCity}>Colaba Causeway</p>
      </div>
      <div className={styles.chhatrapatiShivajiTerminusContainer}>
        <p className={styles.filmCity}>Chhatrapati Shivaji Terminus</p>
        <p className={styles.filmCity}>Vastu Sangrahalaya</p>
        <p className={styles.filmCity}>Colonialbuilding around Fort</p>
      </div>
      <div className={styles.morningAfternoonEveningContainer1}>
        <p className={styles.filmCity}>Morning</p>
        <p className={styles.filmCity}>Afternoon</p>
        <p className={styles.filmCity}>Evening</p>
      </div>
      <div className={styles.morningAfternoonEveningContainer2}>
        <p className={styles.filmCity}>Morning</p>
        <p className={styles.filmCity}>Afternoon</p>
        <p className={styles.filmCity}>Evening</p>
      </div>
      <div className={styles.morningAfternoonEveningContainer3}>
        <p className={styles.filmCity}>Morning</p>
        <p className={styles.filmCity}>Afternoon</p>
        <p className={styles.filmCity}>Evening</p>
      </div>
      <div className={styles.morningAfternoonEveningContainer4}>
        <p className={styles.filmCity}>Morning</p>
        <p className={styles.filmCity}>Afternoon</p>
        <p className={styles.filmCity}>Evening</p>
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
      <div className={styles.itineraryFamilyTripChild4} />
      <div className={styles.itineraryFamilyTripChild5} />
      <div className={styles.itineraryFamilyTripChild6} />
      <div className={styles.itineraryFamilyTripChild7} />
      <div className={styles.itineraryFamilyTripChild8} />
      <div className={styles.itineraryFamilyTripChild9} />
      <img className={styles.image2Icon} alt="" src="/image-2@2x.png" />
      <div className={styles.groupHealthInsuranceContainer}>
        <p className={styles.filmCity}>
          Group Health Insurance schemes are only as good as the claim
          experience
        </p>
        <p className={styles.filmCity}>&nbsp;</p>
        <p className={styles.filmCity}>
          Shoutout to HDFC ERGO for deliverying that experince
        </p>
      </div>
      <img className={styles.commaIcon} alt="" src="/comma@2x.png" />
      <img className={styles.commaIcon1} alt="" src="/comma@2x.png" />
      <img className={styles.commaIcon2} alt="" src="/comma1@2x.png" />
      <img className={styles.commaIcon3} alt="" src="/comma2@2x.png" />
      <img
        className={styles.itineraryFamilyTripChild10}
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
        className={styles.itineraryFamilyTripChild11}
        alt=""
        src="/vector-12.svg"
      />
      <div className={styles.risksAssociated}>Risks Associated</div>
      <div className={styles.communicableDiseasesContainer}>
        <p className={styles.filmCity}>{`> Communicable diseases `}</p>
        <p className={styles.filmCity}>{`> Theft`}</p>
        <p className={styles.filmCity}>{`> Traffic congestion`}</p>
        <p className={styles.filmCity}>{`> Scams`}</p>
      </div>
      <img className={styles.image33Icon} alt="" src="/image-33@2x.png" />
      <div className={styles.buttonWrapper}>
        <div className={styles.button} onClick={onButtonContainerClick}>
          <img className={styles.iconLeft} alt="" src="/icon-left5.svg" />
          <div className={styles.label}>{`PROCEED `}</div>
          <img className={styles.iconLeft} alt="" src="/icon-right5.svg" />
        </div>
      </div>
    </div>
  );
};

export default ItineraryFamilyTrip;
