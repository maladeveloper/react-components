/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { forwardRef, HTMLAttributes } from 'react';
import { StyledTimelineContent, StyledCircleStrokeIcon, StyledSeparator } from '../../../styled';
import { useTimelineItemContext } from '../../../utils';

export const Content = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>((props, ref) => {
  const { icon, surfaceColor } = useTimelineItemContext();

  return (
    <>
      <StyledSeparator surfaceColor={surfaceColor}>
        {icon || <StyledCircleStrokeIcon />}
      </StyledSeparator>
      <StyledTimelineContent ref={ref} {...props} />
    </>
  );
});

Content.displayName = 'Content';