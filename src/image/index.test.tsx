import { fireEvent, render, screen } from "@testing-library/react";
import Image from "./image";
import React from "react";

describe("Image", () => {
  test("renders learn react link", () => {
    render(<Image>learn react</Image>);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  });

  test("renders support click", () => {
    const onClick = jest.fn();
    render(
      <Image type="primary" onClick={onClick}>
        click me
      </Image>
    );
    const linkElement = screen.getByText(/click me/i);
    fireEvent.click(linkElement);
    expect(onClick).toBeCalled();
  });
});
