import React, { useEffect } from 'react';
import Routes from './routes/Routes';
import profile from './redux/actions/profile.actions';
import { useAppDispatch, useAppSelector } from './hooks';
import NotificationContainer from './components/Notification/NotificationContainer';
import { ROLES } from './routes/constants';
import { selectAccessToken } from './redux/reducers';

function App() {
  const accessToken = useAppSelector(selectAccessToken);
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
      <Routes />
      <NotificationContainer />
    </>
  );
}

export default App;
