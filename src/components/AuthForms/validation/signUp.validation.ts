import * as Yup from 'yup';

const signUpValidationSchema = Yup.object({
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
  email: Yup.string()
    .matches(/^([0-9A-Za-z]+)@([a-z]+).([a-z]+)$/, 'Email is invalid')
    .email('Email is invalid')
    .required('Email is required'),
  password: Yup.string()
    .min(2, 'Password must be at least 2 characters')
    .max(30, 'Password must be 30 characters or less')
    .required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Password must match')
    .required('Confirm password is required'),
});

export default signUpValidationSchema;
