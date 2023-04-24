import styles from "@main/Main.module.css";

import Header from "./Header/Index";
import WriteTweet from "./Tweet/Index";
import HomePage from "./Home/Index";
const Home = () => {
  return (
    <div className={styles.div}>
      <Header />
      <WriteTweet />
      <HomePage />
    </div>
  );
};

export default Home;
