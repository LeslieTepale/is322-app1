import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./navbar-new-user.module.css";

type NavbarNewUserType = {
  /** Style props */
  navbarNewUserMargin?: CSSProperties["margin"];
  plantPalMargin?: CSSProperties["margin"];
};

const NavbarNewUser: NextPage<NavbarNewUserType> = ({
  navbarNewUserMargin,
  plantPalMargin,
}) => {
  const navbarNewUserStyle: CSSProperties = useMemo(() => {
    return {
      margin: navbarNewUserMargin,
    };
  }, [navbarNewUserMargin]);

  const plantPalStyle: CSSProperties = useMemo(() => {
    return {
      margin: plantPalMargin,
    };
  }, [plantPalMargin]);

  return (
    <div className={styles.navbarNewUser} style={navbarNewUserStyle}>
      <div className={styles.plantpal} style={plantPalStyle}>
        PlantPal
      </div>
      <div className={styles.frame}>
        <div className={styles.signUp}>Sign Up</div>
      </div>
    </div>
  );
};

export default NavbarNewUser;
