import {useState} from "react";
import styles from "@main/header/UserExp.module.css";

import Card from "./Card";

const spans = ["For you", "Following", "Communities"];
const UserExp = () => {
  const [active, setActive] = useState("For you");
  const handleClick = (e) => {
    e.preventDefault();
    setActive(e.target.innerText);
  };

  return (
    <div className={styles.div}>
      {spans.map((item, index) => (
        <Card key={index} active={active} onClick={handleClick}>
          {item}
        </Card>
      ))}
    </div>
  );
};

export default UserExp;
