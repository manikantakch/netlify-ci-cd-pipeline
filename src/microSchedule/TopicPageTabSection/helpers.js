import {
  msPracticeIcon,
  msResourcesIcon,
  msVideosIcon,
} from "@/features/microSchedule/images/microschedule";

export const data = [
  {
    title: "Photosynthesis",
    status: "Pending",
    type: "Videos",
    percentage: 100,
  },
  { title: "card1", status: "Pending", type: "Videos", percentage: 0 },
  { title: "card2", status: "Pending", type: "Resources", percentage: 52 },
  { title: "card3", status: "Completed", type: "Videos", percentage: 46 },
  { title: "card4", status: "Completed", type: "Resources", percentage: 73 },
  { title: "card5", status: "Pending", type: "Videos", percentage: 10 },
  { title: "card6", status: "Pending", type: "Resources", percentage: 21 },
  { title: "card7", status: "Completed", type: "Videos", percentage: 26 },
  { title: "card8", status: "Completed", type: "Resources", percentage: 64 },
  { title: "card9", status: "Completed", type: "Practice", percentage: 39 },
  { title: "card10", status: "Completed", type: "Practice", percentage: 69 },
  { title: "card11", status: "Completed", type: "Practice", percentage: 23 },
];
export const tabs = [
  {
    label: "All",
  },
  { label: "Videos" },
  {
    label: "Practice",
  },
  {
    label: "Resources",
  },
];

export const getIcon = (type) => {
  switch (type) {
    case "Videos":
      return msVideosIcon;
    case "Resources":
      return msResourcesIcon;
    case "Practice":
      return msPracticeIcon;
  }
};
export const getbgColor = (status) => {
  switch (status) {
    case "Pending":
      return "text-grey-100";
    case "Completed":
      return "#fff2e5";
  }
};
