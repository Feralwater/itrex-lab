import React from 'react';
import { SkeletonCard } from './SkeletonCard';
import { SkeletonBody, SkeletonCardContainer } from './Skeleton.styles';

export const SkeletonCards:React.VFC = () => (
  <SkeletonBody>
    {Array(8).fill(<SkeletonCard />).map((card) => <SkeletonCardContainer key={Math.floor(Math.random() * 10_000)}>{card}</SkeletonCardContainer>)}
  </SkeletonBody>
);
