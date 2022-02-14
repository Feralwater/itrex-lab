import { Route, Routes } from 'react-router-dom';
import { PATH } from 'routes/constants';
import { AuthorisedLayout, RestorePasswordForm } from 'components';
import { SendEmail, SignIn, SignUp } from 'pages';
import React, { useState } from 'react';

export const AuthRouter = () => {
  const [emailForRestorePassword, setEmailForRestorePassword] = useState<string>('');
  return (
    <Routes>
      <Route
        path={PATH.RESTORE_PASSWORD}
        element={
          <AuthorisedLayout><RestorePasswordForm setEmailForRestorePassword={setEmailForRestorePassword} /></AuthorisedLayout>
        }
      />
      <Route
        path={PATH.SEND_EMAIL}
        element={(
          <AuthorisedLayout>
            <SendEmail email={emailForRestorePassword} />
          </AuthorisedLayout>
        )}
      />
      <Route path={PATH.SIGN_IN} element={<AuthorisedLayout><SignIn /></AuthorisedLayout>} />
      <Route path={PATH.SIGN_UP} element={<AuthorisedLayout><SignUp /></AuthorisedLayout>} />
    </Routes>
  );
};
