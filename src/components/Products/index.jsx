import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import axios from "axios";

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(
        "https://66f3c9ca77b5e8897096d66e.mockapi.io/productData"
      );
      setProducts(response.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) {
    return <p>Загрузка продуктов...</p>; // Отображение сообщения о загрузке
  }

  return (
    <section className={styles.products}>
      <h2 className={styles.products_title}>Товары</h2>
      <ul className={styles.product_list}>
        {products.map((product) => (
          <li key={product.id} className={styles.product_item}>
            <h3>{product.name}</h3>
            <img
              src={product.image}
              alt={product.name}
              className={styles.product_image}
            />
            <p>{product.description}</p>
            <p>Цена: {product.price}₽</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Products;
