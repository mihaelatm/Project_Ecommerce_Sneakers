import { Link } from "react-router-dom";
import styles from "./styles.module.css"; //

function Header() {
  return (
    <header className={styles.header}>
      <h3 className={styles.header_logo}>Сникер - магазин</h3>
      <nav className={styles.nav}>
        <Link to="/" className={styles.nav_link}>
          Главная
        </Link>
        <Link to="/cart" className={styles.nav_link}>
          Корзина
        </Link>
        <Link to="/contacts" className={styles.nav_link}>
          Контакты
        </Link>
      </nav>
    </header>
  );
}

export default Header;
