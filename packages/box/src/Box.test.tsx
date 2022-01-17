import React from 'react';
import '@testing-library/jest-dom';

import Box from './Box';
import { render, screen } from 'packages/utils/test-utils';

describe('<Box />', () => {
  test('Renders with correct testId', () => {
    const testId = 'box-test-id';
    render(<Box testId={testId}>Kaakao UI</Box>);
    screen.getByTestId(testId);
  });
});
