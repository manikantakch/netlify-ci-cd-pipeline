import { render, screen } from "@testing-library/react";
import NlearnProgress from ".";
import CircularProgressInsideData from "@/components/molecules/CircularProgressInsideData";
import React from "react";

jest.mock("@/components/molecules/CircularProgressInsideData", () => {
  return jest.fn(() => <div data-testid="circular-progress"></div>);
});

const data = [
  { title: "Videos", completed: 10, total: 50 },
  { title: "Practice", completed: 25, total: 50 },
  { title: "Resources", completed: 75, total: 75 },
];

describe("NlearnProgress Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders the title correctly", () => {
    render(<NlearnProgress data={data} />);
    expect(screen.getByText("nlearn progress")).toBeInTheDocument();
  });

  it(`renders ${data.length} CircularProgressInsideData components`, () => {
    render(<NlearnProgress data={data} />);
    const progressComponents = screen.getAllByTestId("circular-progress");
    expect(progressComponents.length).toBe(data.length);
  });
});
