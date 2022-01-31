/* eslint-disable import/export */
import React, { FC, ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

const TestsWrapper: FC = ({ children }) => {
  return (
    <ThemeProvider
      theme={{
        breakpoints: ['320px', '800px', '1200px'],
        space: { 0: '0', 0.5: '4px', 1: '8px', 1.5: '12px', 2: '16px' }
      }}
    >
      {/* TODO: Create full default theme */}
      {children}
    </ThemeProvider>
  );
};

const testsRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) =>
  render(ui, { wrapper: TestsWrapper, ...options });

export * from '@testing-library/react';
export { testsRender as render };
