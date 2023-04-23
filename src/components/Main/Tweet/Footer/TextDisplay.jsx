import styles from "@main/tweet/CharacterCounter.module.css";

const TextDisplay = ({excess}) => {
  const textColor = excess > 0 ? "red" : "#657786";
  const textContent = excess > 0 ? `-${Math.abs(excess)}` : "";

  return (
    <div className={styles.text} style={{color: textColor}}>
      {textContent}
    </div>
  );
};

export default TextDisplay;
