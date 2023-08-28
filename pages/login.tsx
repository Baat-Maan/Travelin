import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./login.module.css";
const Login: NextPage = () => {
  const router = useRouter();

  const onEllipseClick = useCallback(() => {
    router.push("/home");
  }, [router]);

  const onEllipse1Click = useCallback(() => {
    router.push("/home");
  }, [router]);

  const onFrameContainer1Click = useCallback(() => {
    router.push("/home");
  }, [router]);

  return (
    <div className={styles.login}>
      <div className={styles.enterViaSocialNetworksParent}>
        <b className={styles.enterViaSocial}>Enter via Social Networks</b>
        <div className={styles.frameChild} onClick={onEllipseClick} />
        <img className={styles.vectorIcon} alt="" src="/vector17.svg" />
        <div className={styles.frameItem} onClick={onEllipse1Click} />
        <div className={styles.mditwitter} />
        <img
          className={styles.deviconfacebook}
          alt=""
          src="/deviconfacebook.svg"
        />
        <b className={styles.orLoginWithContainer}>
          <p className={styles.orLoginWith}>or login with</p>
          <p className={styles.orLoginWith}>email</p>
        </b>
      </div>
      <b className={styles.dontHaveAnContainer}>
        <span>{`Don’t have an account?  `}</span>
        <span className={styles.signUp}>Sign up</span>
      </b>
      <input
        className={styles.loginChild}
        type="text"
        placeholder="duashruti01@gmail"
      />
      <input className={styles.loginItem} type="password" />
      <div className={styles.mditwitter1} />
      <b className={styles.loginNow}>Login Now</b>
      <b className={styles.pleaseLoginOrContainer}>
        <p className={styles.orLoginWith}>
          Please login or sign up to continue using
        </p>
        <p className={styles.orLoginWith}>our app</p>
      </b>
      <b className={styles.forgotPassword}>Forgot Password?</b>
      <b className={styles.login1}>Login</b>
      <div className={styles.loginWrapper} onClick={onFrameContainer1Click}>
        <b className={styles.login2}>
          <p className={styles.orLoginWith}>Login</p>
        </b>
      </div>
    </div>
  );
};

export default Login;
