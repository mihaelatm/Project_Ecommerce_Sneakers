import styles from "./styles.module.css";

function ContactInfo() {
  return (
    <ul className={styles.contacts_list}>
      <li className={styles.contacts}>8 800 000 00 00</li>
      <li className={styles.contacts}>emailexample@email.com</li>
    </ul>
  );
}

export default ContactInfo;
