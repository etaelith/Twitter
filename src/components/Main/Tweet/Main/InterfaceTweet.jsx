import styles from "@main/tweet/main/InterfaceTweet.module.css";
import {useContext} from "react";

import TweetComposer from "../Footer/TweetComposer";
import TweetPrivacy from "../Footer/TweetPrivacy";
import PrivacyLanguage from "../Header/Index";

import TweetInput from "./TweetInput";

import {MyContext} from "@/context/MyContext";

const InterfaceTweet = () => {
  const {state, handleTweetSubmit, handleTweetChange, handleTweetChangeSecond} =
    useContext(MyContext);

  return (
    <div className={styles.div}>
      <div className={styles.textModule}>
        <PrivacyLanguage />
        <form className={styles.form} onSubmit={handleTweetSubmit}>
          {!state.rotate ? (
            <TweetInput
              handleTweetChange={handleTweetChange}
              height={`${state.tweet.split("\n").length + 1}em`}
              tweet={state.tweet}
            />
          ) : (
            <TweetInput
              handleTweetChange={handleTweetChangeSecond}
              height={`${state.TweetSecond.split("\n").length + 1}em`}
              tweet={state.TweetSecond}
            />
          )}
        </form>
      </div>
      <TweetPrivacy />
      <TweetComposer count={state.tweet.length} limit={280} />
    </div>
  );
};

export default InterfaceTweet;
