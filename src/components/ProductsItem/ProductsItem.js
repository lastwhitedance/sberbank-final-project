import styles from "./ProductItem.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
export const ProductsItem = ({ product }) => {
  return (
    <div key={product.id} className={styles.card}>
      <div className={styles.card__inner}>
        <img
          className={styles.card__pictures}
          src={product.pictures}
          alt={product.name}
        />
        <div className={styles.card__title}>{product.name}</div>
        <div className={styles.card__description}>
          <div className={styles.card__price}>{product.price} ₽</div>
          <button className={styles.card__cart}>
            <FontAwesomeIcon icon={faCartShopping} />
          </button>
        </div>
      </div>
    </div>
  );
};
