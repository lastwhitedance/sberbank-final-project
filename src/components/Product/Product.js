import styles from "./Product.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Product = ({ data }) => {
  return (
    <div className={styles.card}>
      <h1>{data.name}</h1>
      <div className={styles.card__inner}>
        <img src={data.pictures} alt={data.name} />
        <div className="card__info">
          <div>Описание: {data.description}</div>
          <div>Скидка: {data.discount}</div>
          <div>Цена: {data.price}</div>
          <div>Осталось: {data.stock}</div>
          <button className={styles.card__cart}>
            <FontAwesomeIcon icon={faCartShopping} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
