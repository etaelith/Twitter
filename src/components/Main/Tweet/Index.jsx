import React from "react";
import styles from "@main/Tweet.module.css";

import InterfaceTweet from "./InterfaceTweet";

import avatar from "@/assets/avatar.svg";
const WriteTweet = () => {
  return (
    <div className={styles.div}>
      <div>
        <img className={styles.img} src={avatar} />
      </div>
      <InterfaceTweet />
    </div>
  );
};

export default WriteTweet;
