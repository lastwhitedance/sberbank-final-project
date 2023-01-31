import * as Yup from 'yup';

export const signInFormValidationSchema = Yup.object({
  email: Yup.string().email().required('Required'),
  password: Yup.string().required('Required'),
});
