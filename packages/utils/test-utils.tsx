import React, { FC, ReactElement } from "react";
import { render, RenderOptions } from "@testing-library/react";

const TestsWrapper: FC = ({ children }) => {
  return <>{children}</>;
};

const testsRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: TestsWrapper, ...options });

export * from "@testing-library/react";
export { testsRender as render };
