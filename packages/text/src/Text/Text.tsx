import { Layout, Other, Space, Typography } from '@kaakao-ui/styled-mixins';
import styled, { css } from 'styled-components';

import { IText } from './Text.types';
import TruncateLines from '../utils/trimLines';

const Text = styled.span.attrs<IText>(props => ({
  'data-testid': props.testId,
  'data-kaakao-id': 'text',
  'data-kaakao-v': PACKAGE_VERSION
}))<IText>`
  ${props => css`
    ${Layout({ ...props, maxW: props.truncate || props.maxW })};
    ${Other(props)};
    ${Space(props)};
    ${Typography(props)};

    ${props.truncate &&
    css`
      display: block;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    `};

    ${props.numLines && TruncateLines(props.numLines)};
  `};
`;

export default Text;
