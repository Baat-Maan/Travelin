import type { NextPage } from "next";
import { useCallback } from "react";
import { FormControlLabel, Checkbox } from "@mui/material";
import { useRouter } from "next/router";
import styles from "./sign-up.module.css";
const SignUp: NextPage = () => {
  const router = useRouter();

  const onEllipseClick = useCallback(() => {
    router.push("/home");
  }, [router]);

  const onEllipse1Click = useCallback(() => {
    router.push("/home");
  }, [router]);

  const onYouAlreadyHaveClick = useCallback(() => {
    router.push("/login");
  }, [router]);

  const onFrameContainer2Click = useCallback(() => {
    router.push("/home");
  }, [router]);

  return (
    <div className={styles.signUp}>
      <FormControlLabel
        className={styles.mditickCircle}
        label=""
        labelPlacement="end"
        control={<Checkbox color="warning" defaultChecked />}
      />
      <div className={styles.enterViaSocialNetworksParent}>
        <b className={styles.enterViaSocial}>Enter via Social Networks</b>
        <div className={styles.frameChild} onClick={onEllipseClick} />
        <img className={styles.vectorIcon} alt="" src="/vector17.svg" />
        <div className={styles.frameItem} onClick={onEllipse1Click} />
        <div className={styles.mditwitter} />
        <img
          className={styles.deviconfacebook}
          alt=""
          src="/deviconfacebook1.svg"
        />
        <b className={styles.orLoginWithContainer}>
          <p className={styles.orLoginWith}>or login with</p>
          <p className={styles.orLoginWith}>email</p>
        </b>
      </div>
      <b
        className={styles.youAlreadyHaveContainer}
        onClick={onYouAlreadyHaveClick}
      >
        <span>{`You already have an account?  `}</span>
        <span className={styles.login}>Login</span>
      </b>
      <div className={styles.signUpWrapper}>
        <b className={styles.signUp1}>Sign up</b>
      </div>
      <div className={styles.signUpContainer} onClick={onFrameContainer2Click}>
        <b className={styles.signUp1}>Sign up</b>
      </div>
      <input
        className={styles.signUpChild}
        type="text"
        placeholder="duashruti01@gmail.com"
      />
      <input className={styles.signUpItem} type="password" />
      <div className={styles.mditwitter1} />
      <b className={styles.signUp3}>Sign Up</b>
      <b className={styles.pleaseLoginOrContainer}>
        <p className={styles.orLoginWith}>
          Please login or sign up to continue using
        </p>
        <p className={styles.orLoginWith}>our app</p>
      </b>
      <b className={styles.iAgreeWith}>I agree with privacy policy</b>
    </div>
  );
};

export default SignUp;
