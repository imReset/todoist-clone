import React from "react";
import { render, cleanup } from "@testing-library/react";
import { App } from "../App";

beforeEach(cleanup); // test the app

describe("<App />", () => {
  it("renders app", () => {
    const { queryByTestId } = render(<App />);
    expect(queryByTestId("application")).toBeTruthy();
    expect(
      queryByTestId("application").classList.contains("darkmode")
    ).toBeFalsy();
  });

  it("renders app with dark mode", () => {
    const { queryByTestId } = render(<App darkModeDefault />);
    expect(queryByTestId("application")).toBeTruthy();
    expect(
      queryByTestId("application").classList.contains("darkmode")
    ).toBeTruthy();
  });
});
