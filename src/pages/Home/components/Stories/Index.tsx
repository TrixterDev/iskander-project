import { IStories } from "../../../../shared/interfaces/stories.interfaces";
import styles from "./index.module.scss";

export default function Stories({ name, img }: IStories) {
  return (
    <div className={styles.card}>
      <img src={img} alt="" className={styles.card_img} />
      <h5 className={styles.card__title}>{name}</h5>
    </div>
  );
}
