import React from "react";
import UseAnimations from "react-useanimations";
import styles from "@main/home/Tweet.module.css";

const SocialBar = ({item}) => {
  return (
    <div className={styles.socialSpace}>
      <div className={styles.socialItem}>
        <UseAnimations
          animation={item.icon}
          fillColor={item.color}
          size={30}
          strokeColor={item.color}
        />
        <span className={styles.span}>{item.interactions}</span>
      </div>
    </div>
  );
};

export default SocialBar;
