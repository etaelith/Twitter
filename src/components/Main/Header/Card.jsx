import styles from "@main/header/UserExp.module.css";

const Card = ({children, active, onClick}) => {
  const className = active === children ? styles.active : "";

  return (
    <div className={`${styles.card} ${className}`} onClick={onClick}>
      <span>{children}</span>
    </div>
  );
};

export default Card;
