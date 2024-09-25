import styles from "./styles.module.css";
import facebook_logo from "";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div>
        <h3 className={styles.footer_contacts}>Контакты</h3>
        <p className={styles.footer_phone}>8 800 000 00 00</p>
        <p className={styles.footer_email}>emailexample@email.com</p>
        <p className={styles.footer_rights}>
          2024 Сникер-магазин. Все права защищены
        </p>
      </div>

      <div>
        <a href="www.facebook.com">
          <img src={facebook_logo} alt="Facebook" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
