import { PATH } from 'routes/constants';
import { SignUp } from 'pages/auth/SignUp';
import { SignIn } from 'pages/auth/SignIn';
import { SendEmail } from 'pages/auth/SendEmail';
import { RestorePasswordForm } from 'components/AuthForms';

export const authRoutes = [
  {
    path: PATH.SIGN_UP,
    element: SignUp,
  },
  {
    path: PATH.SIGN_IN,
    element: SignIn,
  },
  {
    path: PATH.RESTORE_PASSWORD,
    element: RestorePasswordForm,
  },
  {
    path: PATH.SEND_EMAIL,
    element: SendEmail,
  },
];
