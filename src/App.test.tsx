import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("should render the default route", () => {
    render(<App />);

    expect(screen.getByTestId("app")).toBeInTheDocument();
  });
});
