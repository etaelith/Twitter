import styles from "@main/InterfaceTweet.module.css";
import world from "@assets/world.svg";
import {useState} from "react";
const InterfaceTweet = () => {
  const [tweet, setTweet] = useState("");
  const handleChange = (event) => {
    setTweet(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setTweet("");
  };

  return (
    <div className={styles.div}>
      <div className={styles.textModule}>
        <div className={styles.button}>
          <span className={styles.span}>Everyone</span>
          <img
            className={styles.img}
            src="https://icongr.am/fontawesome/arrow-down.svg?size=14&color=1DA1F2"
          />
        </div>
        <form onSubmit={handleSubmit}>
          <textarea
            className={styles.input}
            placeholder="What's happening?"
            style={{height: `${tweet.split("\n").length + 1}em`}}
            value={tweet}
            onChange={handleChange}
          />
        </form>
      </div>
      <div className={styles.canReply}>
        <img src={world} />
        <div className={styles.textReply}>Everyone can reply</div>
      </div>
      <div>icons</div>
    </div>
  );
};

export default InterfaceTweet;
