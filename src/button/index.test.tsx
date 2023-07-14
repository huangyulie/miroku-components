import { fireEvent, render, screen } from "@testing-library/react";
import Button from "./index";

describe("Button", () => {
  test("renders learn react link", () => {
    render(<Button>learn react</Button>);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  });

  test("renders support click", () => {
    const onClick = jest.fn();
    render(
      <Button type="primary" onClick={onClick}>
        click me
      </Button>
    );
    const linkElement = screen.getByText(/click me/i);
    fireEvent.click(linkElement);
    expect(onClick).toBeCalled();
  });

  test("renders support blur", () => {
    const onBlur = jest.fn();
    render(
      <Button type="primary" onBlur={onBlur}>
        blur
      </Button>
    );
    const linkElement = screen.getByText(/blur/i);
    fireEvent.blur(linkElement);
    expect(onBlur).toBeCalled();
  });

  test("renders support focus", () => {
    const onFocus = jest.fn();
    render(
      <Button type="primary" onFocus={onFocus}>
        blur
      </Button>
    );
    const linkElement = screen.getByText(/blur/i);
    fireEvent.focus(linkElement);
    expect(onFocus).toBeCalled();
  });
});
