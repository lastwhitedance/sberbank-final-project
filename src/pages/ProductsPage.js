import { useEffect, useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { productsApi } from '../api/Api';
import { AppContext } from '../context/AppContextProvider';

export const ProductsPage = () => {
  const { token } = useContext(AppContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate('/signin');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  const { data, error } = useQuery({
    queryKey: ['productsList'],
    queryFn: () => productsApi.getAllProducts(),
    enabled: token !== undefined,
  });

  if (error) {
    return <p>Ошибка: {error.message}</p>;
  }

  if (data === undefined) {
    return <p>Пусто!</p>;
  }

  return (
    <div>
      <h1>Продукты</h1>
      {data.products.map(
        ({ _id: id, name, pictures, discount, stock, price, description }) => (
          <div key={id}>
            <div>{name}</div>
            <img src={pictures} alt='' style={{ width: '50px' }} />
            <div>Цена: {price}</div>
            <div>Скидка: {discount}</div>
            <div>Количество: {stock}</div>
            <div>Описание: {description}</div>
          </div>
        )
      )}
    </div>
  );
};
