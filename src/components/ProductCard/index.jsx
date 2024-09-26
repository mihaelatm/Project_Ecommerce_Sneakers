import styles from "./styles.module.css";

function ProductCard({ product }) {
  return (
    <div className={styles.product_card}>
      <img
        src={product.image}
        alt={product.title}
        className={styles.product_card_image}
      />
      <h3 className={styles.product_card_title}>{product.name}</h3>

      <div className={styles.product_add}>
        <p className={styles.product_card_price}>
          Цена: <br />
          <span className={styles.product_card_price_value}>
            {product.price} €
          </span>
        </p>
        <button className={styles.add_button}>+</button>
      </div>
    </div>
  );
}

export default ProductCard;
