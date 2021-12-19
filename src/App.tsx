import React, { useEffect } from 'react';
import Loader from 'react-loader-spinner';
import styled from 'styled-components';
import Routes from './routes/Routes';
import { useAppSelector, useProfile } from './hooks';
import { colors, NotificationContainer } from './components';
import { selectAccessToken } from './redux/reducers';

export const AppLoaderContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const App:React.VFC = () => {
  const accessToken = useAppSelector(selectAccessToken);

  const { initProfile, roleName } = useProfile();
  useEffect(() => {
    initProfile();
  }, [accessToken]);

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
