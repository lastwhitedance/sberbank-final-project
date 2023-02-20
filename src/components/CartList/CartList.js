import styles from "./CartList.module.css";

const CartList = ({ data }) => {

  return (
    <div className={styles.cart}>
      {/*{data.products.map((product) => (*/}
      {/*    <ProductsItem product={product} key={product._id} />*/}
      {/*))}*/}
    </div>
  );
};

export default CartList;
