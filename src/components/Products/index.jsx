import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import axios from "axios";
import ProductCard from "../ProductCard";

function Products({ product }) {
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
    <div className={styles.products}>
      <h2 className={styles.products_title}>Товары</h2>
      <div className={styles.products_list}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Products;
