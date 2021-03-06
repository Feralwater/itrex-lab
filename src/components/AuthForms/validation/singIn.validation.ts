import * as Yup from 'yup';

const singInValidationSchema = Yup.object({
  email: Yup.string()
    .matches(/^([0-9A-Za-z]+)@([a-z]+).([a-z]+)$/, 'Email is invalid')
    .email('Email is invalid')
    .required('Email is required'),
  password: Yup.string()
    .min(2, 'Password must be at least 2 characters')
    .max(30, 'Password must be 30 characters or less')
    .required('Password is required'),
});

export default singInValidationSchema;
