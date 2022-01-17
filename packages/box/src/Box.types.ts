import React from 'react';
import { IBorderRadius, IPosition, ISpace } from '@kaakao-ui/styled-mixins';

export interface IBox
  extends React.HTMLAttributes<HTMLDivElement>,
    IBorderRadius,
    IPosition,
    ISpace {
  testId?: string;
}
