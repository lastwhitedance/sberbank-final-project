import { ProductsItem } from "../ProductsItem/ProductsItem";
import styles from "./ProductsList.module.css";
export const ProductsList = ({ data }) => {
  return (
    <div className={styles.cards}>
      {data.products.map((product) => (
        <ProductsItem product={product} key={product._id} />
      ))}
    </div>
  );
};
