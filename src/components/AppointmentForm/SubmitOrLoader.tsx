import Loader from 'react-loader-spinner';
import React from 'react';
import { Button } from '../Button';
import { colors } from '../CommonStyles';
import { Status } from '../../redux/reducers/reducers.types';
import { MakeAppointmentButtonContainer } from './MakeAppointment.styles';

export interface SubmitOrLoaderProps{
  status: Status
  isValid: boolean
  dirty: boolean
}

export const SubmitOrLoader:React.FC<SubmitOrLoaderProps> = ({
  status, isValid, dirty, children,
}) => (
  <div>
    {
      status !== 'loading'
        ? (
          <MakeAppointmentButtonContainer>
            <Button
              type="submit"
              disabled={!(isValid && dirty)}
              size="large"
              icon="default"
              variant="primary"
            >
              {children}
            </Button>
          </MakeAppointmentButtonContainer>
        )
        : (
          <Loader
            type="MutatingDots"
            color={colors.cornflower_blue}
            secondaryColor={colors.radical_red}
            timeout={5000}
            height={100}
            width={100}
          />
        )
    }
  </div>
);
