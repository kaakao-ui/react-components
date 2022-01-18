import {
  Background,
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
import { IFlex } from './Flex.types';

const Flex = styled.div.attrs<IFlex>(props => ({
  'data-testid': props.testId,
  'data-kaakao-id': 'flex',
  'data-kaakao-v': PACKAGE_VERSION
}))<IFlex>`
  ${props => css`
    ${Background(props)};
    ${BorderRadius(props)};
    ${BoxShadow(props)};
    ${Gradient(props)};
    ${Layout({ ...props, display: props.display || 'flex' })};
    ${Other(props)};
    ${Position(props)};
    ${Space(props)};
    ${Typography(props)};
  `};
`;

export default Flex;
