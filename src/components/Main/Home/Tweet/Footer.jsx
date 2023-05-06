import menu from "react-useanimations/lib/menu";
import UseAnimation from "react-useanimations";
import heart from "react-useanimations/lib/heart";
import infinity from "react-useanimations/lib/infinity";
import visibility from "react-useanimations/lib/visibility";
import airplay from "react-useanimations/lib/airplay";
import styles from "@main/home/tweet/Tweet.module.css";

import SocialBar from "./SocialBar";
const socialBar = [
  {
    icon: airplay,
    text: "Reply",
    interactions: 33,
    color: "#0286d6",
    activeColor: "#0286d6",
  },
  {
    text: "Retweet",
    icon: infinity,
    interactions: 2.353,
    color: "#0286d6",
    activeColor: "#00ba7c",
  },
  {
    icon: heart,
    text: "Like",
    interactions: 2.353,
    color: "#0286d6",
    activeColor: "#f91880",
  },
  {
    icon: visibility,
    text: "View",
    interactions: 2.353,
    color: "#0286d6",
    activeColor: "#0286d6",
  },
];
const Footer = ({tweet}) => {
  return (
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
          // eslint-disable-next-line no-console
          onClick={() => console.log("clicked")}
        />
      </div>
    </div>
  );
};

export default Footer;
