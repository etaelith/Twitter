import styles from "@main/Main.module.css";

import Header from "./Header/Index";
import WriteTweet from "./Tweet/Index";

const Home = () => {
  return (
    <div className={styles.div}>
      <Header />
      <WriteTweet />
    </div>
  );
};

export default Home;
