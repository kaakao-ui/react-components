import {
  Background,
  Border,
  BorderRadius,
  BoxShadow,
  Gradient,
  Layout,
  Other,
  Position,
  Space,
  Typography
} from '@kaakao-ui/styled-mixins';
import styled, { css } from 'styled-components';
import { IBox } from './Box.types';

const Box = styled.div.attrs<IBox>(props => ({
  'data-testid': props.testId,
  'data-kaakao-id': 'box',
  'data-kaakao-v': PACKAGE_VERSION
}))<IBox>`
  ${props => css`
    ${Background(props)};
    ${Border(props)};
    ${BorderRadius(props)};
    ${BoxShadow(props)};
    ${Gradient(props)};
    ${Layout(props)};
    ${Other(props)};
    ${Position(props)};
    ${Space(props)};
    ${Typography(props)};
  `};
`;

export default Box;
