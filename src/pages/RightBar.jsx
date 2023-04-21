import styles from "@socialbar/RightBar.module.css";
import SearchBar from "@components/SocialBar/SearchBar";

import FollowList from "@/components/SocialBar/Follow/Index";
import Trends from "@/components/SocialBar/Trends/Index";
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
