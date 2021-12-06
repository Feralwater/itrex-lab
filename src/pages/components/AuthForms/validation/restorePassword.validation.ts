import * as Yup from 'yup';

const restorePasswordValidationSchema = Yup.object({
  email: Yup.string()
    .matches(/^([0-9A-Za-z]+)@([a-z]+).([a-z]+)$/, 'Email is invalid')
    .email('Email is invalid')
    .required('Email is required'),
});

export default restorePasswordValidationSchema;
