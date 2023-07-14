import { fireEvent, render, screen } from "@testing-library/react";
import input from "./component";
import React from "react";

describe("input", () => {
  test("renders learn react link", () => {
    render(<input>learn react</input>);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  });

  test("renders support click", () => {
    const onClick = jest.fn();
    render(
      <input type="primary" onClick={onClick}>
        click me
      </input>
    );
    const linkElement = screen.getByText(/click me/i);
    fireEvent.click(linkElement);
    expect(onClick).toBeCalled();
  });
});
