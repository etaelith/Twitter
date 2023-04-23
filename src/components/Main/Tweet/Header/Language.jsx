import styles from "@main/tweet/header/PrivacyLanguage.module.css";
import iconSwitch from "@buttons/switch.svg";
import {useContext} from "react";

import InfoButton from "./InfoButton";

import {MyContext} from "@/context/MyContext";
const Language = () => {
  const {handleIconClick, state} = useContext(MyContext);

  return (
    <div className={styles.containerLanguage}>
      <div className={styles.buttonLanguage}>
        <span className={styles.spanLanguage}>
          {!state.language ? "Ingles" : state.secondLanguage}
        </span>
      </div>
      <InfoButton />
      <img
        alt="Switch Icon"
        className={`${styles.imgLanguage} ${state.rotate ? styles.rotate : ""}`}
        src={iconSwitch}
        onClick={handleIconClick}
      />
    </div>
  );
};

export default Language;
