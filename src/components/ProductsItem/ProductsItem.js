import styles from "./ProductItem.module.css";

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
        <div className={styles.card__desc}>
          <div className={styles.card__price}>
            <span>Цена:</span> {product.price} ₽
          </div>
          <div className={styles.card__discount}>
            <span>Скидка:</span> {product.discount} %
          </div>
          <div className={styles.card__stock}>
            <span>Количество:</span> {product.stock} шт.
          </div>
        </div>
      </div>
    </div>
  );
};
