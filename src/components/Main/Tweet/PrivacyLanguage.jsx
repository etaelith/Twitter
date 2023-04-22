import styles from "@main/tweet/PrivacyLanguage.module.css";
import iconSwitch from "@buttons/switch.svg";
import info from "@buttons/info.svg";
import {useReducer} from "react";
import {initialState, reducer} from "@hooks/useLanguage";
const PrivacyLanguage = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const handleIconClick = () => {
    dispatch({type: "TOGGLE_ROTATE"});
    dispatch({type: "TOGGLE_LANGUAGE"});
  };

  return (
    <div className={styles.privacyLanguage}>
      <div className={styles.button}>
        <span className={styles.span}>Everyone</span>
        <img
          className={styles.img}
          src="https://icongr.am/fontawesome/arrow-down.svg?size=14&color=1DA1F2"
        />
      </div>
      <div className={styles.containerLanguage}>
        <div className={styles.buttonLanguage}>
          <span className={styles.spanLanguage}>
            {!state.language ? "Ingles" : state.secondLanguage}
          </span>
        </div>
        <img className={styles.info} src={info} />
        <img
          alt="Switch Icon"
          className={`${styles.imgLanguage} ${state.rotate ? styles.rotate : ""}`}
          src={iconSwitch}
          onClick={handleIconClick}
        />
      </div>
    </div>
  );
};

export default PrivacyLanguage;
