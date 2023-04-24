import styles from "@main/tweet/main/TweetInput.module.css";
import {useContext} from "react";

import {MyContext} from "@/context/MyContext";

const TweetInput = ({height, handleTweetChange, tweet}) => {
  return (
    <textarea
      className={styles.input}
      placeholder="What's happening?"
      style={{height}}
      value={tweet}
      onChange={handleTweetChange}
    />
  );
};

export default TweetInput;
