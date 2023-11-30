import type { NextPage } from "next";
import NavbarNewUser from "../components/navbar-new-user";
import styles from "./index.module.css";

const Index1: NextPage = () => {
  return (
    <div className={styles.index1}>
      <NavbarNewUser navbarNewUserMargin="0" plantPalMargin="0" />
      <div className={styles.frame}>
        <div className={styles.frame1}>
          <div className={styles.frame2}>
            <div className={styles.frame3}>
              <h2 className={styles.welcomeToPlantpal}>Welcome to PlantPal!</h2>
              <p className={styles.discoverTheMagic}>
                Discover the Magic of Your Garden: PlantPal - Your Personal
                Botanical Companion. From plant identification to nurturing
                care, embark on a green journey with confidence. Snap, Grow,
                Thrive!"
              </p>
            </div>
          </div>
          <img
            className={styles.beautifulGreenHouseplantsAnIcon}
            alt=""
            src="/beautifulgreenhouseplantsand-1@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Index1;