import styles from "../../styles/Element.module.css";
const Element = ({props}) => {
  return (
    <li key={props.name} className={styles.menuElement}>
      <a className={styles.flexElement}>
        <img alt={props.name} className={styles.imgElement} src={props.icon} width={30} />

        <span className={styles.textSpan}>{props.name}</span>
      </a>
    </li>
  );
};

export default Element;
