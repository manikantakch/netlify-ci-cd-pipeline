import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Badge from ".";


// Mock Icon Component
const MockIcon = () => <svg data-testid="mock-icon" />;

describe("Badge Component", () => {
  test("renders correctly with default props", () => {
    render(<Badge text="Default Badge" />);
    // const badge = screen.getByText("Default Badge");
    expect(badge).toBeInTheDocument();
    expect(badge).toHaveClass("bg-blue-500 text-white text-sm px-3 py-1.5");
  });

  test("renders with different variants", () => {
    render(<Badge text="Success" variant="success" />);
    expect(screen.getByText("Success")).toHaveClass("bg-green-500 text-white");

    render(<Badge text="Danger" variant="danger" />);
    expect(screen.getByText("Danger")).toHaveClass("bg-red-500 text-white");
  });

  test("renders with different sizes", () => {
    render(<Badge text="Small" size="small" />);
    expect(screen.getByText("Small")).toHaveClass("text-xs px-2 py-1");

    render(<Badge text="Large" size="large" />);
    expect(screen.getByText("Large")).toHaveClass("text-lg px-4 py-2");
  });

  test("renders with rounded and pill styles", () => {
    render(<Badge text="Rounded" rounded />);
    expect(screen.getByText("Rounded")).toHaveClass("rounded-md");

    render(<Badge text="Pill" pill />);
    expect(screen.getByText("Pill")).toHaveClass("rounded-full");
  });

  test("renders with an icon", () => {
    render(<Badge text="With Icon" icon={MockIcon} />);
    expect(screen.getByTestId("mock-icon")).toBeInTheDocument();
  });

  test("calls onClick when clicked", () => {
    const handleClick = jest.fn();
    render(<Badge text="Clickable" onClick={handleClick} />);
    fireEvent.click(screen.getByText("Clickable"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test("does not have cursor-pointer when onClick is not provided", () => {
    render(<Badge text="No Click" />);
    expect(screen.getByText("No Click")).not.toHaveClass("cursor-pointer");
  });

  test("has cursor-pointer when onClick is provided", () => {
    render(<Badge text="Clickable" onClick={() => {}} />);
    expect(screen.getByText("Clickable")).toHaveClass("cursor-pointer");
  });
});
