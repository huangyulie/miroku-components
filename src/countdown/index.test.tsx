import { fireEvent, render, screen } from "@testing-library/react";
import Countdown from "./countdown";
import React from "react";

describe("Countdown", () => {
  test("renders learn react link", () => {
    render(<Countdown>learn react</Countdown>);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  });

  test("renders support click", () => {
    const onClick = jest.fn();
    render(
      <Countdown type="primary" onClick={onClick}>
        click me
      </Countdown>
    );
    const linkElement = screen.getByText(/click me/i);
    fireEvent.click(linkElement);
    expect(onClick).toBeCalled();
  });
});
