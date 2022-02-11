import React from 'react';
import Loader from 'react-loader-spinner';
import { Button, ButtonWithLoaderProps } from 'components';
import { FETCH_STATUS } from 'redux/reducers/constants';
import { colors } from 'components/CommonStyles';
import { dictionary as pagesDictionary } from '../dictionary/pagesDictionary';
import { EditButtons } from './Profile.styles';

export const ProfileButtonsBlock: React.VFC<ButtonWithLoaderProps> = ({
  status,
  isValid,
  dirty,
  closeEditModeHandler,
}) => (
  <EditButtons>
    <Button
      type="button"
      icon="left"
      size="large"
      variant="secondary"
      iconUrl="/svg/close-icon.svg"
      isBorder
      onClick={closeEditModeHandler}
    >
      {pagesDictionary.resolutionModal.cancelButtonText}
    </Button>
    {
      status !== FETCH_STATUS.LOADING
        ? (
          <Button
            type="submit"
            icon="left"
            size="large"
            variant="primary"
            iconUrl="/svg/save-icon.svg"
            disabled={!(isValid && dirty)}
          >
            {pagesDictionary.resolutionModal.saveButtonText}
          </Button>
        )
        : (
          <Loader
            type="MutatingDots"
            color={colors.cornflower_blue}
            secondaryColor={colors.radical_red}
            timeout={5000}
          />
        )
    }
  </EditButtons>
);
