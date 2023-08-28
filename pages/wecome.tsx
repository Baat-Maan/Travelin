import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./wecome.module.css";
const Wecome: NextPage = () => {
  const router = useRouter();

  const onFrameContainerClick = useCallback(() => {
    router.push("/sign-up");
  }, [router]);

  const onYouAlreadyHaveClick = useCallback(() => {
    router.push("/login");
  }, [router]);

  return (
    <div className={styles.wecome}>
      <img className={styles.wecomeChild} alt="" src="/vector-121.svg" />
      <div className={styles.enterViaSocialNetworksParent}>
        <b className={styles.enterViaSocial}>Enter via Social Networks</b>
        <div className={styles.frameChild} />
        <div className={styles.frameItem} />
        <div className={styles.mditwitter} />
        <img className={styles.vectorIcon} alt="" src="/vector17.svg" />
        <img
          className={styles.deviconfacebook}
          alt=""
          src="/deviconfacebook2.svg"
        />
        <b className={styles.orLoginWithContainer}>
          <p className={styles.orLoginWith}>or login with</p>
          <p className={styles.orLoginWith}>email</p>
        </b>
        <div className={styles.signUpWrapper} onClick={onFrameContainerClick}>
          <b className={styles.signUp}>Sign up</b>
        </div>
        <b
          className={styles.youAlreadyHaveContainer}
          onClick={onYouAlreadyHaveClick}
        >
          <span>{`You already have an account?  `}</span>
          <span className={styles.login}>Login</span>
        </b>
      </div>
      <div className={styles.mditwitter1} />
      <b className={styles.welcome}>Welcome</b>
      <b className={styles.pleaseLoginOrContainer}>
        <p className={styles.orLoginWith}>
          Please login or sign up to continue using
        </p>
        <p className={styles.orLoginWith}>our app</p>
      </b>
      <img className={styles.wecomeItem} alt="" src="/line-1.svg" />
      <img className={styles.wecomeInner} alt="" src="/frame-3.svg" />
      <img className={styles.groupIcon} alt="" src="/group-1.svg" />
      <img className={styles.image1Icon} alt="" src="/image-1@2x.png" />
      <img className={styles.image3Icon} alt="" src="/image-34@2x.png" />
      <img className={styles.image5Icon} alt="" src="/image-51@2x.png" />
      <img className={styles.image2Icon} alt="" src="/image-26@2x.png" />
      <img className={styles.image4Icon} alt="" src="/image-44@2x.png" />
      <img className={styles.wecomeChild1} alt="" src="/vector-13.svg" />
      <div className={styles.frameDiv} />
      <div className={styles.wecomeChild2} />
      <img className={styles.wecomeChild3} alt="" src="/vector-21.svg" />
      <img className={styles.image6Icon} alt="" src="/image-61@2x.png" />
      <div className={styles.vectorDiv} />
      <img className={styles.image7Icon} alt="" src="/image-71@2x.png" />
      <img className={styles.image8Icon} alt="" src="/image-81@2x.png" />
      <img className={styles.image10Icon} alt="" src="/image-101@2x.png" />
      <img className={styles.image11Icon} alt="" src="/image-11@2x.png" />
      <img className={styles.image12Icon} alt="" src="/image-12@2x.png" />
      <img className={styles.image13Icon} alt="" src="/image-131@2x.png" />
      <img className={styles.image9Icon} alt="" src="/image-91@2x.png" />
      <img className={styles.frameIcon} alt="" src="/frame-11.svg" />
      <div className={styles.ellipseDiv} />
      <div className={styles.lineDiv} />
      <div className={styles.wecomeChild4} />
      <div className={styles.wecomeChild5} />
      <div className={styles.rectangleDiv} />
      <img className={styles.ellipseIcon} alt="" src="/ellipse-17.svg" />
      <div className={styles.wecomeChild6} />
      <div className={styles.wecomeChild7} />
      <div className={styles.wecomeChild8} />
      <img className={styles.womanIcon} alt="" src="/woman@2x.png" />
    </div>
  );
};

export default Wecome;
