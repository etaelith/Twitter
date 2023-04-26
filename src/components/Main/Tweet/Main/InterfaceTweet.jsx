import styles from "@main/tweet/main/InterfaceTweet.module.css";
import {useContext} from "react";

import TweetComposer from "../Footer/TweetComposer";
import TweetPrivacy from "../Footer/TweetPrivacy";
import PrivacyLanguage from "../Header/Index";

import TweetInput from "./TweetInput";

import {MyContext} from "@/context/MyContext";
import {GenericContext} from "@/context/GenericContext";

const InterfaceTweet = () => {
  const {state, handleTweetChange, handleTweetChangeSecond, handleTweetSubmit} =
    useContext(MyContext);
  const {pushTweets} = useContext(GenericContext);
  const disable = state.tweet.length + state.tweetSecond.length;

  return (
    <div className={styles.div}>
      <div className={styles.textModule}>
        <PrivacyLanguage />
        {!state.rotate ? (
          <TweetInput
            handleTweetChange={handleTweetChange}
            height={`${state.tweet.split("\n").length + 1}em`}
            tweet={state.tweet}
          />
        ) : (
          <TweetInput
            handleTweetChange={handleTweetChangeSecond}
            height={`${state.tweetSecond.split("\n").length + 1}em`}
            tweet={state.tweetSecond}
          />
        )}
      </div>
      <TweetPrivacy />
      <TweetComposer checkTweet={pushTweets} count={disable} limit={280} />
    </div>
  );
};

export default InterfaceTweet;
