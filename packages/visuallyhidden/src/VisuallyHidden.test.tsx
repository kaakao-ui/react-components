import React from "react";
import "@testing-library/jest-dom";

import VisuallyHidden from "./VisuallyHidden";
import { render, screen } from "../../utils/test-utils";

describe("<VisuallyHidden />", () => {
  test("Renders with correct text", () => {
    const text = "Link opens in a new window.";
    render(<VisuallyHidden>{text}</VisuallyHidden>);
    expect(screen.getByText(text)).toBeInTheDocument();
  });

  test("Renders with correct testId", () => {
    const testId = "hidden-text";
    render(<VisuallyHidden testId={testId}>Kaakao UI</VisuallyHidden>);
    screen.getByTestId(testId);
  });
});
