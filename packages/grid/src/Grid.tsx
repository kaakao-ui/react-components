import {
  Background,
  Border,
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
    ${Border(props)};
    ${BorderRadius(props)};
    ${BoxShadow(props)};
    ${Gradient(props)};
    ${GridMixin(props)};
    ${Layout({ ...props, display: props.display || 'grid' })};
    ${Other(props)};
    ${Position(props)};
    ${Space(props)};
    ${Typography(props)};
  `};
`;

export default Grid;
