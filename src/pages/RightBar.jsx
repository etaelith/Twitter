import SearchBar from "../components/Trends/SearchBar";

import FollowList from "@/components/Trends/FollowList";
import Trends from "@/components/Trends/Trends";
import styles from "@/styles/RightBar.module.css";
const RightBar = () => {
  return (
    <div className={styles.div}>
      <SearchBar />
      <Trends />
      <FollowList />
    </div>
  );
};

export default RightBar;
