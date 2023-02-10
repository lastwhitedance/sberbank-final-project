import { Field, Form, Formik } from "formik";
import { searchFormValidationSchema } from "./SearchValidator";
import styles from "./Search.module.css";

const initialValues = {
  query: "",
};
export const Search = () => {
  const submitHandler = async (values) => {
    console.log({ values });
  };
  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={searchFormValidationSchema}
        onSubmit={submitHandler}
      >
        <Form>
          <Field
            className={styles.input}
            name="query"
            placeholder="Найти"
            type="text"
          />
        </Form>
      </Formik>
    </>
  );
};
