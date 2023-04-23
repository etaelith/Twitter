import green from "@buttons/infoGreen.svg";
import blue from "@buttons/infoBlue.svg";
import {useContext} from "react";
import {MyContext} from "@context/MyContext";
import styles from "@main/tweet/header/PrivacyLanguage.module.css";
const InfoButton = () => {
  const {handleShow, state} = useContext(MyContext);

  return (
    <div onClick={handleShow}>
      {!state.show ? (
        <img className={styles.info} src={green} />
      ) : (
        <img className={styles.info} src={blue} />
      )}
    </div>
  );
};

export default InfoButton;
