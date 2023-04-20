import {useState} from "react";

import styles from "@/styles/User.module.css";

const TwitterCard = ({
  userName = "EtaelithDev",
  name = "Etaelith Dev",
  isFollowing = false,
  image = `https://source.boringavatars.com/marble/120/Maria%20Mitchell?colors=264653,2a9d8f,e9c46a,f4a261,e76f51`,
}) => {
  const [following, setFollowing] = useState(isFollowing);

  const buttonClass = following ? styles.twFollowingTrue : styles.twFollowingFalse;
  const text = following ? "Following" : "Follow";

  const handleCLick = () => {
    setFollowing(!following);
  };

  return (
    <article className={styles.twArticle}>
      <header className={styles.twHeader}>
        <img alt="avatar user" className={styles.twImg} src={image} />
        <div className={styles.twDiv}>
          <strong className={styles.twStrong}>{name}</strong>
          <span className={styles.twSpan}>@{userName}</span>
        </div>
      </header>
      <aside className={styles.twAside}>
        <button className={buttonClass} onClick={handleCLick}>
          <span className={styles.twFollowText}>{text}</span>
          <span className={styles.twFollowStop}>Unfollow</span>
        </button>
      </aside>
    </article>
  );
};

export default TwitterCard;
