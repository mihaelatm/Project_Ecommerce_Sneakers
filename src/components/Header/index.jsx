import { NavLink } from "react-router-dom";
import styles from "./styles.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h3 className={styles.header_logo}>Сникер - магазин</h3>
        <nav className={styles.nav}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? styles.active_link : styles.nav_link
            }
          >
            Главная
          </NavLink>
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              isActive ? styles.active_link : styles.nav_link
            }
          >
            Корзина
          </NavLink>
          <NavLink
            to="/contacts"
            className={({ isActive }) =>
              isActive ? styles.active_link : styles.nav_link
            }
          >
            Контакты
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
