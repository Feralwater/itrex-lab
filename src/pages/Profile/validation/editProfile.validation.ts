import * as Yup from 'yup';

const editProfileValidationSchema = Yup.object({
  firstName: Yup.string()
    .matches(/^[a-zA-Z]+$/, 'First name is invalid')
    .min(2, 'Must be 2 characters or more')
    .max(30, 'Must be 30 characters or less')
    .required('Required'),
  lastName: Yup.string()
    .matches(/^[a-zA-Z]+$/, 'Last name is invalid')
    .min(2, 'Must be 2 characters or more')
    .max(20, 'Must be 30 characters or less')
    .required('Required'),
});

export default editProfileValidationSchema;
