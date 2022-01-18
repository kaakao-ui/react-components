import React from 'react';
import {
  IBackground,
  IBorderRadius,
  IBoxShadow,
  IGrid as IGridProps,
  IGradient,
  ILayout,
  IOther,
  IPosition,
  ISpace,
  ITypography
} from '@kaakao-ui/styled-mixins';

export interface IGrid
  extends React.HTMLAttributes<HTMLDivElement>,
    IBackground,
    IBorderRadius,
    IBoxShadow,
    IGridProps,
    IGradient,
    Omit<ILayout, 'display'>,
    IOther,
    IPosition,
    ISpace,
    ITypography {
  display?: Extract<ILayout['display'], 'grid' | 'inline-grid'>;
  testId?: string;
}
