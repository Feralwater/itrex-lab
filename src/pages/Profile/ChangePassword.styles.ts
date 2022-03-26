import styled from 'styled-components';
import { Form } from 'formik';

export const ChangePasswordForm = styled(Form)`
  display: flex;
  flex-direction: column;
`;

export const ChangePasswordFormBody = styled.div`
  padding: 40px;
  @media (max-width: 370px) {
    padding: 20px;
  }
`;
