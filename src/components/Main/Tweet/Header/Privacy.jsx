import styles from "@main/tweet/header/PrivacyLanguage.module.css";

const Privacy = () => {
  return (
    <div className={styles.button}>
      <span className={styles.span}>Everyone</span>
      <img
        className={styles.img}
        src="https://icongr.am/fontawesome/arrow-down.svg?size=14&color=1DA1F2"
      />
    </div>
  );
};

export default Privacy;
