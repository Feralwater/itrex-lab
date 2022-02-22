import React, { memo } from 'react';
import { v1 } from 'uuid';
import { SkeletonCard } from './SkeletonCard';
import { SkeletonBody, SkeletonCardContainer } from './Skeleton.styles';

export const SkeletonCards:React.VFC = memo(() => (
  <SkeletonBody>
    {Array(12).fill(<SkeletonCard />)
      .map((card) => <SkeletonCardContainer key={v1()}>{card}</SkeletonCardContainer>)}
  </SkeletonBody>
));
