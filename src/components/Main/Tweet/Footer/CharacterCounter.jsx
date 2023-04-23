import {useMemo} from "react";
import styles from "@main/tweet/footer/CharacterCounter.module.css";

import CircleSVG from "./CircleSVG";
import TextDisplay from "./TextDisplay";

const CharacterCounter = ({limit, count}) => {
  const excess = count - limit;
  const percentageUsed = useMemo(() => (count / limit) * 100, [count, limit]);

  return (
    <div className={styles.container}>
      <CircleSVG excess={excess} percentageUsed={percentageUsed} />
      <TextDisplay excess={excess} />
    </div>
  );
};

export default CharacterCounter;
