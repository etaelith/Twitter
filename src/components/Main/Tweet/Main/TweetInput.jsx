import styles from "@main/tweet/TweetInput.module.css";
import {useContext} from "react";

import {MyContext} from "../../../../context/MyContext";

const TweetInput = ({height}) => {
  const {tweet, handleTweetChange} = useContext(MyContext);

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
