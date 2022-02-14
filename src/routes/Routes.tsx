import React from 'react';
import { useAppSelector } from 'hooks';
import { selectProfile } from 'redux/reducers';
import { PrivateRouter } from 'routes/Router';
import { AuthRouter } from 'routes/AuthRoute';
import { Route, Routes } from 'react-router-dom';
import { Error404 } from 'pages/Error404';

export const AppRouter:React.VFC = () => {
  const { roleName } = useAppSelector(selectProfile);
  return (
    <>
      <AuthRouter />
      <PrivateRouter roleName={roleName} />
      <Routes>
        <Route path="*" element={<Error404 />} />
      </Routes>
    </>
  );
};
