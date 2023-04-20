import formatTweetsCount from "../../../utils/count-tweets";

import styles from "@/styles/TrendsElement.module.css";

const Element = ({props}) => {
  return (
    <li className={styles.li}>
      <h4 className={styles.category}>{props.category}</h4>
      <h2 className={styles.title}>{props.title}</h2>
      <h4 className={styles.numbers}>{formatTweetsCount(props.numbers)}</h4>
    </li>
  );
};

export default Element;
