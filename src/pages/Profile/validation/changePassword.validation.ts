import * as Yup from 'yup';

const changePasswordValidationSchema = Yup.object({
  oldPassword: Yup.string()
    .min(2, 'Password must be at least 2 characters')
    .max(30, 'Password must be 30 characters or less')
    .required('Password is required'),
  newPassword: Yup.string()
    .min(2, 'Password must be at least 2 characters')
    .max(30, 'Password must be 30 characters or less')
    .required('Password is required'),
});

export default changePasswordValidationSchema;
