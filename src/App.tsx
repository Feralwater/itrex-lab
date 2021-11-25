import React, { useEffect } from 'react';
import Routes from './routes/Routes';
import { useAppDispatch } from './hooks';
import profile from './redux/actions/profile.actions';

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(profile.me({
      first_name: '',
      id: '',
      last_name: '',
      photo: '',
      role_name: '',
    }));
  }, []);

  return (
    <Routes />
  );
}

export default App;
