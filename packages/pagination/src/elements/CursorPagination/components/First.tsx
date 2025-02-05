/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { ButtonHTMLAttributes } from 'react';
import ChevronDoubleLeft from '@zendeskgarden/svg-icons/src/16/chevron-double-left-stroke.svg';
import { StyledIcon, StyledCursor } from '../../../styled';

export const First = React.forwardRef<HTMLButtonElement, ButtonHTMLAttributes<HTMLButtonElement>>(
  ({ children, ...other }, ref) => {
    return (
      <StyledCursor ref={ref} {...other}>
        <StyledIcon type="first">
          <ChevronDoubleLeft />
        </StyledIcon>
        <span>{children}</span>
      </StyledCursor>
    );
  }
);

First.displayName = 'First';
