import styles from "@socialbar/trends/Trends.module.css";
import Middle from "@components/Common/RightBar/Middle";

import Element from "./Element";

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
  return (
    <Middle>
      <div className={styles.divSpan}>
        <span className={styles.span}>What&apos;s happening</span>
      </div>
      <ul className={styles.ul}>
        {trends.map((e, index) => (
          <Element key={index} props={e} />
        ))}
      </ul>
      <div className={styles.showMore}>
        <span className={styles.spanFooter}>Show more</span>
      </div>
    </Middle>
  );
};

export default Index;
