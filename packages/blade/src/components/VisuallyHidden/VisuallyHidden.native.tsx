import React from 'react';
import styled from 'styled-components/native';
import { screenReaderStyles } from './ScreenReaderStyles';
import type { VisuallyHiddenProps } from './types';
import { metaAttribute, MetaConstants } from '~utils';

const StyledVisuallyHidden = styled.View(screenReaderStyles);

export const VisuallyHidden = ({ children, testID }: VisuallyHiddenProps): JSX.Element => {
  return (
    <StyledVisuallyHidden {...metaAttribute({ name: MetaConstants.VisuallyHidden, testID })}>
      {children}
    </StyledVisuallyHidden>
  );
};
