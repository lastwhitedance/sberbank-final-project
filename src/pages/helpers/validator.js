import * as Yup from 'yup';

export const createTodoFormValidationSchema = Yup.object({
  email: Yup.string().email().required('Required'),
  password: Yup.string()
    .max(100, 'Must be 100 characters or less')
    .required('Required'),
  group: Yup.string().required('Required'),
});
