import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./fastag.module.css";
const Fastag: NextPage = () => {
  const router = useRouter();

  const onButtonContainerClick = useCallback(() => {
    router.push("/");
  }, [router]);

  return (
    <div className={styles.fastag}>
      <img className={styles.fastTag1} alt="" src="/fast-tag-11@2x.png" />
      <i className={styles.poweredByPark}>Powered by Park+</i>
      <div className={styles.button} onClick={onButtonContainerClick}>
        <img className={styles.iconLeft} alt="" src="/icon-left13.svg" />
        <div className={styles.label}>NEXT</div>
        <img className={styles.iconLeft} alt="" src="/icon-right13.svg" />
      </div>
    </div>
  );
};

export default Fastag;
