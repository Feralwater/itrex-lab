import React from 'react';
import { Error, ErrorMessage, ErrorNumber } from './Error404.styles';
import dictionary from '../../dictionary/dictionary';

const Error404:React.VFC = () => (
  <Error>
    <ErrorNumber>{dictionary.errorPage.errorNumber}</ErrorNumber>
    <ErrorMessage>{dictionary.errorPage.errorMessage}</ErrorMessage>
  </Error>
);

export default Error404;