import Element from "./Element";

import styles from "@/styles/Trends.module.css";
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
    <div className={styles.div}>
      <div className={styles.divSpan}>
        <span className={styles.span}>What&apos;s happening</span>
      </div>
      <ul className={styles.ul}>
        {trends.map((e, index) => (
          <Element key={index} props={e} />
        ))}
      </ul>
      <div className={styles.divSpan}>
        <span className={styles.spanFooter}>Show more</span>
      </div>
    </div>
  );
};

export default Index;
