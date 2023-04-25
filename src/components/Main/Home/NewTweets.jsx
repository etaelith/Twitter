import styles from "@main/home/NewTweets.module.css";

const NewTweets = ({length, showResults}) => {
  return (
    <div className={styles.div} onClick={showResults}>
      Show {length} Tweets
    </div>
  );
};

export default NewTweets;
