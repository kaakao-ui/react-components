import React from 'react';
import { ILayout, IOther, ISpace, ITypography } from '@kaakao-ui/styled-mixins';

type TextTags =
  | 'abbr'
  | 'cite'
  | 'del'
  | 'em'
  | 'ins'
  | 'mark'
  | 'p'
  | 'span'
  | 'strong'
  | 'sub'
  | 'sup';

type TextWithoutNumLines = {
  as?: Pick<TextTags, 'sub' | 'sup'>;
  numLines?: never;
};

type TextWithNumLines = {
  as?: Exclude<TextTags, 'sub' | 'sup'>;
  numLines: number | number[];
};

export type IText = React.HTMLAttributes<HTMLSpanElement> &
  Omit<ILayout, 'display'> &
  IOther &
  ISpace &
  ITypography &
  (TextWithoutNumLines | TextWithNumLines) & {
    testId?: string;
    truncate?: string;
  };
