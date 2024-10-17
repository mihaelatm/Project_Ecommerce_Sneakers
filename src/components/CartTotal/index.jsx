import styles from "./styles.module.css";

function CartTotal({ cartItems, total }) {
  return (
    <div className={styles.cart_total}>
      <h3 className={styles.cart_total_title}>Итого</h3>
      <ul className={styles.cart_total_list}>
        {cartItems.map((item) => (
          <li key={item.id} className={styles.cart_total_item}>
            {item.name}
          </li>
        ))}
      </ul>
      <hr />
      <h4 className={styles.cart_total_price}>
        Цена: <br />
        <span className={styles.cart_total_price_value}>{total} €</span>
      </h4>
    </div>
  );
}

export default CartTotal;
