import * as Yup from 'yup';

const appointmentValidationSchema = Yup.object({
  reason: Yup.string()
    .min(4, 'Must be 4 characters or more')
    .max(100, 'Must be 100 characters or less')
    .required('Required'),
  note: Yup.string()
    .max(100, 'Must be 100 characters or less'),
});

export default appointmentValidationSchema;
