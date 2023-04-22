import styles from "@main/tweet/InterfaceTweet.module.css";

const TweetSubmitButton = ({onClick}) => {
  return (
    <div className={styles.textModule}>
      <button className={styles.button} onClick={onClick}>
        <span className={styles.span}>Tweet</span>
      </button>
    </div>
  );
};

export default TweetSubmitButton;
