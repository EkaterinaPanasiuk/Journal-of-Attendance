import { render, screen, fireEvent } from "@testing-library/react";
import { Hlink } from "./Hlink";

describe("Hlink", () => {
  test("renders a link with href and text", () => {
    render(<Hlink href="https://example.com" text="Example" />);
    const linkElement = screen.getByText(/Example/i);
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute("href", "https://example.com");
  });

  test("calls onClick function with href when clicked", () => {
    const mockOnClick = jest.fn();
    render(<Hlink href="https://example.com" text="Example" onClick={mockOnClick} />);
    const linkElement = screen.getByText(/Example/i);
    fireEvent.click(linkElement);
    fireEvent.click(linkElement);
    fireEvent.click(linkElement);
    expect(mockOnClick).toHaveBeenCalledTimes(3);
    expect(mockOnClick).toHaveBeenCalledWith("https://example.com");
  });

  test("applies different styles based on variant prop", () => {
    render(<Hlink href="https://example.com" text="Example" variant="primary" />);
    const linkElement = screen.getByText(/Example/i);
    expect(linkElement).toHaveClass("primary");
  });
});
