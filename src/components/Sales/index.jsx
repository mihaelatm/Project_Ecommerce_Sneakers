import styles from "./styles.module.css";
import banner from "../../assets/images/banner.png";

function Sales() {
  return (
    <section className={styles.sales_image}>
      <img src={banner} alt="Banner" className={styles.banner_img} />
    </section>
  );
}
export default Sales;
