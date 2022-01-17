import React from 'react';
import { ISpace } from '@kaakao-ui/styled-mixins';

import { TestId } from 'packages/types/testId';

export interface IBox extends TestId, React.HTMLAttributes<HTMLDivElement>, ISpace {}
