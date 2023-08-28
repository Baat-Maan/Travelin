import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./recharge-done.module.css";
const RechargeDone: NextPage = () => {
  const router = useRouter();

  const onRechargeDoneContainerClick = useCallback(() => {
    router.push("/tag-balance");
  }, [router]);

  return (
    <div className={styles.rechargeDone} onClick={onRechargeDoneContainerClick}>
      <img className={styles.fastTag1} alt="" src="/fast-tag-11@2x.png" />
      <i className={styles.poweredByPark}>Powered by Park+</i>
      <img className={styles.rechargeDoneChild} alt="" src="/rectangle-3.svg" />
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <img
          className={styles.emojioneCheckMarkButtonIcon}
          alt=""
          src="/emojionecheckmarkbutton1.svg"
        />
        <div className={styles.rechargeDone1}>Recharge Done</div>
      </div>
    </div>
  );
};

export default RechargeDone;
