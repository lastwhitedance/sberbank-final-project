import { withQuery } from "../components/HOCs/withQuery";
import { useContext } from "react";
import { AppContext } from "../context/AppContextProvider";
import { useQuery } from "@tanstack/react-query";
import { productsApi } from "../api/Api";
import CartList from "../components/CartList/CartList";

export const CartPageInner = ({ data }) => {
  return (
    <div>
      <h1 className="title">Корзина</h1>
      <CartList data={data} />
    </div>
  );
};

const CartPageWithQuery = withQuery(CartPageInner);

export const CartPage = () => {
  const { token } = useContext(AppContext);

  const { data, isError, error, isLoading } = useQuery({
    queryKey: ["productsList"],
    queryFn: () => productsApi.getAllProducts(),
    enabled: token !== undefined,
  });

  return (
    <CartPageWithQuery
      data={data}
      isError={isError}
      error={error}
      isLoading={isLoading}
    />
  );
};
