import { fireEvent, render, screen } from "@testing-library/react";
import Table from "./table";
import React from "react";

describe("Table", () => {
  test("renders learn react link", () => {
    render(<Table>learn react</Table>);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  });

  test("renders support click", () => {
    const onClick = jest.fn();
    render(
      <Table type="primary" onClick={onClick}>
        click me
      </Table>
    );
    const linkElement = screen.getByText(/click me/i);
    fireEvent.click(linkElement);
    expect(onClick).toBeCalled();
  });
});
