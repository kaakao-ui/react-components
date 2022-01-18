import React from 'react';
import '@testing-library/jest-dom';

import Grid from './Grid';
import { render, screen } from '../../utils/test-utils';

describe('<Grid />', () => {
  test('Renders with correct testId', () => {
    const testId = 'grid-test-id';
    render(
      <Grid gridGap={2} testId={testId}>
        Kaakao UI
      </Grid>
    );
    screen.getByTestId(testId);
  });
});
