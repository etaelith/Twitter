import styles from "@main/home/Home.module.css";
import {useContext} from "react";
import useInfiniteScroll from "@utils/useInfiniteScroll";

import Tweet from "./Tweet/Index";
import NewTweets from "./NewTweets";

import {GenericContext} from "@/context/GenericContext";
import Loading from "@/components/Common/RightBar/Loading";

const Index = () => {
  const {stateGeneric, showResults} = useContext(GenericContext);
  const [displayedTweetsCount, handleObserverDown, handleObserverUp] = useInfiniteScroll(15);

  const elements = stateGeneric.tweets.slice(0, displayedTweetsCount).map((tweet, index) => {
    if (index === 0) {
      return <Tweet key={index} refCallback={handleObserverUp} tweet={tweet} />;
    } else if (index === displayedTweetsCount - 1) {
      return <Tweet key={index} refCallback={handleObserverDown} tweet={tweet} />;
    } else {
      return <Tweet key={index} tweet={tweet} />;
    }
  });

  return (
    <div className={styles.div}>
      {stateGeneric.newTweets.length > 0 && (
        <NewTweets length={stateGeneric.newTweets.length} showResults={showResults} />
      )}
      {!stateGeneric.loadingTweets ? <Loading /> : elements}
    </div>
  );
};

export default Index;
