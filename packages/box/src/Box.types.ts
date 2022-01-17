import React from 'react';
import { ISpace } from '@kaakao-ui/styled-mixins';

export interface IBox extends React.HTMLAttributes<HTMLDivElement>, ISpace {
  testId?: string;
}
