import styles from "@main/tweet/header/PrivacyLanguage.module.css";

import Language from "./Language";
import Privacy from "./Privacy";

const PrivacyLanguage = () => {
  return (
    <div className={styles.privacyLanguage}>
      <Privacy />
      <Language />
    </div>
  );
};

export default PrivacyLanguage;
