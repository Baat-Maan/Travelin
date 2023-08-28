import type { NextPage } from "next";
import styles from "./tag-balance.module.css";
const TagBalance: NextPage = () => {
  return (
    <div className={styles.tagBalance}>
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <div className={styles.frameParent}>
          <div className={styles.vehicleNoWrapper}>
            <div className={styles.vehicleNo}>Vehicle No.</div>
          </div>
          <div className={styles.frameWrapper}>
            <div className={styles.dl3cc10xxWrapper}>
              <div className={styles.dl3cc10xx}>DL3CC10XX</div>
            </div>
          </div>
        </div>
        <img className={styles.image32Icon} alt="" src="/image-32@2x.png" />
      </div>
      <img className={styles.fastTag1} alt="" src="/fast-tag-1@2x.png" />
      <div className={styles.tagBalanceChild} />
      <div className={styles.frameGroup}>
        <div className={styles.fastagBalanceWrapper}>
          <div className={styles.vehicleNo}>Fastag Balance</div>
        </div>
        <div className={styles.wrapper}>
          <div className={styles.dl3cc10xx}>₹ 1735.00</div>
        </div>
      </div>
      <div className={styles.frameContainer}>
        <div className={styles.groupItem} />
        <div className={styles.tajExpresswayWrapper}>
          <div className={styles.dl3cc10xx}>Taj Expressway</div>
        </div>
      </div>
      <div className={styles.lastToll}>Last Toll</div>
      <div className={styles.back}>
        <img className={styles.vectorIcon} alt="" src="/vector12.svg" />
        <div className={styles.backChild} />
      </div>
      <div className={styles.tagBalanceItem} />
      <div className={styles.groupParent}>
        <div className={styles.groupDiv}>
          <div className={styles.fastagBalanceWrapper}>
            <div className={styles.dasanaToll}>Taj Expressway</div>
          </div>
          <div className={styles.ndMay2022Wrapper}>
            <div className={styles.dl3cc10xx}>22nd May 2022</div>
          </div>
          <div className={styles.container}>
            <div className={styles.dl3cc10xx}>₹125</div>
          </div>
        </div>
        <img className={styles.groupInner} alt="" src="/vector-3.svg" />
      </div>
      <div className={styles.groupContainer}>
        <div className={styles.groupDiv}>
          <div className={styles.fastagBalanceWrapper}>
            <div className={styles.dasanaToll}>Dasana Toll</div>
          </div>
          <div className={styles.thApr2022Wrapper}>
            <div className={styles.dl3cc10xx}>25th Apr 2022</div>
          </div>
          <div className={styles.frame}>
            <div className={styles.dl3cc10xx}>₹40</div>
          </div>
        </div>
        <img className={styles.groupInner} alt="" src="/vector-3.svg" />
      </div>
      <div className={styles.groupParent1}>
        <div className={styles.groupDiv}>
          <div className={styles.fastagBalanceWrapper}>
            <div className={styles.dasanaToll}>Jewar Toll</div>
          </div>
          <div className={styles.thApr2022Container}>
            <div className={styles.dl3cc10xx}>19th Apr 2022</div>
          </div>
          <div className={styles.frame}>
            <div className={styles.dl3cc10xx}>₹95</div>
          </div>
        </div>
        <img className={styles.groupInner} alt="" src="/vector-3.svg" />
      </div>
    </div>
  );
};

export default TagBalance;
