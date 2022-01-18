import React from 'react';
import '@testing-library/jest-dom';

import Flex from './Flex';
import { render, screen } from '../../utils/test-utils';

describe('<Flex />', () => {
  test('Renders with correct testId', () => {
    const testId = 'flex-test-id';
    render(<Flex testId={testId}>Kaakao UI</Flex>);
    screen.getByTestId(testId);
  });
});
