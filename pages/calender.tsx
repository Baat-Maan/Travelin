import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./calender.module.css";
const Calender: NextPage = () => {
  const router = useRouter();

  const onVectorContainerClick = useCallback(() => {
    router.push("/search-location-and-date");
  }, [router]);

  return (
    <div className={styles.calender}>
      <img className={styles.calenderChild} alt="" src="/rectangle-11.svg" />
      <img
        className={styles.rwcriFacadeByNight12WideIcon}
        alt=""
        src="/rwcrifacadebynight12-widelarge169-2@2x.png"
      />
      <img className={styles.groupIcon} alt="" src="/group1.svg" />
      <img className={styles.vectorIcon} alt="" src="/vector4.svg" />
      <img className={styles.navigationIcon} alt="" src="/navigation.svg" />
      <div className={styles.explore}>
        <img className={styles.exploreChild} alt="" src="/group-7.svg" />
        <div className={styles.headline}>Explore</div>
      </div>
      <div className={styles.bookings}>
        <img
          className={styles.bedOccupancyIcon}
          alt=""
          src="/bed-occupancy3.svg"
        />
        <div className={styles.headline1}>Bookings</div>
      </div>
      <div className={styles.wishlist}>
        <img className={styles.vectorIcon1} alt="" src="/vector5.svg" />
        <div className={styles.headline2}>Wishlist</div>
      </div>
      <div className={styles.profile}>
        <img className={styles.guestsIcon} alt="" src="/guests4.svg" />
        <div className={styles.headline3}>Profile</div>
      </div>
      <div className={styles.april2023}>APRIL 2023</div>
      <div className={styles.may2023}>MAY 2023</div>
      <img className={styles.arrowLeftIcon} alt="" src="/arrow-left1.svg" />
      <img className={styles.calenderItem} alt="" src="/group-16913.svg" />
      <div className={styles.daysOfWeek}>
        <div className={styles.m}>M</div>
        <div className={styles.t}>T</div>
        <div className={styles.w}>W</div>
        <div className={styles.t1}>T</div>
        <div className={styles.f}>F</div>
        <div className={styles.s}>S</div>
        <div className={styles.s1}>S</div>
      </div>
      <div className={styles.component27Parent}>
        <div className={styles.component27}>
          <div className={styles.div}>1</div>
        </div>
        <div className={styles.component28}>
          <div className={styles.div}>2</div>
        </div>
        <div className={styles.component29}>
          <div className={styles.div}>3</div>
        </div>
        <div className={styles.component30}>
          <div className={styles.div}>10</div>
        </div>
        <div className={styles.component31}>
          <div className={styles.div}>9</div>
        </div>
        <div className={styles.component32}>
          <div className={styles.div}>8</div>
        </div>
        <div className={styles.component33}>
          <div className={styles.div}>7</div>
        </div>
        <div className={styles.component34}>
          <div className={styles.div}>6</div>
        </div>
        <div className={styles.component35}>
          <div className={styles.div}>5</div>
        </div>
        <div className={styles.component36}>
          <div className={styles.div}>4</div>
        </div>
        <div className={styles.component52}>
          <div className={styles.div}>30</div>
        </div>
        <div className={styles.component53}>
          <div className={styles.div}>29</div>
        </div>
        <div className={styles.component54}>
          <div className={styles.div}>28</div>
        </div>
        <div className={styles.component55}>
          <div className={styles.div}>27</div>
        </div>
        <div className={styles.component56}>
          <div className={styles.div}>26</div>
        </div>
        <div className={styles.component57}>
          <div className={styles.div}>25</div>
        </div>
        <div className={styles.component44}>
          <div className={styles.div}>24</div>
        </div>
        <div className={styles.component45}>
          <div className={styles.div}>23</div>
        </div>
        <div className={styles.component46}>
          <div className={styles.div}>22</div>
        </div>
        <div className={styles.component47}>
          <div className={styles.div}>21</div>
        </div>
        <div className={styles.component48}>
          <div className={styles.div}>20</div>
        </div>
        <div className={styles.component49}>
          <div className={styles.div}>19</div>
        </div>
        <div className={styles.component50}>
          <div className={styles.div}>18</div>
        </div>
        <div className={styles.component37}>
          <div className={styles.div}>17</div>
        </div>
        <div className={styles.component38}>
          <div className={styles.div}>16</div>
        </div>
        <div className={styles.component39}>
          <div className={styles.div}>15</div>
        </div>
        <div className={styles.component40}>
          <div className={styles.div}>14</div>
        </div>
        <div className={styles.component41}>
          <div className={styles.div}>13</div>
        </div>
        <div className={styles.component42}>
          <div className={styles.div}>12</div>
        </div>
        <div className={styles.component43}>
          <div className={styles.div}>11</div>
        </div>
      </div>
      <div className={styles.component60Parent}>
        <div className={styles.component29}>
          <div className={styles.div}>1</div>
        </div>
        <div className={styles.pinkBox} />
        <div className={styles.pinkBox1} />
        <div className={styles.may}>
          <div className={styles.div}>8</div>
        </div>
        <div className={styles.may1}>
          <div className={styles.div}>7</div>
        </div>
        <div className={styles.blackBox} />
        <div className={styles.may2}>
          <div className={styles.div}>6</div>
        </div>
        <div className={styles.component33}>
          <div className={styles.div}>5</div>
        </div>
        <div className={styles.component34}>
          <div className={styles.div}>4</div>
        </div>
        <div className={styles.component35}>
          <div className={styles.div}>3</div>
        </div>
        <div className={styles.component36}>
          <div className={styles.div}>2</div>
        </div>
        <div className={styles.component68}>
          <div className={styles.div}>29</div>
        </div>
        <div className={styles.component52}>
          <div className={styles.div}>28</div>
        </div>
        <div className={styles.component89}>
          <div className={styles.div}>31</div>
        </div>
        <div className={styles.component90}>
          <div className={styles.div}>30</div>
        </div>
        <div className={styles.component53}>
          <div className={styles.div}>27</div>
        </div>
        <div className={styles.component54}>
          <div className={styles.div}>26</div>
        </div>
        <div className={styles.component55}>
          <div className={styles.div}>25</div>
        </div>
        <div className={styles.component56}>
          <div className={styles.div}>24</div>
        </div>
        <div className={styles.component57}>
          <div className={styles.div}>23</div>
        </div>
        <div className={styles.component44}>
          <div className={styles.div}>22</div>
        </div>
        <div className={styles.component45}>
          <div className={styles.div}>21</div>
        </div>
        <div className={styles.component46}>
          <div className={styles.div}>20</div>
        </div>
        <div className={styles.component47}>
          <div className={styles.div}>19</div>
        </div>
        <div className={styles.component48}>
          <div className={styles.div}>18</div>
        </div>
        <div className={styles.component49}>
          <div className={styles.div}>17</div>
        </div>
        <div className={styles.component50}>
          <div className={styles.div}>16</div>
        </div>
        <div className={styles.component37}>
          <div className={styles.div}>15</div>
        </div>
        <div className={styles.component38}>
          <div className={styles.div}>14</div>
        </div>
        <div className={styles.component39}>
          <div className={styles.div}>13</div>
        </div>
        <div className={styles.component40}>
          <div className={styles.div}>12</div>
        </div>
        <div className={styles.component41}>
          <div className={styles.div}>11</div>
        </div>
        <div className={styles.blackBox1} />
        <div className={styles.may3}>
          <div className={styles.div}>10</div>
        </div>
        <div className={styles.may4}>
          <div className={styles.div}>9</div>
        </div>
      </div>
      <div className={styles.june2023}>JUNE 2023</div>
      <div className={styles.profile}>
        <img className={styles.guestsIcon} alt="" src="/guests4.svg" />
        <div className={styles.headline3}>Profile</div>
      </div>
      <img className={styles.arrowLeftIcon} alt="" src="/arrow-left1.svg" />
      <img className={styles.calenderItem} alt="" src="/group-16913.svg" />
      <div className={styles.daysOfWeek}>
        <div className={styles.m}>M</div>
        <div className={styles.t}>T</div>
        <div className={styles.w}>W</div>
        <div className={styles.t1}>T</div>
        <div className={styles.f}>F</div>
        <div className={styles.s}>S</div>
        <div className={styles.s1}>S</div>
      </div>
      <div className={styles.profile}>
        <img className={styles.guestsIcon} alt="" src="/guests4.svg" />
        <div className={styles.headline3}>Profile</div>
      </div>
      <img className={styles.arrowLeftIcon} alt="" src="/arrow-left1.svg" />
      <img className={styles.calenderItem} alt="" src="/group-16913.svg" />
      <div className={styles.daysOfWeek}>
        <div className={styles.m}>M</div>
        <div className={styles.t}>T</div>
        <div className={styles.w}>W</div>
        <div className={styles.t1}>T</div>
        <div className={styles.f}>F</div>
        <div className={styles.s}>S</div>
        <div className={styles.s1}>S</div>
      </div>
      <div className={styles.profile}>
        <img className={styles.guestsIcon} alt="" src="/guests4.svg" />
        <div className={styles.headline3}>Profile</div>
      </div>
      <img className={styles.arrowLeftIcon} alt="" src="/arrow-left1.svg" />
      <img className={styles.calenderItem} alt="" src="/group-16913.svg" />
      <div className={styles.daysOfWeek}>
        <div className={styles.m}>M</div>
        <div className={styles.t}>T</div>
        <div className={styles.w}>W</div>
        <div className={styles.t1}>T</div>
        <div className={styles.f}>F</div>
        <div className={styles.s}>S</div>
        <div className={styles.s1}>S</div>
      </div>
      <div className={styles.profile}>
        <img className={styles.guestsIcon} alt="" src="/guests4.svg" />
        <div className={styles.headline3}>Profile</div>
      </div>
      <img className={styles.arrowLeftIcon} alt="" src="/arrow-left1.svg" />
      <img className={styles.calenderItem} alt="" src="/group-16913.svg" />
      <div className={styles.daysOfWeek}>
        <div className={styles.m}>M</div>
        <div className={styles.t}>T</div>
        <div className={styles.w}>W</div>
        <div className={styles.t1}>T</div>
        <div className={styles.f}>F</div>
        <div className={styles.s}>S</div>
        <div className={styles.s1}>S</div>
      </div>
      <div className={styles.profile}>
        <img className={styles.guestsIcon} alt="" src="/guests4.svg" />
        <div className={styles.headline3}>Profile</div>
      </div>
      <img className={styles.arrowLeftIcon} alt="" src="/arrow-left1.svg" />
      <img className={styles.calenderItem} alt="" src="/group-16913.svg" />
      <div className={styles.daysOfWeek}>
        <div className={styles.m}>M</div>
        <div className={styles.t}>T</div>
        <div className={styles.w}>W</div>
        <div className={styles.t1}>T</div>
        <div className={styles.f}>F</div>
        <div className={styles.s}>S</div>
        <div className={styles.s1}>S</div>
      </div>
      <div className={styles.profile}>
        <img className={styles.guestsIcon} alt="" src="/guests4.svg" />
        <div className={styles.headline3}>Profile</div>
      </div>
      <img className={styles.arrowLeftIcon} alt="" src="/arrow-left1.svg" />
      <img className={styles.calenderItem} alt="" src="/group-16913.svg" />
      <div className={styles.daysOfWeek}>
        <div className={styles.m}>M</div>
        <div className={styles.t}>T</div>
        <div className={styles.w}>W</div>
        <div className={styles.t1}>T</div>
        <div className={styles.f}>F</div>
        <div className={styles.s}>S</div>
        <div className={styles.s1}>S</div>
      </div>
      <div className={styles.profile}>
        <img className={styles.guestsIcon} alt="" src="/guests4.svg" />
        <div className={styles.headline3}>Profile</div>
      </div>
      <img className={styles.arrowLeftIcon} alt="" src="/arrow-left1.svg" />
      <img className={styles.calenderItem} alt="" src="/group-16913.svg" />
      <div className={styles.daysOfWeek}>
        <div className={styles.m}>M</div>
        <div className={styles.t}>T</div>
        <div className={styles.w}>W</div>
        <div className={styles.t1}>T</div>
        <div className={styles.f}>F</div>
        <div className={styles.s}>S</div>
        <div className={styles.s1}>S</div>
      </div>
      <div className={styles.profile}>
        <img className={styles.guestsIcon} alt="" src="/guests4.svg" />
        <div className={styles.headline3}>Profile</div>
      </div>
      <img className={styles.arrowLeftIcon} alt="" src="/arrow-left1.svg" />
      <img className={styles.calenderItem} alt="" src="/group-16913.svg" />
      <div className={styles.daysOfWeek}>
        <div className={styles.m}>M</div>
        <div className={styles.t}>T</div>
        <div className={styles.w}>W</div>
        <div className={styles.t1}>T</div>
        <div className={styles.f}>F</div>
        <div className={styles.s}>S</div>
        <div className={styles.s1}>S</div>
      </div>
      <div className={styles.profile}>
        <img className={styles.guestsIcon} alt="" src="/guests4.svg" />
        <div className={styles.headline3}>Profile</div>
      </div>
      <img className={styles.arrowLeftIcon} alt="" src="/arrow-left1.svg" />
      <div className={styles.daysOfWeek}>
        <div className={styles.m}>M</div>
        <div className={styles.t}>T</div>
        <div className={styles.w}>W</div>
        <div className={styles.t1}>T</div>
        <div className={styles.f}>F</div>
        <div className={styles.s}>S</div>
        <div className={styles.s1}>S</div>
      </div>
      <div className={styles.profile}>
        <img className={styles.guestsIcon} alt="" src="/guests4.svg" />
        <div className={styles.headline3}>Profile</div>
      </div>
      <img className={styles.arrowLeftIcon} alt="" src="/arrow-left1.svg" />
      <div className={styles.daysOfWeek}>
        <div className={styles.m}>M</div>
        <div className={styles.t}>T</div>
        <div className={styles.w}>W</div>
        <div className={styles.t1}>T</div>
        <div className={styles.f}>F</div>
        <div className={styles.s}>S</div>
        <div className={styles.s1}>S</div>
      </div>
      <div className={styles.profile}>
        <img className={styles.guestsIcon} alt="" src="/guests4.svg" />
        <div className={styles.headline3}>Profile</div>
      </div>
      <div className={styles.component60Group}>
        <div className={styles.component601}>
          <div className={styles.div}>1</div>
        </div>
        <div className={styles.component34}>
          <div className={styles.div}>8</div>
        </div>
        <div className={styles.component35}>
          <div className={styles.div}>7</div>
        </div>
        <div className={styles.component36}>
          <div className={styles.div}>6</div>
        </div>
        <div className={styles.component29}>
          <div className={styles.div}>5</div>
        </div>
        <div className={styles.component28}>
          <div className={styles.div}>4</div>
        </div>
        <div className={styles.component27}>
          <div className={styles.div}>3</div>
        </div>
        <div className={styles.component671}>
          <div className={styles.div}>2</div>
        </div>
        <div className={styles.component55}>
          <div className={styles.div}>29</div>
        </div>
        <div className={styles.component56}>
          <div className={styles.div}>28</div>
        </div>
        <div className={styles.component54}>
          <div className={styles.div}>30</div>
        </div>
        <div className={styles.component57}>
          <div className={styles.div}>27</div>
        </div>
        <div className={styles.component44}>
          <div className={styles.div}>26</div>
        </div>
        <div className={styles.component45}>
          <div className={styles.div}>25</div>
        </div>
        <div className={styles.component46}>
          <div className={styles.div}>24</div>
        </div>
        <div className={styles.component47}>
          <div className={styles.div}>23</div>
        </div>
        <div className={styles.component48}>
          <div className={styles.div}>22</div>
        </div>
        <div className={styles.component49}>
          <div className={styles.div}>21</div>
        </div>
        <div className={styles.component50}>
          <div className={styles.div}>20</div>
        </div>
        <div className={styles.component37}>
          <div className={styles.div}>19</div>
        </div>
        <div className={styles.component38}>
          <div className={styles.div}>18</div>
        </div>
        <div className={styles.component39}>
          <div className={styles.div}>17</div>
        </div>
        <div className={styles.component40}>
          <div className={styles.div}>16</div>
        </div>
        <div className={styles.component41}>
          <div className={styles.div}>15</div>
        </div>
        <div className={styles.component42}>
          <div className={styles.div}>14</div>
        </div>
        <div className={styles.component43}>
          <div className={styles.div}>13</div>
        </div>
        <div className={styles.component30}>
          <div className={styles.div}>12</div>
        </div>
        <div className={styles.component31}>
          <div className={styles.div}>11</div>
        </div>
        <div className={styles.component32}>
          <div className={styles.div}>10</div>
        </div>
        <div className={styles.component33}>
          <div className={styles.div}>9</div>
        </div>
      </div>
      <div className={styles.july2023}>JULY 2023</div>
      <div className={styles.component27Group}>
        <div className={styles.component27}>
          <div className={styles.div}>1</div>
        </div>
        <div className={styles.component28}>
          <div className={styles.div}>2</div>
        </div>
        <div className={styles.component29}>
          <div className={styles.div}>3</div>
        </div>
        <div className={styles.component30}>
          <div className={styles.div}>10</div>
        </div>
        <div className={styles.component31}>
          <div className={styles.div}>9</div>
        </div>
        <div className={styles.component32}>
          <div className={styles.div}>8</div>
        </div>
        <div className={styles.component33}>
          <div className={styles.div}>7</div>
        </div>
        <div className={styles.component34}>
          <div className={styles.div}>6</div>
        </div>
        <div className={styles.component35}>
          <div className={styles.div}>5</div>
        </div>
        <div className={styles.component36}>
          <div className={styles.div}>4</div>
        </div>
        <div className={styles.component52}>
          <div className={styles.div}>30</div>
        </div>
        <div className={styles.component53}>
          <div className={styles.div}>29</div>
        </div>
        <div className={styles.component54}>
          <div className={styles.div}>28</div>
        </div>
        <div className={styles.component55}>
          <div className={styles.div}>27</div>
        </div>
        <div className={styles.component56}>
          <div className={styles.div}>26</div>
        </div>
        <div className={styles.component57}>
          <div className={styles.div}>25</div>
        </div>
        <div className={styles.component44}>
          <div className={styles.div}>24</div>
        </div>
        <div className={styles.component45}>
          <div className={styles.div}>23</div>
        </div>
        <div className={styles.component46}>
          <div className={styles.div}>22</div>
        </div>
        <div className={styles.component47}>
          <div className={styles.div}>21</div>
        </div>
        <div className={styles.component48}>
          <div className={styles.div}>20</div>
        </div>
        <div className={styles.component49}>
          <div className={styles.div}>19</div>
        </div>
        <div className={styles.component50}>
          <div className={styles.div}>18</div>
        </div>
        <div className={styles.component37}>
          <div className={styles.div}>17</div>
        </div>
        <div className={styles.component38}>
          <div className={styles.div}>16</div>
        </div>
        <div className={styles.component39}>
          <div className={styles.div}>15</div>
        </div>
        <div className={styles.component40}>
          <div className={styles.div}>14</div>
        </div>
        <div className={styles.component41}>
          <div className={styles.div}>13</div>
        </div>
        <div className={styles.component42}>
          <div className={styles.div}>12</div>
        </div>
        <div className={styles.component43}>
          <div className={styles.div}>11</div>
        </div>
      </div>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.additions}>ADD DATES</div>
        <img className={styles.frameItem} alt="" src="/vector-27.svg" />
        <div className={styles.vector} onClick={onVectorContainerClick}>
          <img className={styles.vectorIcon2} alt="" src="/vector3.svg" />
        </div>
      </div>
      <img className={styles.calenderChild8} alt="" src="/vector-27.svg" />
      <img className={styles.calenderChild9} alt="" src="/vector-27.svg" />
      <img className={styles.calenderChild10} alt="" src="/vector-27.svg" />
      <div className={styles.daysOfWeek}>
        <div className={styles.m}>M</div>
        <div className={styles.t}>T</div>
        <div className={styles.w}>W</div>
        <div className={styles.t1}>T</div>
        <div className={styles.f}>F</div>
        <div className={styles.s}>S</div>
        <div className={styles.s1}>S</div>
      </div>
    </div>
  );
};

export default Calender;
