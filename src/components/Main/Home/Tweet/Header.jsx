import styles from "@main/home/tweet/Tweet.module.css";

import {getElapsedTime, getTitle} from "@/utils/fromNow";

const Header = ({tweet}) => {
  return (
    <div className={styles.tags}>
      <strong className={styles.name}>{tweet.name}</strong>
      <span className={styles.username}>@{tweet.username} ·</span>
      <span className={styles.createdAt} title={`${getTitle(tweet.createdAt)}`}>
        {getElapsedTime(tweet.createdAt)}
      </span>
    </div>
  );
};

export default Header;
