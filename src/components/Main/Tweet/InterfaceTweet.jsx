import styles from "@main/tweet/InterfaceTweet.module.css";
import world from "@assets/world.svg";
import {useState} from "react";

import TweetComposer from "./TweetComposer";
import TweetInput from "./TweetInput";
import TweetPrivacy from "./TweetPrivacy";
import TweetSubmitButton from "./TweetSubmitButton";
import PrivacyLanguage from "./PrivacyLanguage";

const InterfaceTweet = () => {
  const [tweet, setTweet] = useState("");

  const handleTweetChange = (event) => {
    setTweet(event.target.value);
  };

  const handleTweetSubmit = (event) => {
    event.preventDefault();
    setTweet("");
  };

  return (
    <div className={styles.div}>
      <div className={styles.textModule}>
        <PrivacyLanguage />
        <TweetInput
          height={`${tweet.split("\n").length + 1}em`}
          value={tweet}
          onChange={handleTweetChange}
        />
      </div>
      <TweetPrivacy />
      <form onSubmit={handleTweetSubmit}>
        <TweetComposer count={tweet.length} limit={280} />
      </form>
    </div>
  );
};

export default InterfaceTweet;
