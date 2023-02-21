import { withQuery } from "../components/HOCs/withQuery";
import { useContext } from "react";
import { AppContext } from "../context/AppContextProvider";
import { useQuery } from "@tanstack/react-query";
import { productsApi } from "../api/Api";
import Product from "../components/Product/Product";
import { useParams } from "react-router-dom";

const SingleProductPageInner = ({ data }) => {
  return <Product data={data} />;
};

const SingleProductPageWithQuery = withQuery(SingleProductPageInner);

export const SingleProductPage = () => {
  const { token } = useContext(AppContext);
  const { id } = useParams();

  const { data, isError, error, isLoading } = useQuery({
    queryKey: ["singleProduct"],
    queryFn: () => productsApi.getProductById(id),
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
