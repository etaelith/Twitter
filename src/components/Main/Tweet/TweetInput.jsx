import styles from "@main/tweet/InterfaceTweet.module.css";

const TweetInput = ({value, onChange, height}) => {
  return (
    <textarea
      className={styles.input}
      placeholder="What's happening?"
      style={{height}}
      value={value}
      onChange={onChange}
    />
  );
};

export default TweetInput;
