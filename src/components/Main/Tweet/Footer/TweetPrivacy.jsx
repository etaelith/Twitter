import styles from "@main/tweet/InterfaceTweet.module.css";
import world from "@assets/world.svg";

const TweetPrivacy = () => {
  return (
    <div className={styles.borderBottom}>
      <div className={styles.canReply}>
        <img src={world} />
        <div className={styles.textReply}>Everyone can reply</div>
      </div>
    </div>
  );
};

export default TweetPrivacy;
