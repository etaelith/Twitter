import styles from "@main/home/Tweet.module.css";
import UseAnimation from "react-useanimations";
import heart from "react-useanimations/lib/heart";
import infinity from "react-useanimations/lib/infinity";
import visibility from "react-useanimations/lib/visibility";
import airplay from "react-useanimations/lib/airplay";
import menu from "react-useanimations/lib/menu";

import SocialBar from "./SocialBar";

import getElapsedTime from "@/utils/fromNow";

const socialBar = [
  {
    icon: airplay,
    text: "Reply",
    interactions: 33,
    color: "#0286d6",
  },
  {
    text: "Retweet",
    icon: infinity,
    interactions: 2.353,
    color: "#00ba7c",
  },
  {
    icon: heart,
    text: "Like",
    interactions: 2.353,
    color: "#f91880",
  },
  {
    icon: visibility,
    text: "View",
    interactions: 2.353,
    color: "#0286d6",
  },
];

const Tweet = ({tweet}) => {
  return (
    <div className={styles.div}>
      <article className={styles.article}>
        <img alt="avatar" className={styles.img} src={tweet.avatar} />
        <div className={styles.texts}>
          <div className={styles.tags}>
            <strong className={styles.name}>{tweet.name}</strong>
            <span className={styles.username}>@{tweet.username}</span>
            <span className={styles.createdAt}>· {getElapsedTime(tweet.createdAt)}</span>
          </div>
          <div>{tweet.text}</div>
          <div className={styles.socialBar}>
            {socialBar.map((item, index) => (
              <SocialBar key={index} interactions={tweet.arrayReactions[index]} item={item} />
            ))}
            <div className={styles.socialItem}>
              <UseAnimation
                animation={menu}
                className={styles.socialIcon}
                size={30}
                strokeColor="#0286d6"
                onClick={() => console.log("clicked")}
              />
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default Tweet;