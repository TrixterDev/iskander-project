import { ICard } from "../../../../shared/interfaces/cards.interface";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import cn from "clsx";
import styles from "./index.module.scss";
import { useState } from "react";

export default function Cards({
  img,
  title,
  price,
  pertinence,
  set,
  old_price,
}: ICard) {
  const [count, setCount] = useState<number>(0);
  const [like, setLike] = useState<boolean>(false);
  return (
    <div className={styles.card}>
      <div className={styles.card__img}>
        <img src={img} alt="" />
        <button onClick={() => setLike(!like)}>
          {like ? <FaHeart /> : <FaRegHeart />}
        </button>
      </div>
      <header className={styles.card__title}>
        <h5>{title}</h5>
      </header>
      <div
        className={cn(styles.card__price, {
          [styles.card__oldPrice]: old_price,
        })}
      >
        {!old_price ? (
          <ins>{price}</ins>
        ) : (
          <>
            <ins>{price}</ins>
            <del>{old_price}</del>
          </>
        )}
      </div>
      <span
        className={cn(styles.card__pertinence, {
          [styles.card__pertinence_not]: pertinence,
        })}
      >
        В наличии
      </span>
      <span
        className={cn(styles.card__set, {
          [styles.card__set_not]: !set,
        })}
      >
        Комплект
      </span>
      <div className={styles.card__count}>
        <button onClick={() => setCount(count + 1)}>&#43;</button>
        <p>{count}</p>
        <button onClick={() => setCount(count - 1)}>&#8722;</button>
      </div>
    </div>
  );
}
