import React from 'react';
import styled from 'styled-components';

import { BasicButton } from '../';

const PrimaryButton = styled(BasicButton)`
  color: ${props => props.theme.colorPrimary};
  border: 2px solid;
  border-color: ${props => props.theme.colorPrimary};
  border-radius: 100px;
  
  &:hover {
    color: white;
    background-color: ${props => props.theme.colorPrimary};
  }

  &:focus {
    background-color: rgba(255, 255, 255, 0.2);
  }
`

export { PrimaryButton };