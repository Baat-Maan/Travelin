import type { NextPage } from "next";
import { useCallback } from "react";
import "antd/dist/antd.min.css";
import { TextField } from "@mui/material";
import { Slider as AntSlider } from "antd";
import { useRouter } from "next/router";
import styles from "./add-vehicle.module.css";
const AddVehicle: NextPage = () => {
  const router = useRouter();

  const onBookTheSlotClick = useCallback(() => {
    router.push("/parking-time-exhausted");
  }, [router]);

  const onAddVehicleTextClick = useCallback(() => {
    router.push("/book-space");
  }, [router]);

  return (
    <div className={styles.addVehicle}>
      <img className={styles.image4Icon} alt="" src="/image-42@2x.png" />
      <img
        className={styles.paginationlightIcon}
        alt=""
        src="/paginationlight.svg"
      />
      <div className={styles.toolbarsiphoneXtextOnly2}>
        <div className={styles.toolbarsIphone8textOnly}>
          <img className={styles.backgroundIcon} alt="" src="/background.svg" />
          <div className={styles.action1}>SKIP</div>
          <div className={styles.action2}>NEXT</div>
        </div>
      </div>
      <div className={styles.buttonprimarydefault}>
        <div className={styles.rectangle} />
      </div>
      <div className={styles.addVehicleChild} />
      <div className={styles.rectangleParent}>
        <div className={styles.rectangle1} />
        <div className={styles.rs200Parent}>
          <b className={styles.rs200}>Rs200</b>
          <div className={styles.hr}>/Hr</div>
        </div>
        <div className={styles.lekkiGardensCar}>Lekki Gardens Car Park A</div>
      </div>
      <b className={styles.addAVehicle}>Add a Vehicle</b>
      <b className={styles.youMayHave}>
        You may have to leave your car key with the parking operator at site
      </b>
      <div className={styles.vehicle1}>
        <TextField
          className={styles.frame}
          sx={{ width: 343 }}
          color="primary"
          variant="filled"
          type="text"
          placeholder="PB07ABxxxx"
          size="medium"
          margin="none"
        />
        <div className={styles.enterVehicleNumber}>Enter Vehicle Number</div>
        <div className={styles.frame1}>
          <div className={styles.rectangle} />
          <b className={styles.bookTheSlot} onClick={onBookTheSlotClick}>
            Book the slot
          </b>
        </div>
        <div className={styles.frame1}>
          <div className={styles.rectangle} />
          <b className={styles.bookTheSlot} onClick={onAddVehicleTextClick}>
            Add Vehicle
          </b>
        </div>
      </div>
      <div className={styles.back}>
        <img className={styles.vectorIcon} alt="" src="/vector13.svg" />
        <div className={styles.toolbarsIphone8textOnly} />
      </div>
      <div className={styles.landmarkEventCenterParent}>
        <div className={styles.landmarkEventCenter}>Landmark Event Center</div>
        <div className={styles.rectangle4} />
        <div className={styles.space4c}>Space 4c</div>
      </div>
      <div className={styles.rectangleGroup}>
        <div className={styles.rectangle1} />
        <div className={styles.hoursParent}>
          <div className={styles.hours}>6 hours -</div>
          <div className={styles.rs1200Wrapper}>
            <div className={styles.rs1200}>Rs1200</div>
          </div>
        </div>
      </div>
      <div className={styles.estimateDuration}>Estimate Duration</div>
      <div className={styles.checkInTime}>Check-in Time:</div>
      <AntSlider
        className={styles.addVehicleItem}
        style={{ width: 302.87200927734375 }}
      />
      <div className={styles.am}>11:00 am</div>
      <img
        className={styles.faRegulareditIcon}
        alt=""
        src="/faregularedit.svg"
      />
    </div>
  );
};

export default AddVehicle;
