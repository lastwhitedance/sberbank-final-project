import { Loader } from '../Loader/Loader';

export const withQuery = WrappedComponent =>
  function ({ isLoading, isError, error, ...rest }) {
    if (isError) return <div>{error.message}</div>;
    if (isLoading) return <Loader />;
    return <WrappedComponent {...rest} />;
  };
