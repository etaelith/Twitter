import SearchBar from "../components/SocialBar/SearchBar";

import FollowList from "@/components/SocialBar/Follow/FollowList";
import Trends from "@/components/SocialBar/Trends/Trends";
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
