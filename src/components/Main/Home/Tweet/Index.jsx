import styles from "@main/home/tweet/Tweet.module.css";

import Header from "./Header";
import Footer from "./Footer";

const Tweet = ({tweet}) => {
  return (
    <div className={styles.div}>
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
