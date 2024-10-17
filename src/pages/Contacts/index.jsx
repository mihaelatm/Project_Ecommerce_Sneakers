import ContactInfo from "../../components/ContactInfo";
import styles from "./styles.module.css";
import ContactForm from "../../components/ContactForm";
import SocialMedia from "../../components/SocialMedia";

function Contacts() {
  return (
    <section className={styles.contacts_container}>
      <h2 className={styles.contacts_title}>Контакты</h2>
      <ContactInfo />

      <div className={styles.contacts}>
        <ContactForm />
        <SocialMedia />
      </div>
    </section>
  );
}

export default Contacts;
