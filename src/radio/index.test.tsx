import { fireEvent, render, screen } from "@testing-library/react";
import Radio from "./radio";
import React from "react";

describe("Radio", () => {
  test("renders learn react link", () => {
    render(<Radio>learn react</Radio>);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  });

  test("renders support click", () => {
    const onClick = jest.fn();
    render(
      <Radio type="primary" onClick={onClick}>
        click me
      </Radio>
    );
    const linkElement = screen.getByText(/click me/i);
    fireEvent.click(linkElement);
    expect(onClick).toBeCalled();
  });
});
