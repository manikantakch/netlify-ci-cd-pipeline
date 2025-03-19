import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Button from ".";



describe("Button Component", () => {
  it("renders correctly with default props", () => {
    render(<Button>Click Me</Button>);
    const button = screen.getByRole("button");
    expect(button).toHaveTextContent("Click Me");
    expect(button).toHaveClass("bg-blue-500");
  });

  it("renders different variants correctly", () => {
    render(<Button variant="danger">Delete</Button>);
    const button = screen.getByRole("button");
    expect(button).toHaveClass("bg-red-500");
  });

  it("applies size classes correctly", () => {
    render(<Button size="lg">Large Button</Button>);
    const button = screen.getByRole("button");
    expect(button).toHaveClass("px-6 py-3 text-lg");
  });

  it("handles disabled state", () => {
    render(<Button disabled>Disabled</Button>);
    const button = screen.getByRole("button");
    expect(button).toBeDisabled();
    expect(button).toHaveClass("opacity-50 cursor-not-allowed");
  });

  it("handles loading state", () => {
    render(<Button loading>Submit</Button>);
    const button = screen.getByRole("button");
    expect(button).toHaveTextContent("Loading...");
  });

  it("supports full width mode", () => {
    render(<Button fullWidth>Full Width</Button>);
    const button = screen.getByRole("button");
    expect(button).toHaveClass("w-full");
  });

  it("triggers onClick event", () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click</Button>);
    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("does not trigger onClick when disabled", () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick} disabled>Click</Button>);
    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(handleClick).not.toHaveBeenCalled();
  });

  it("does not trigger onClick when loading", () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick} loading>Click</Button>);
    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(handleClick).not.toHaveBeenCalled();
  });
});