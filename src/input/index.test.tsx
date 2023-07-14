import { fireEvent, render, screen } from "@testing-library/react";
import Input from "./input";
import React from "react";

describe("Input", () => {
  test("renders learn react link", () => {
    render(<Input>learn react</Input>);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  });

  test("renders support click", () => {
    const onClick = jest.fn();
    render(
      <Input type="primary" onClick={onClick}>
        click me
      </Input>
    );
    const linkElement = screen.getByText(/click me/i);
    fireEvent.click(linkElement);
    expect(onClick).toBeCalled();
  });
});
