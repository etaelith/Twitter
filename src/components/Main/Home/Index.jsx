import styles from "@main/home/Home.module.css";
import {useContext} from "react";

import Tweet from "./Tweet/Index";
import NewTweets from "./NewTweets";

import {GenericContext} from "@/context/GenericContext";
import Loading from "@/components/Common/RightBar/Loading";

const Index = () => {
  const {state, showResults} = useContext(GenericContext);
  const elements = state.tweets.map((tweet, index) => <Tweet key={index} tweet={tweet} />);

  return (
    <div className={styles.div}>
      {state.newTweets.length > 0 && (
        <NewTweets length={state.newTweets.length} showResults={showResults} />
      )}
      {!state.loadingTweets ? <Loading /> : elements}
    </div>
  );
};

export default Index;
