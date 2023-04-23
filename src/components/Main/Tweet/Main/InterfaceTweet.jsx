import styles from "@main/tweet/main/InterfaceTweet.module.css";
import {useContext} from "react";

import TweetComposer from "../Footer/TweetComposer";
import TweetPrivacy from "../Footer/TweetPrivacy";
import PrivacyLanguage from "../Header/Index";

import TweetInput from "./TweetInput";

import {MyContext} from "@/context/MyContext";

const InterfaceTweet = () => {
  const {state, handleTweetSubmit} = useContext(MyContext);

  return (
    <div className={styles.div}>
      <div className={styles.textModule}>
        <PrivacyLanguage />
        <TweetInput height={`${state.tweet.split("\n").length + 1}em`} />
      </div>
      <TweetPrivacy />
      <form className={styles.form} onSubmit={handleTweetSubmit}>
        <TweetComposer count={state.tweet.length} limit={280} />
      </form>
    </div>
  );
};

export default InterfaceTweet;
