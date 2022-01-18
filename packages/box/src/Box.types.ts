import React from 'react';
import {
  IBackground,
  IBorderRadius,
  IBoxShadow,
  IGradient,
  ILayout,
  IOther,
  IPosition,
  ISpace,
  ITypography
} from '@kaakao-ui/styled-mixins';

export interface IBox
  extends React.HTMLAttributes<HTMLDivElement>,
    IBackground,
    IBorderRadius,
    IBoxShadow,
    IGradient,
    Omit<ILayout, 'flex' | 'grid' | 'inline-flex' | 'inline-grid'>,
    IOther,
    IPosition,
    ISpace,
    ITypography {
  testId?: string;
}
