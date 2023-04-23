import styles from "@socialbar/trends/Trends.module.css";
import Middle from "@components/Common/RightBar/Middle";
import {useContext} from "react";
import {MyContext} from "@context/MyContext";

import TweetInfo from "../../Main/Tweet/Main/TweetInfo";

import Element from "./Element";
import Header from "./Header";
import Footer from "./Footer";

const trends = [
  {
    category: "Technology · Trending",
    title: "#JavaScript",
    numbers: 128723,
  },
  {
    category: "Entertainment · Trending",
    title: "#Oscars2023",
    numbers: 156214,
  },
  {
    category: "Politics · Trending",
    title: "#Elections2024",
    numbers: 4215,
  },
  {
    category: "Sports · Trending",
    title: "#TokyoOlympics",
    numbers: 82223540,
  },
  {
    category: "Fashion · Trending",
    title: "#FashionWeek",
    numbers: 632,
  },
];

const Index = () => {
  const {state} = useContext(MyContext);
  const {show} = state;

  return (
    <Middle>
      {!show ? (
        <div className={styles.trendsBar}>
          <Header />
          <ul className={styles.ul}>
            {trends.map((e, index) => (
              <Element key={index} props={e} />
            ))}
          </ul>
          <Footer />
        </div>
      ) : (
        <TweetInfo />
      )}
    </Middle>
  );
};

export default Index;
