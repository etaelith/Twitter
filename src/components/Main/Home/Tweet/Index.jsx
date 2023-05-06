import styles from "@main/home/tweet/Tweet.module.css";
import {forwardRef} from "react";

import Header from "./Header";
import Footer from "./Footer";

// eslint-disable-next-line react/display-name
const Tweet = ({tweet, refCallback}) => {
  return (
    <div ref={refCallback ? (node) => refCallback(node) : null} className={styles.div}>
      <article className={styles.article}>
        <img alt="avatar" className={styles.img} src={tweet.avatar} />
        <div className={styles.texts}>
          <Header tweet={tweet} />
          <div>{tweet.text}</div>
          <Footer tweet={tweet} />
        </div>
      </article>
    </div>
  );
};

export default Tweet;
