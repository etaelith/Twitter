import styles from "@main/home/Home.module.css";
import {useContext} from "react";

import Tweet from "./Tweet";

import {GenericContext} from "@/context/GenericContext";
import Loading from "@/components/Common/RightBar/Loading";

const Index = () => {
  const {tweets, loading} = useContext(GenericContext);
  const elements = tweets.map((tweet, index) => <Tweet key={index} tweet={tweet} />);

  return <div className={styles.div}>{!loading ? <Loading /> : elements}</div>;
};

export default Index;
