import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./index.module.css";
const AppStarts: NextPage = () => {
  const router = useRouter();

  const onAppStartsContainerClick = useCallback(() => {
    router.push("/wecome");
  }, [router]);

  return (
    <div className={styles.appStarts} onClick={onAppStartsContainerClick}>
      <div className={styles.rectangle} />
      <div className={styles.statusBar}>
        <img className={styles.connectionsIcon} alt="" src="/connections.svg" />
        <div className={styles.time}>
          <div className={styles.time1}>9:27</div>
        </div>
      </div>
      <img className={styles.rectangleIcon} alt="" src="/rectangle@2x.png" />
      <div className={styles.shape} />
    </div>
  );
};

export default AppStarts;
