import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { createTodoFormValidationSchema } from './helpers/validator';

const initialValues = {
  email: '',
  group: 'sm9',
  password: '',
};

export const SignInPage = () => {
  const navigate = useNavigate();

  const { mutateAsync, isLoading } = useMutation({
    mutationFn: data =>
      fetch('http://localhost:3005/todos', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(data),
      }).then(res => res.json()),
  });

  const submitHandler = async values => {
    const response = await mutateAsync(values);
    console.log(response);
    navigate(`/products`);
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={createTodoFormValidationSchema}
        onSubmit={submitHandler}
      >
        <Form>
          <Field name='email' placeholder='email' type='email' />
          <ErrorMessage component='p' className='error' name='email' />
          <br />
          <Field name='group' placeholder='group' type='text' />
          <ErrorMessage component='p' className='error' name='group' />
          <br />
          <Field name='password' placeholder='password' type='password' />
          <ErrorMessage component='p' className='error' name='password' />
          <br />
          <button disabled={isLoading} type='submit'>
            Войти
          </button>
        </Form>
      </Formik>
    </div>
  );
};
