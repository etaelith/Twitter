import styles from "@main/tweet/InterfaceTweet.module.css";
import {useContext} from "react";

import TweetComposer from "../Footer/TweetComposer";
import TweetPrivacy from "../Footer/TweetPrivacy";
import PrivacyLanguage from "../Header/PrivacyLanguage";

import TweetInput from "./TweetInput";

import {MyContext} from "@/context/MyContext";

const InterfaceTweet = () => {
  const {tweet, handleTweetSubmit} = useContext(MyContext);

  return (
    <div className={styles.div}>
      <div className={styles.textModule}>
        <PrivacyLanguage />
        <TweetInput height={`${tweet.split("\n").length + 1}em`} />
      </div>
      <TweetPrivacy />
      <form className={styles.form} onSubmit={handleTweetSubmit}>
        <TweetComposer count={tweet.length} limit={280} />
      </form>
    </div>
  );
};

export default InterfaceTweet;
