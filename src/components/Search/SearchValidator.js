import * as Yup from "yup";

export const searchFormValidationSchema = Yup.object({
  query: Yup.string().required("Required"),
});
