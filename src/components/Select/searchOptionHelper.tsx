import Highlighter from 'react-highlight-words';
import React from 'react';
import { InputValueType, LabelType } from './Select.types';
import { searchOptionHelperStyles } from './searchOptionHelper.styles';

function searchOptionHelper({ label }:LabelType, { inputValue }:InputValueType) {
  return (
    <Highlighter
      highlightStyle={searchOptionHelperStyles}
      searchWords={[inputValue]}
      textToHighlight={label}
    />
  );
}

export default searchOptionHelper;
