import * as Yup from 'yup';

export const signUpFormValidationSchema = Yup.object({
  email: Yup.string().email().required('Required'),
  group: Yup.string().required('Required'),
  password: Yup.string().required('Required'),
});
