import { IAddress } from "../../../../shared/interfaces/address.interface";
import { FaArrowRight } from "react-icons/fa";
import styles from "./index.module.scss";

export default function Address({ address, time, phone, link }: IAddress) {
  return (
    <div className={styles.card}>
      <header className={styles.card__header}>
        <div className={styles.card__company}>
          <img src="./img/logo-small.svg" alt="" />
          <div>
            <h3>Iskender home</h3>
            <a href={link}>Открыть в карте</a>
          </div>
        </div>
        <button>
          <FaArrowRight />
        </button>
      </header>
      <hr className={styles.card__line} />
      <address className={styles.card__location}>
        <img src="./img/address/Location.svg" alt="" />
        <a href={link}>{address}</a>
      </address>
      <div className={styles.card__contact_info}>
        <div>
          <img src="/public./img/address/Clock-Square.svg" alt="" />
          <p>{time}</p>
        </div>
        <div>
          <img src="./img/address/phone.svg" alt="" />
          <a href={`tel:${phone}`}>{phone}</a>
        </div>
      </div>
    </div>
  );
}
