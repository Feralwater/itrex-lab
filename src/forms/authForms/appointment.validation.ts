import * as Yup from 'yup';

const appointmentValidationSchema = Yup.object({
  reason: Yup.string()
    .min(2, 'Must be 2 characters or more')
    .max(100, 'Must be 100 characters or less')
    .required('Required'),
});

export default appointmentValidationSchema;
