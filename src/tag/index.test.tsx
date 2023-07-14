import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Tag from "./index";

describe("Tag", () => {
  test("renders learn react link", () => {
    render(<Tag>learn react</Tag>);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  });

  test("renders support click", () => {
    const onClick = jest.fn();
    render(<Tag onClick={onClick}>click me</Tag>);
    const linkElement = screen.getByText(/click me/i);
    fireEvent.click(linkElement);
    expect(onClick).toBeCalled();
  });
});
