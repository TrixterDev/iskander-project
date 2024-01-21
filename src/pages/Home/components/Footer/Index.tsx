import styles from "./index.module.scss";
import { FaFacebook, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footer__content}`}>
        <div className={styles.footer__main}>
          <header className={styles.footer__infoCompany}>
            <img src="./img/logo.svg" alt="" />
            <p>
              Первый отечественный бренд Iskender на рынке сантехники от
              компании ОсОО «Стройдом.кг»
            </p>
            {/* <div className={styles.footer__download}> */}
            <a href="" className={styles.footer__download}>
              <img src="./img/AStore.png" alt="" />
            </a>
            <a href="">
              <img src="./img/gPlay.png" alt="" />
            </a>
            {/* </div> */}
          </header>
          <address>
            <header>
              <h2>Адреса</h2>
            </header>
            <div>
              <div>
                <p className={styles.footer__title}>ЭлитСтрой</p>
                <span>ул. Ден-Сяопина 18/1</span>
              </div>
              <div>
                <p className={styles.footer__title}>Баткен</p>
                <span>ул. Льва-Толстого 19</span>
              </div>
              <div>
                <p className={styles.footer__title}>ТааТан</p>
                <span>ул. Лермонтова 6</span>
              </div>
            </div>
          </address>
          <nav>
            <header>
              <h2>Компания</h2>
            </header>
            <div>
              <a href="">Каталог</a>
              <a href="">Избранное</a>
              <a href="">Личный кабинет</a>
            </div>
          </nav>
          <nav>
            <header>
              <h2>Контакты</h2>
            </header>
            <div>
              <div>
                <p className={styles.footer__title}>Email:</p>
                <a href="mailto:iskender.kg@gmail.com">iskender.kg@gmail.com</a>
              </div>
              <div className={styles.footer__phone}>
                <p className={styles.footer__title}>Телефон:</p>
                <a href="tel:+996 (500) 000-104">+996 (500) 000-104</a>
                <a href="tel:+996 (997) 000-104">+996 (997) 000-104</a>
                <a href="tel:+996 (222) 000-104">+996 (222) 000-104</a>
              </div>
              <a
                href="https://web.whatsapp.com/"
                className={styles.footer__whats}
              >
                <img src="./img/whatsapp.svg" alt="" />
                WhatsApp
              </a>
            </div>
          </nav>
        </div>
        <hr className={styles.footer__line} />
        <div className={styles.footer__subFooter}>
          <span>© 2023 Iskender.kg - Отечественный бренд сантехники</span>
          <div>
            <a href="">
              <FaInstagram />
            </a>
            <a href="">
              <FaFacebook />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
