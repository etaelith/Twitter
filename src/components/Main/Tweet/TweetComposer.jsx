import emoji from "@buttons/emoji.svg";
import gif from "@buttons/gif.svg";
import imagen from "@buttons/imagen.svg";
import poll from "@buttons/poll.svg";
import location from "@buttons/location.svg";
import schedule from "@buttons/schedule.svg";
import styles from "@main/tweet/TweetComposer.module.css";

import CharacterCounter from "./CharacterCounter";
const TweetComposer = ({count, limit}) => {
  const disabled = count === 0 || count > limit;

  return (
    <div className={styles.div}>
      <div className={styles.icons}>
        <img alt="emoji" src={emoji} />
        <img alt="gif" src={gif} />
        <img alt="imagen" src={imagen} />
        <img alt="poll" src={poll} />
        <img alt="location" src={location} />
        <img alt="schedule" src={schedule} />
      </div>
      <div className={styles.pushTweet}>
        <CharacterCounter count={count} limit={limit} />
        <button className={styles.button} disabled={disabled}>
          Tweet
        </button>
      </div>
    </div>
  );
};

export default TweetComposer;
