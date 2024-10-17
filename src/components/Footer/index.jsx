import styles from "./styles.module.css";
import facebook_logo from "../../assets/icons/facebook_outlined.svg";
import twitter_logo from "../../assets/icons/twitter_outlined.svg";
import instagram_logo from "../../assets/icons/instagram_outlined.svg";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div>
          <h3 className={styles.footer_contacts}>Контакты</h3>
          <p className={styles.footer_phone}>8 800 000 00 00</p>
          <p className={styles.footer_email}>emailexample@email.com</p>
          <p className={styles.footer_rights}>
            2024 Сникер-магазин. Все права защищены
          </p>
        </div>

        <div className={styles.media_socials}>
          <div className={styles.media_socials_icons}>
            <a href="https://www.facebook.com" aria-label="Facebook">
              <img src={facebook_logo} alt="Facebook" />
            </a>
            <a href="https://www.twitter.com" aria-label="Twitter">
              <img src={twitter_logo} alt="Twitter" />
            </a>
            <a href="https://www.instagram.com" aria-label="Instagram">
              <img src={instagram_logo} alt="Instagram" />
            </a>
          </div>
          <div>
            <input
              type="email"
              placeholder="Введите свой email:"
              className={styles.footer_input}
            />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
