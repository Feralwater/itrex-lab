import styled from 'styled-components';
import { borders, colors } from '../CommonStyles';

export const SkeletonCardContainer = styled.div`
  min-height: 217px;
  border-radius: 12px;
  background-color: ${colors.white};
`;

export const SkeletonCardHeader = styled.div`
  border-bottom: ${borders.link_water05_border};
  padding: 24px 31px;
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
  padding: 15px 32px;
`;
