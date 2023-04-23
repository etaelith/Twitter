import styles from "@main/header/Card.module.css";

const Card = ({children, active, onClick}) => {
  const classNameDiv = active === children ? styles.activeText : "";
  const className = active === children ? styles.active : "";

  return (
    <div className={`${styles.card}`} onClick={onClick}>
      <div className={styles.cardDiv}>
        <span className={`${classNameDiv}`}>{children}</span>
        <div className={className} />
      </div>
    </div>
  );
};

export default Card;
