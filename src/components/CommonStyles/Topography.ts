import styled from 'styled-components';
import { colors } from './theme';

export const H1 = styled.h1`
  font-weight: 600;
  font-size: 2.4rem;
  line-height: 110%;
  display: flex;
  align-items: center;
  color: ${colors.dark_jungle_green};
  
  @media only screen and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 3),
  (max-device-width: 767px) {
    font-size: 2rem;
  }
`;

export const H2 = styled.h2`
  font-weight: 600;
  font-size: 2rem;
  line-height: 120%;
  display: flex;
  align-items: center;
  color: ${colors.dark_jungle_green};
`;

export const H3 = styled.h3`
  font-weight: 600;
  font-size: 1.7rem;
  line-height: 130%;
  display: flex;
  align-items: center;
  color: ${colors.dark_jungle_green};
`;

export const H4 = styled.h4`
  font-weight: 600;
  font-size: 1.7rem;
  line-height: 140%;
  color: ${colors.dark_jungle_green};
  margin: 0;
  @media only screen and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 3),
  (max-device-width: 767px) {
    font-weight: 400;
  }
`;

export const H5 = styled.h5`
  font-weight: 400;
  font-size: 1.7rem;
  line-height: 140%;
  display: flex;
  align-items: center;
  color: ${colors.dark_jungle_green};
`;

export const H6 = styled.h6`
  font-weight: 600;
  font-size: 1.5rem;
  line-height: 130%;
  color: ${colors.dark_jungle_green};
`;

export const Title = styled.div`
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 140%;
  display: flex;
  align-items: center;
  color: ${colors.dark_jungle_green};
`;

export const SubTitle = styled.div`
  font-weight: 500;
  font-size: 1.3rem;
  line-height: 130%;
  display: flex;
  align-items: center;
  color: ${colors.dark_jungle_green};
`;

export const BoldSubTitle = styled.div`
  font-weight: 600; 
  font-size: 17px;
  line-height: 140%;
  color: ${colors.dark_jungle_green};
  margin: 0;
`;
