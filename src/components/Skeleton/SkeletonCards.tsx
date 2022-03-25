import React from 'react';
import { v1 } from 'uuid';
import { appointmentsPerPage } from 'modules/hooks/constants';
import { SkeletonCard } from './SkeletonCard';

export const SkeletonCards:React.VFC = () => (
  <>
    {[...Array(appointmentsPerPage)].map(() => <SkeletonCard key={v1()} />)}
  </>
);
