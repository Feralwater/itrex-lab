import React, { memo } from 'react';
import { v1 } from 'uuid';
import { MemoSkeletonCard } from './SkeletonCard';
import { SkeletonBody, SkeletonCardContainer } from './Skeleton.styles';

export const SkeletonCards:React.VFC = () => (
  <SkeletonBody>
    {Array(12).fill(<MemoSkeletonCard />)
      .map((card) => <SkeletonCardContainer key={v1()}>{card}</SkeletonCardContainer>)}
  </SkeletonBody>
);

export const MemoSkeletonCards = memo(SkeletonCards);
