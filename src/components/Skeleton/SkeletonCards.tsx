import React from 'react';
import { v1 } from 'uuid';
import { appointmentsPerPage } from 'modules/hooks/constants';
import { SkeletonCard } from './SkeletonCard';
import { SkeletonBody, SkeletonCardContainer } from './Skeleton.styles';

export const SkeletonCards:React.VFC = () => (
  <SkeletonBody>
    {[...Array(appointmentsPerPage)].map(() => <SkeletonCardContainer key={v1()}><SkeletonCard /></SkeletonCardContainer>)}
  </SkeletonBody>
);
