import { INews } from "../../../../shared/interfaces/news.interface";
import styles from "./index.module.scss";

export default function News({ discount, title, img, ilustration }: INews) {
  return (
    <div className={styles.card}>
      <img className={styles.card__bg} src={img} alt="" />
      <div className={styles.card__content}>
        <div className={styles.card__discount}>
          <h2>{discount}</h2>
          <p>{title}</p>
          <button>Подробнее</button>
        </div>
        <img className={styles.card__ilustration} src={ilustration} alt="" />
      </div>
    </div>
  );
}
