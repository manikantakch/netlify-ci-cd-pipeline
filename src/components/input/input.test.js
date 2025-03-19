import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Input from ".";


describe("Input Component", () => {
  test("renders input with default props", () => {
    render(<Input />);
    const inputElement = screen.getByRole("textbox");
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute("type", "text");
    expect(inputElement).toHaveClass("border-gray-300");
  });

  test("renders with a placeholder", () => {
    render(<Input placeholder="Enter text" />);
    expect(screen.getByPlaceholderText("Enter text")).toBeInTheDocument();
  });

  test("renders different sizes", () => {
    const { rerender } = render(<Input size="sm" />);
    expect(screen.getByRole("textbox")).toHaveClass("p-2 text-sm");

    rerender(<Input size="md" />);
    expect(screen.getByRole("textbox")).toHaveClass("p-3 text-base");

    rerender(<Input size="lg" />);
    expect(screen.getByRole("textbox")).toHaveClass("p-4 text-lg");
  });

  test("supports controlled value", () => {
    const handleChange = jest.fn();
    render(<Input value="Test Value" onChange={handleChange} />);
    expect(screen.getByDisplayValue("Test Value")).toBeInTheDocument();
  });

  test("calls onChange when typing", () => {
    const handleChange = jest.fn();
    render(<Input onChange={handleChange} />);
    const inputElement = screen.getByRole("textbox");
    fireEvent.change(inputElement, { target: { value: "Hello" } });
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  test("renders disabled input", () => {
    render(<Input disabled />);
    const inputElement = screen.getByRole("textbox");
    expect(inputElement).toBeDisabled();
    expect(inputElement).toHaveClass("bg-gray-100 cursor-not-allowed");
  });

  test("renders read-only input", () => {
    render(<Input readOnly />);
    const inputElement = screen.getByRole("textbox");
    expect(inputElement).toHaveAttribute("readonly");
  });

  test("renders full-width input", () => {
    render(<Input fullWidth />);
    expect(screen.getByRole("textbox")).toHaveClass("w-full");
  });

  test("renders error state", () => {
    render(<Input error />);
    expect(screen.getByRole("textbox")).toHaveClass("border-red-500");
  });
});
