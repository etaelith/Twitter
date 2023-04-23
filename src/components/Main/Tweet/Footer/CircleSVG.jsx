import {useMemo} from "react";
import styles from "@main/tweet/footer/CharacterCounter.module.css";

const CircleSVG = ({percentageUsed, excess}) => {
  const circumference = 2 * Math.PI * 40;
  const dasharray = useMemo(
    () => `${(percentageUsed / 100) * circumference} ${circumference}`,
    [percentageUsed, circumference],
  );

  const borderColor = excess > 0 ? "red" : "#1DA1F2";

  return (
    <svg className={styles.svg} viewBox="0 0 100 100">
      <circle cx="50" cy="50" fill="transparent" r="40" stroke="gray" strokeWidth="5" />
      <circle
        cx="50"
        cy="50"
        fill="transparent"
        r="40"
        stroke={borderColor}
        strokeDasharray={dasharray}
        strokeWidth="6"
        transform="rotate(-90) translate(-100)"
      />
    </svg>
  );
};

export default CircleSVG;
