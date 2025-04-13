import { render, screen, fireEvent } from "@testing-library/react";
import TopicPageTabSection from ".";
import { data, tabs } from "./helpers";

jest.mock("@/components/molecules/topic-card", () => () => (
  <div>Mock TopicTestCard</div>
));
jest.mock(
  "@/components/organisms/tabs/HorizontalTabsNavigation/DynamicTabs",
  () =>
    ({ tabs, onTabChange, activeIndex }) => (
      <div>
        {tabs.map((tab, index) => (
          <button key={index} onClick={() => onTabChange(index)}>
            {tab.label}
          </button>
        ))}
        <div>Active Tab: {activeIndex}</div>
      </div>
    )
);

describe("TopicPageTabSection", () => {
  test("renders the component with default active tab", () => {
    render(<TopicPageTabSection />);
    expect(screen.getByText("Active Tab: 0")).toBeInTheDocument();
  });

  test("changes active tab on tab click", () => {
    render(<TopicPageTabSection />);
    const secondTab = screen.getByText(tabs[1].label);
    fireEvent.click(secondTab);
    expect(screen.getByText("Active Tab: 1")).toBeInTheDocument();
  });

  test("renders topic cards for the selected tab", () => {
    render(<TopicPageTabSection />);
    const topicCards = screen.getAllByText("Mock TopicTestCard");
    expect(topicCards.length).toBeGreaterThan(0);
  });
});
