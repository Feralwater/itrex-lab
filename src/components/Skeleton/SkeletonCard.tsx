import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import {
  SkeletonBodyWrapper, SkeletonCardHeader, SkeletonImageWrapper, SkeletonInfoWrapper,
} from './Skeleton.styles';
import { colors } from '../CommonStyles';

export const SkeletonCard:React.VFC = () => (
  <>
    <SkeletonCardHeader>
      <SkeletonTheme baseColor={`${colors.alabaster}`} highlightColor={`${colors.link_water['016']}`}>
        <Skeleton wrapper={SkeletonImageWrapper} height={48} width={48} circle />
      </SkeletonTheme>
      <SkeletonInfoWrapper>
        <SkeletonTheme baseColor={`${colors.alabaster}`} highlightColor={`${colors.link_water['016']}`}>
          <Skeleton width={160} />
          <Skeleton width={238} />
        </SkeletonTheme>
      </SkeletonInfoWrapper>
    </SkeletonCardHeader>
    <SkeletonBodyWrapper>
      <SkeletonTheme baseColor={`${colors.alabaster}`} highlightColor={`${colors.link_water['016']}`}>
        <Skeleton width={342} height={24} />
        <Skeleton width={342} height={43} />
      </SkeletonTheme>
    </SkeletonBodyWrapper>
  </>
);
