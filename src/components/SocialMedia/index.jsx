import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import twitter_logo from "../../assets/icons/twitter.svg";
import facebook_logo from "../../assets/icons/facebook.svg";
import snapchat_logo from "../../assets/icons/snapchat.svg";

function SocialMedia() {
  return (
    <section className={styles.socials_container}>
      <h4 className={styles.socials_title}>Найдите нас:</h4>
      <div className={styles.socials}>
        <Link to="#">
          <img src={snapchat_logo} alt="Snapchat" />
        </Link>
        <Link to="#">
          <img src={facebook_logo} alt="Facebook" />
        </Link>
        <Link to="#">
          <img src={twitter_logo} alt="Twitter" />
        </Link>
      </div>
    </section>
  );
}

export default SocialMedia;
