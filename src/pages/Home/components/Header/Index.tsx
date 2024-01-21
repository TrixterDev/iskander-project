import { FiSearch } from "react-icons/fi";
import { IoIosMenu } from "react-icons/io";
import styles from "./index.module.scss";
import cn from "clsx";
import { useState } from "react";

export default function Header() {
  const [hamburger, setHamburger] = useState<boolean>(false);
  return (
    <header className={cn(styles.header, { [styles.activeMenu]: hamburger })}>
      <div className={`container ${styles.header__content}`}>
        <a href="#" className={styles.header__logo}>
          <img src="/public/img/logo.svg" alt="" />
        </a>
        <div className={cn({ [styles.activeMenu]: hamburger })}>
          <button className={styles.header__catalog}>
            <IoIosMenu />
            <p>Каталог</p>
          </button>
          <label className={styles.header__search}>
            <div>
              <FiSearch className="mr-2" />
              <input
                type="text"
                placeholder="Поиск"
                className="outline-none w-full"
              />
            </div>
            <p>42903 товаров</p>
          </label>
          <section className={styles.header__account}>
            <div className={styles.header__account_user}>
              <div>
                <p className="text">Добро пожаловать</p>
                <h5 className="text-sm">Вход/Регистрация</h5>
              </div>
              <button>
                <img src="/public/img/header/user.svg" alt="" />
              </button>
            </div>
            <hr className={styles.header__account_line} />
            <button className={styles.header__account_cart}>
              <img src="/public/img/header/cart.svg" alt="" />
            </button>
          </section>
        </div>
      </div>
      <button
        onClick={() => setHamburger(!hamburger)}
        color="#fff"
        className={cn(`${styles.hamburger} hamburger hamburger--slider `, {
          "is-active": hamburger,
        })}
        type="button"
      >
        <span className="hamburger-box">
          <span className="hamburger-inner"></span>
        </span>
      </button>
    </header>
  );
}
