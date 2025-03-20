// Chip.test.js
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Chip from ".";



describe("Chip Component", () => {
  test("renders the chip with label", () => {
    render(<Chip label="Test Chip" />);
   const chip = screen.getByText("Test Chip");
    expect(chip).toBeInTheDocument();
  });

  test("renders delete button when onDelete prop is provided", () => {
    render(<Chip label="Test Chip" onDelete={() => {}} />);
    expect(screen.getByLabelText("delete-chip")).toBeInTheDocument();
  });

  test("calls onDelete function when delete button is clicked", () => {
    const onDeleteMock = jest.fn();
    render(<Chip label="Test Chip" onDelete={onDeleteMock} />);
    fireEvent.click(screen.getByLabelText("delete-chip"));
    expect(onDeleteMock).toHaveBeenCalledTimes(1);
  });
});
