import Loader from 'react-loader-spinner';
import React from 'react';
import { ButtonWrapper } from './AuthForm.styles';
import { Button } from '../Button';
import { colors } from '../CommonStyles';
import { Status } from '../../redux/reducers/reducers.types';
import { FETCH_STATUS } from '../../redux/reducers/constants';

export interface ButtonWithLoaderProps{
  status: Status
  isValid: boolean
  dirty: boolean
}

export const ButtonWithLoader:React.FC<ButtonWithLoaderProps> = ({
  status, isValid, dirty, children,
}) => (
  <div>
    {
        status !== FETCH_STATUS.LOADING
          ? (
            <ButtonWrapper>
              <Button
                type="submit"
                disabled={!(isValid && dirty)}
                size="large"
                icon="right"
                variant="primary"
              >
                {children}
              </Button>
            </ButtonWrapper>
          )
          : (
            <Loader
              type="MutatingDots"
              color={colors.cornflower_blue}
              secondaryColor={colors.radical_red}
              timeout={5000}
              height={150}
              width={150}
            />
          )
      }
  </div>
);
