import React from 'react';
import Loader from 'react-loader-spinner';
import { CancelLink, EditButtons } from './Profile.styles';
import { Button, ButtonWithLoaderProps, colors } from '../../components';
import { PATH } from '../../routes/constants';
import pagesDictionary from '../dictionary/pagesDictionary';

export const ProfileButtonsBlock: React.VFC<ButtonWithLoaderProps> = ({
  status,
  isValid,
  dirty,
}) => (
  <EditButtons>
    <CancelLink to={PATH.PROFILE}>
      <Button
        type="button"
        icon="left"
        size="large"
        variant="secondary"
        iconUrl="/svg/close-icon.svg"
        isBorder
      >
        {pagesDictionary.resolutionModal.cancelButtonText}
      </Button>
    </CancelLink>
    {
      status !== 'loading'
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
