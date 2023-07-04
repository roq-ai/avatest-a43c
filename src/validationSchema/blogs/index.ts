import * as yup from 'yup';

export const blogValidationSchema = yup.object().shape({
  title: yup.string().required(),
  body: yup.string().required(),
  user_id: yup.string().nullable(),
  organization_id: yup.string().nullable(),
});
