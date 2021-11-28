import React, { useEffect } from 'react';
import Routes from './routes/Routes';
import profile from './redux/actions/profile.actions';
import { useAppDispatch, useAppSelector } from './hooks';

function App() {
  const { accessToken } = useAppSelector((state) => state.login);

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(profile.pending({
      first_name: '',
      id: '',
      last_name: '',
      photo: '',
      role_name: 'PUBLIC',
    }));
  }, [dispatch, accessToken]);

  const { roleName } = useAppSelector((state) => state.profile);

  return (
    (roleName !== '')
      ? <Routes />
      : null
  );
}

export default App;
