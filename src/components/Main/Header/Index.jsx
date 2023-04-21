import styles from "@main/header/Header.module.css";

import UserExp from "./UserExp";

const Index = () => {
  return (
    <div className={styles.div}>
      <div className={styles.home}>Home</div>
      <UserExp />
    </div>
  );
};

export default Index;
