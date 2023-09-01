import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Button } from "./Button";
import classes from "./styles.module.scss";

describe("Button", () => {
  test("renders with default props", () => {
    render(<Button>Default</Button>);

    const button = screen.getByText("Default");

    expect(button).toHaveAttribute("type", "button");

    expect(button).toHaveClass(classes.btn);
  });

  test("renders with type submit", () => {
    render(<Button type="submit">Submit</Button>);

    const button = screen.getByText("Submit");

    expect(button).toHaveAttribute("type", "submit");
  });

  test("renders with size large", () => {
    render(<Button size="large">Large</Button>);

    const button = screen.getByText("Large");

    expect(button).toHaveClass(classes.large);
  });

  test("renders with variant primary", () => {
    render(<Button variant="warning">Warning</Button>);

    const button = screen.getByText("Warning");

    expect(button).toHaveClass(classes.warning);
  });

  test("calls onClick handler when clicking on button", () => {
    const handleClick = jest.fn();

    render(<Button onClick={handleClick}>Click me</Button>);

    const button = screen.getByRole("button");

    userEvent.click(button);
    userEvent.click(button);
    userEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(3);
  });
});
