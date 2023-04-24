import Middle from "@components/Common/RightBar/Middle";
import {useContext} from "react";
import cross from "@buttons/cross.svg";
import styles from "@main/tweet/main/TweetInfo.module.css";

import {MyContext} from "@/context/MyContext";
const TweetInfo = () => {
  const {state, handleShow} = useContext(MyContext);

  return (
    <Middle>
      <div className={styles.div}>
        <div className={styles.divImg}>
          <img className={styles.img} src={cross} onClick={handleShow} />
        </div>
        <div className={styles.text}>{state.rotate ? state.tweet : state.TweetSecond}</div>
      </div>
    </Middle>
  );
};

export default TweetInfo;
