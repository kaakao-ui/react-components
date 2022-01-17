import { Space } from '@kaakao-ui/styled-mixins';
import styled from 'styled-components';
import { IBox } from './Box.types';

const Box = styled.div.attrs<IBox>(props => ({
  'data-testid': props.testId,
  'data-kaakao-id': 'box',
  'data-kaakao-v': PACKAGE_VERSION
}))<IBox>`
  ${props => Space(props)}
`;

export default Box;
