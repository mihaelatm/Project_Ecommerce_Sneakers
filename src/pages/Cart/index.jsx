import { useDispatch, useSelector } from "react-redux";
import styles from "./styles.module.css";
import remove_icon from "../../assets/icons/remove_icon.svg";
import CartTotal from "../../components/CartTotal";
import { removeItemFromCart } from "../../redux/slices/cartSlice";

function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const total = calculateTotal();

  const handleRemoveItem = (id) => {
    dispatch(removeItemFromCart(id));
  };

  return (
    <section className={styles.cart_container}>
      <div className={styles.cart}>
        <h2 className={styles.cart_title}>Корзина</h2>
        <div className={styles.cart_content}>
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <div key={item.id} className={styles.product_card}>
                <img
                  src={item.image}
                  alt={item.title}
                  className={styles.product_card_image}
                />
                <h2 className={styles.product_card_title}>{item.name}</h2>

                <div className={styles.product_add}>
                  <p className={styles.product_card_price}>
                    Цена: <br />
                    <span className={styles.product_card_price_value}>
                      {item.price} €
                    </span>
                  </p>
                </div>
                <img
                  src={remove_icon}
                  alt="Remove_icon"
                  className={styles.remove_icon}
                  onClick={() => handleRemoveItem(item.id)}
                />
              </div>
            ))
          ) : (
            <p>Корзина пуста</p>
          )}
        </div>
      </div>

      <div className={styles.cart_total}>
        {cartItems.length > 0 && (
          <div className={styles.cart_total}>
            <CartTotal cartItems={cartItems} total={total} />
          </div>
        )}
      </div>
    </section>
  );
}

export default Cart;
