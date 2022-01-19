import React from 'react';
import {
  IBackground,
  IBorder,
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
    IBorder,
    IBorderRadius,
    IBoxShadow,
    IGradient,
    Omit<ILayout, 'display'>,
    IOther,
    IPosition,
    ISpace,
    ITypography {
  display?: Exclude<ILayout['display'], 'flex' | 'grid' | 'inline-flex' | 'inline-grid'>;
  testId?: string;
}
