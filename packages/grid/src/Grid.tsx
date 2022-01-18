import {
  Background,
  BorderRadius,
  BoxShadow,
  Grid as GridMixin,
  Gradient,
  Layout,
  Other,
  Position,
  Space,
  Typography
} from '@kaakao-ui/styled-mixins';
import styled, { css } from 'styled-components';
import { IGrid } from './Grid.types';

const Grid = styled.div.attrs<IGrid>(props => ({
  'data-testid': props.testId,
  'data-kaakao-id': 'grid',
  'data-kaakao-v': PACKAGE_VERSION
}))<IGrid>`
  ${props => css`
    ${Background(props)};
    ${BorderRadius(props)};
    ${BoxShadow(props)};
    ${Gradient(props)};
    ${GridMixin(props)};
    ${Layout({ ...props, display: props.display || 'flex' })};
    ${Other(props)};
    ${Position(props)};
    ${Space(props)};
    ${Typography(props)};
  `};
`;

export default Grid;
