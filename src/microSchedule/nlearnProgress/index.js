import CircularProgressInsideData from "@/components/molecules/CircularProgressInsideData";
import React from "react";

const NlearnProgress = () => {
  const data = [
    {
      title: "Videos",
      completed: 10,
      total: 50,
    },
    {
      title: "Practice",
      completed: 25,
      total: 50,
    },
    {
      title: "Resources",
      completed: 75,
      total: 75,
    },
  ];
  const getColor = (percentage) => {
    if (percentage >= 100) {
      return "text-success-500";
    }
    return "text-warning-500";
  };
  return (
    <div>
      <div className="mb-4 text-text-grey-900 font-semibold">
        nlearn progress
      </div>
      <div className="grid grid-cols-12 mb-5">
        {data.map((each) => (
          <div className="col-span-3" key={each}>
            <CircularProgressInsideData
              percentage={(each.completed / each.total) * 100}
              size={106}
              color={getColor((each.completed / each.total) * 10)}
              completed={each.completed}
              total={each.total}
              title={each.title}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default NlearnProgress;
