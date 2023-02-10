import { useContext } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { productsApi } from "../../api/Api";
import { withQuery } from "../HOCs/withQuery";
import { signInFormValidationSchema } from "./SignInValidator";
import { AppContext } from "../../context/AppContextProvider";

const initialValues = {
  email: "",
  password: "",
};

export const SignInInner = ({ mutateAsync }) => {
  const navigate = useNavigate();

  const submitHandler = async (values) => {
    await mutateAsync(values);
    setTimeout(() => navigate("/products"));
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={signInFormValidationSchema}
        onSubmit={submitHandler}
      >
        <Form>
          <Field name="email" placeholder="Электронная почта" type="email" />
          <ErrorMessage component="p" className="error" name="email" />
          <Field name="password" placeholder="Пароль" type="password" />
          <ErrorMessage component="p" className="error" name="password" />
          <button type="submit">Войти</button>
        </Form>
      </Formik>
    </div>
  );
};

const SignInWithQuery = withQuery(SignInInner);

export const SignInForm = () => {
  const { setToken } = useContext(AppContext);
  const { mutateAsync, isError, error, isLoading } = useMutation({
    mutationFn: (values) =>
      productsApi.signIn(values).then((result) => {
        setToken(result.token);
      }),
  });

  return (
    <SignInWithQuery
      mutateAsync={mutateAsync}
      isError={isError}
      error={error}
      isLoading={isLoading}
    />
  );
};
