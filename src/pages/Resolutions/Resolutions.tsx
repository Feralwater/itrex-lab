import Loader from 'react-loader-spinner';
import React from 'react';
import { colors } from 'components/CommonStyles';
import { FETCH_STATUS } from 'redux/reducers/constants';
import { ResolutionsPaginate } from 'pages/Resolutions/ResolutionsPaginate';
import { ResolutionsTable } from 'pages/Resolutions/ResolutionsTable';
import { ResolutionsLoaderContainer } from './Resolutions.styles';
import { ResolutionsProps } from './Resolutions.types';

export const Resolutions:React.VFC<ResolutionsProps> = (
  { responseStatus, myResolutions },
) => (
  <>
    {responseStatus !== FETCH_STATUS.LOADING
      ? <ResolutionsTable myResolutions={myResolutions} />
      : (
        <ResolutionsLoaderContainer>
          <Loader
            type="MutatingDots"
            color={colors.cornflower_blue}
            secondaryColor={colors.radical_red}
            timeout={5000}
            height={150}
            width={150}
          />
        </ResolutionsLoaderContainer>
      )}
    {myResolutions.length > 0 && <ResolutionsPaginate />}
  </>
);
