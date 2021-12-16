import React, { useEffect } from 'react';
import Loader from 'react-loader-spinner';
import styled from 'styled-components';
import Routes from './routes/Routes';
import { profile } from './redux/actions';
import { useAppDispatch, useAppSelector } from './hooks';
import { colors, NotificationContainer } from './components';
import { ROLES } from './routes/constants';
import { selectAccessToken, selectProfile } from './redux/reducers';

export const AppLoaderContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const App:React.VFC = () => {
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
        : (
          <AppLoaderContainer>
            <Loader
              type="MutatingDots"
              color={colors.cornflower_blue}
              secondaryColor={colors.radical_red}
              timeout={5000}
              height={300}
              width={300}
            />
          </AppLoaderContainer>
        )}
      <NotificationContainer />
    </>
  );
};

export default App;
