import { withQuery } from "../components/HOCs/withQuery";
import { useContext } from "react";
import { AppContext } from "../context/AppContextProvider";
import { useQuery } from "@tanstack/react-query";
import { productsApi } from "../api/Api";
import Product from "../components/Product/Product";

const SingleProductPageInner = ({ data }) => {
  return (
    <div>
      <div>SingleProductPage</div>
      <Product data={data} />
    </div>
  );
};

const SingleProductPageWithQuery = withQuery(SingleProductPageInner);

export const SingleProductPage = () => {
  const { token } = useContext(AppContext);

  const { data, isError, error, isLoading } = useQuery({
    queryKey: ["productsList"],
    queryFn: () => productsApi.getAllProducts(),
    enabled: token !== undefined,
  });

  return (
    <SingleProductPageWithQuery
      data={data}
      isError={isError}
      error={error}
      isLoading={isLoading}
    />
  );
};
