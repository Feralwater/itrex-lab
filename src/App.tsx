import React, { useEffect } from 'react';
import Routes from './routes/Routes';
import { profile } from './redux/actions';
import { useAppDispatch, useAppSelector } from './hooks';
import NotificationContainer from './components/Notification/NotificationContainer';
import { ROLES } from './routes/constants';
import { selectAccessToken, selectProfile } from './redux/reducers';

function App() {
  const accessToken = useAppSelector(selectAccessToken);
  const { roleName } = useAppSelector(selectProfile);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(profile.pending({
      first_name: '',
      id: '',
      last_name: '',
      photo: '',
      role_name: ROLES.PUBLIC,
    }));
  }, [dispatch, accessToken]);

  return (
    <>
      {(roleName !== '')
        ? <Routes />
        : null}
      <NotificationContainer />
    </>
  );
}

export default App;
