import UseAnimations from "react-useanimations";
import styles from "@main/home/Tweet.module.css";

import formatTweetsCount from "@/utils/count-tweets";

const SocialBar = ({item, interactions}) => {
  const handleButton = () => {
    console.log("hola");
  };

  return (
    <div className={styles.socialSpace} onClick={handleButton}>
      <div className={styles.socialItem}>
        <UseAnimations
          alt={item.text}
          animation={item.icon}
          className={styles.socialIcon}
          fillColor={item.color}
          size={30}
          strokeColor={item.color}
          title={item.text}
        />
        <span className={styles.span} title={interactions}>
          {formatTweetsCount(interactions)}
        </span>
      </div>
    </div>
  );
};

export default SocialBar;
