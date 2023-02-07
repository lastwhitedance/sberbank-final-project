import { useEffect, useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { productsApi } from "../api/Api";
import { AppContext } from "../context/AppContextProvider";
import { withQuery } from "../components/HOCs/withQuery";
import { ProductsList } from "../components/ProductsList/ProductsList";

export const ProductsPageInner = ({ data }) => {
  return (
    <div>
      <h1 className="title">Продукты</h1>
      <ProductsList data={data} />
    </div>
  );
};

const ProductsPageWithQuery = withQuery(ProductsPageInner);

export const ProductsPage = () => {
  const { token } = useContext(AppContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/signin");
    }
  }, [navigate, token]);

  const { data, isError, error, isLoading } = useQuery({
    queryKey: ["productsList"],
    queryFn: () => productsApi.getAllProducts(),
    enabled: token !== undefined,
  });

  return (
    <ProductsPageWithQuery
      data={data}
      isError={isError}
      error={error}
      isLoading={isLoading}
    />
  );
};
