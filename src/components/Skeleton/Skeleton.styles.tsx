import styled from 'styled-components';
import { colors } from '../CommonStyles';

export const SkeletonCardContainer = styled.div`
  width: calc(25% - 29px);
  height: 264px;
  border-radius: 12px;
  background-color: ${colors.white};
`;

export const SkeletonCardHeader = styled.div`
  border-bottom: 1px solid ${colors.link_water['050']};
  padding: 28px 32px 24px 32px;
  display: flex;
  gap: 16px;
`;

export const SkeletonImageWrapper = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 100%;
  background-color: ${colors.alabaster};
`;

export const SkeletonInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const SkeletonBodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 24px 32px 40px 32px;
`;

export const SkeletonBody = styled.div`
  display: flex;
  gap: 25px 24px;
  flex-wrap: wrap;
`;
