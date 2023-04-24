import styles from "@common/Loading.module.css";
import UseAnimation from "react-useanimations";
import loading from "react-useanimations/lib/loading2";
const Loading = () => {
  return (
    <div className={styles.loading}>
      <UseAnimation animation={loading} fillColor="#1DA1F2" size={56} strokeColor="#0286d6" />
    </div>
  );
};

export default Loading;
