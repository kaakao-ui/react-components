import React from 'react';
import {
  IBackground,
  IBorderRadius,
  IBoxShadow,
  IFlex as IFlexProps,
  IGradient,
  ILayout,
  IOther,
  IPosition,
  ISpace,
  ITypography
} from '@kaakao-ui/styled-mixins';

export interface IFlex
  extends React.HTMLAttributes<HTMLDivElement>,
    IBackground,
    IBorderRadius,
    IBoxShadow,
    IFlexProps,
    IGradient,
    Omit<ILayout, 'display'>,
    IOther,
    IPosition,
    ISpace,
    ITypography {
  display?: Extract<ILayout['display'], 'flex' | 'inline-flex'>;
  testId?: string;
}
