import Loader from 'react-loader-spinner';
import React from 'react';
import { Button } from '../../components/Button';
import { colors } from '../../components/CommonStyles';
import { Status } from '../../redux/reducers/reducers.types';
import { MakeAppointmentButtonContainer } from './MakeAppointment.styles';
import { FETCH_STATUS } from '../../redux/reducers/constants';

export interface SubmitOrLoaderProps {
  status: Status;
  isValid: boolean;
  dirty: boolean;
  pickedTime: boolean;
  disable: boolean;
}

export const SubmitOrLoader: React.FC<SubmitOrLoaderProps> = ({
  status,
  isValid,
  dirty,
  pickedTime,
  children,
  disable,
}) => (
  <div>
    {
      status !== FETCH_STATUS.LOADING
        ? (
          <MakeAppointmentButtonContainer>
            <Button
              type="submit"
              disabled={!(isValid && dirty && pickedTime && disable)}
              size="large"
              icon="default"
              variant="primary"
            >
              {children}
            </Button>
          </MakeAppointmentButtonContainer>
        )
        : (
          <MakeAppointmentButtonContainer>
            <Loader
              type="MutatingDots"
              color={colors.cornflower_blue}
              secondaryColor={colors.radical_red}
              timeout={5000}
              width={120}
            />
          </MakeAppointmentButtonContainer>
        )
    }
  </div>
);
