import React from 'react';
import '@testing-library/jest-dom';

import Text from './Text';
import { render, screen } from '../../../utils/test-utils';

describe('<Text />', () => {
  test('Renders with correct testId', () => {
    const testId = 'text-test-id';
    render(<Text testId={testId}>Kaakao UI</Text>);
    screen.getByTestId(testId);
  });
});
