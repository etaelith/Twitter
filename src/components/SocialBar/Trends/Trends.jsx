import styles from "@/styles/Trends.module.css";

const Trends = () => {
  return (
    <div className={styles.div}>
      <span>What&apos;s happening</span>
      <ul>
        <li>Heat at Bucks</li>
        <li>#AsistenciaALaFalopa</li>
        <li>#DolarBlue</li>
        <li>Starship</li>
        <li>Politico happens</li>
      </ul>
      <span>Show more</span>
    </div>
  );
};

export default Trends;
