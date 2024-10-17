import { useDispatch } from "react-redux";
import { addItemToCart } from "../../redux/slices/cartSlice";
import styles from "./styles.module.css";

function ProductCard({ product }) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addItemToCart(product)); // Trimite produsul în store
  };

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
        <button onClick={handleAddToCart} className={styles.add_button}>
          +
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
