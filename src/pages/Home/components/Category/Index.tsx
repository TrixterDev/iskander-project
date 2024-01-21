import { ICategory } from "../../../../shared/interfaces/category.interface";
import styles from "./index.module.scss";

export default function Category({ title, count, img }: ICategory) {
  return (
    <div className={styles.card}>
      <h4 className={styles.card__title}>{title}</h4>
      <p className={styles.card__count}>{count}</p>
      <img className={styles.card__img} src={img} alt="" />
    </div>
  );
}
