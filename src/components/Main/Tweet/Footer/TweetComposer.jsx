import emoji from "@buttons/emoji.svg";
import gif from "@buttons/gif.svg";
import imagen from "@buttons/imagen.svg";
import poll from "@buttons/poll.svg";
import location from "@buttons/location.svg";
import schedule from "@buttons/schedule.svg";
import styles from "@main/tweet/footer/TweetComposer.module.css";

import CharacterCounter from "./CharacterCounter";
const icons = [
  {
    name: "emoji",
    url: emoji,
  },
  {
    name: "gif",
    url: gif,
  },
  {
    name: "imagen",
    url: imagen,
  },
  {
    name: "poll",
    url: poll,
  },
  {
    name: "location",
    url: location,
  },
  {
    name: "schedule",
    url: schedule,
  },
];
const TweetComposer = ({count, limit}) => {
  const disabled = count === 0 || count > limit;

  return (
    <div className={styles.div}>
      <div className={styles.icons}>
        {icons.map((e, index) => (
          <img key={index} alt={e.name} src={e.url} />
        ))}
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
