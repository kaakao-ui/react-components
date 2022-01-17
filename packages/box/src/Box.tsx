import { BorderRadius, Position, Space } from '@kaakao-ui/styled-mixins';
import styled, { css } from 'styled-components';
import { IBox } from './Box.types';

const Box = styled.div.attrs<IBox>(props => ({
  'data-testid': props.testId,
  'data-kaakao-id': 'box',
  'data-kaakao-v': PACKAGE_VERSION
}))<IBox>`
  ${props => css`
    ${BorderRadius(props)}
    ${Position(props)}
    ${Space(props)}
  `};
`;

export default Box;
