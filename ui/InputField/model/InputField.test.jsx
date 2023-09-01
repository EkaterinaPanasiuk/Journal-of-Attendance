import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { InputField } from "../ui/InputField";

describe("InputPassword", () => {
  test("renders input with label and error", () => {
    render(
      <InputField
        label="Name"
        error="This field is required"
        placeholder="Enter your name"
        value=""
        onChange={() => {}}
        data-testid="inputName"
      />,
    );

    expect(screen.getByText("Name")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Enter your name")).toBeInTheDocument();
    expect(screen.getByText("This field is required")).toBeInTheDocument();
    expect(screen.getByTestId("inputName")).toBeInTheDocument();
  });

  test("renders input without error", () => {
    render(<InputField type="password" label="Password" value="" onChange={() => {}} />);

    const nextElement = screen.queryByTestId("errorMessage");
    expect(nextElement).not.toBeInTheDocument();
  });

  test("calls onChange handler when typing in input", () => {
    const handleChange = jest.fn();

    render(<InputField label="Login" value="" onChange={handleChange} />);

    const input = screen.getByRole("textbox");

    userEvent.type(input, "qwerty123");

    expect(handleChange).toHaveBeenCalledTimes(9);
  });

  test("toggles input type between password and text when clicking on showPass_btn button", () => {
    render(<InputField type="password" label="Password" value="qwerty123" onChange={() => {}} data-testid="inputPassword" />);

    const input = screen.getByTestId("inputPassword");

    const button = screen.getByRole("button");

    expect(input).toHaveAttribute("type", "password");

    fireEvent.click(button);

    expect(input).toHaveAttribute("type", "text");

    fireEvent.click(button);

    expect(input).toHaveAttribute("type", "password");
  });

  test("binds ref to input element", () => {
    const ref = React.createRef();

    render(<InputField label="Address" value="" onChange={() => {}} ref={ref} />);

    const input = screen.getByRole("textbox");

    expect(ref.current).toBe(input);
  });
});
