import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { productsApi } from '../../api/Api';
import { withQuery } from '../HOCs/withQuery';
import { signUpFormValidationSchema } from './SignUpValidator';

const initialValues = {
  email: '',
  group: 'sm9',
  password: '',
};

const SignUpInner = ({ mutateAsync }) => {
  const navigate = useNavigate();

  const submitHandler = async values => {
    await mutateAsync(values);
    setTimeout(() => navigate('/signin'));
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={signUpFormValidationSchema}
        onSubmit={submitHandler}
      >
        <Form>
          <Field name='email' placeholder='Электронная почта' type='email' />
          <ErrorMessage component='p' className='error' name='email' />
          <Field name='group' placeholder='Группа' type='text' />
          <ErrorMessage component='p' className='error' name='group' />
          <Field name='password' placeholder='Пароль' type='password' />
          <ErrorMessage component='p' className='error' name='password' />
          <button type='submit'>Зарегистрироваться</button>
        </Form>
      </Formik>
    </div>
  );
};

const SignupWithQuery = withQuery(SignUpInner);

export const SignUpForm = () => {
  const { mutateAsync, isError, error, isLoading } = useMutation({
    mutationFn: values => productsApi.signUp(values),
  });

  return (
    <SignupWithQuery
      mutateAsync={mutateAsync}
      isError={isError}
      error={error}
      isLoading={isLoading}
    />
  );
};
