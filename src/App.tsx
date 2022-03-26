import React, { useEffect } from 'react';
import Loader from 'react-loader-spinner';
import styled from 'styled-components';
import { useAppSelector, useProfile } from 'hooks';
import { NotificationContainer } from 'components';
import { selectAccessToken } from 'redux/reducers';
import { colors } from 'components/CommonStyles';
import { AppRouter } from 'routes';

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
      {roleName
        ? <AppRouter />
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
