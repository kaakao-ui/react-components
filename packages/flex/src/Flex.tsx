import {
  Background,
  Border,
  BorderRadius,
  BoxShadow,
  Flex as FlexMixin,
  Gradient,
  Layout,
  Other,
  Position,
  Space,
  Typography
} from '@kaakao-ui/styled-mixins';
import styled, { css } from 'styled-components';
import { IFlex } from './Flex.types';

const Flex = styled.div.attrs<IFlex>(props => ({
  'data-testid': props.testId,
  'data-kaakao-id': 'flex',
  'data-kaakao-v': PACKAGE_VERSION
}))<IFlex>`
  ${props => css`
    ${Background(props)};
    ${Border(props)};
    ${BorderRadius(props)};
    ${BoxShadow(props)};
    ${FlexMixin({ ...props, flexWrap: props.flexWrap || 'wrap' })};
    ${Gradient(props)};
    ${Layout({ ...props, display: props.display || 'flex' })};
    ${Other(props)};
    ${Position(props)};
    ${Space(props)};
    ${Typography(props)};
  `};
`;

export default Flex;
