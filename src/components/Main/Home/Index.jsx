import styles from "@main/home/Home.module.css";
import {useContext} from "react";

import Tweet from "./Tweet/Index";
import NewTweets from "./NewTweets";

import {GenericContext} from "@/context/GenericContext";
import Loading from "@/components/Common/RightBar/Loading";

const Index = () => {
  const {stateGeneric, showResults} = useContext(GenericContext);
  const elements = stateGeneric.tweets.map((tweet, index) => <Tweet key={index} tweet={tweet} />);

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
