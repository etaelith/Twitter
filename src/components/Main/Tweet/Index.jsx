import styles from "@main/tweet/Tweet.module.css";

import InterfaceTweet from "./Main/InterfaceTweet";

import avatar from "@/assets/avatar.svg";
const WriteTweet = () => {
  return (
    <div className={styles.div}>
      <div>
        <img className={styles.img} src={avatar} />
      </div>
      <InterfaceTweet />
    </div>
  );
};

export default WriteTweet;
