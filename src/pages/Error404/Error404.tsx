import React from 'react';
import { Error, ErrorMessage, ErrorNumber } from './Error404.styles';
import { dictionary } from '../dictionary/pagesDictionary';

export const Error404:React.VFC = () => (
  <Error>
    <ErrorNumber />
    <ErrorMessage>{dictionary.errorPage.errorMessageFirstLine}</ErrorMessage>
    <ErrorMessage>{dictionary.errorPage.errorMessageSecondLine}</ErrorMessage>
  </Error>
);
