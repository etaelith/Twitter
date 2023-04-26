import UseAnimations from "react-useanimations";
import styles from "@main/home/tweet/Tweet.module.css";
import {useState} from "react";

import formatTweetsCount from "@/utils/count-tweets";

const SocialBar = ({item, interactions}) => {
  const [color, setColor] = useState(item.color);
  const handleButton = () => {
    if (color === item.activeColor) {
      setColor(item.color);
    } else {
      setColor(item.activeColor);
    }
  };

  return (
    <div className={styles.socialSpace}>
      <div className={styles.socialItem}>
        <UseAnimations
          alt={item.text}
          animation={item.icon}
          className={styles.socialIcon}
          fillColor={color}
          options={{loop: false}}
          size={30}
          strokeColor={color}
          title={item.text}
          onClick={handleButton}
        />
        <span className={styles.span} title={interactions}>
          {formatTweetsCount(interactions)}
        </span>
      </div>
    </div>
  );
};

export default SocialBar;
