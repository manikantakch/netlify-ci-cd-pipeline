import Badge from "@/components/atoms/badge";
import CheckBoxInfo from "@/components/molecules/checkBoxInfo";
import ProgressInfo from "@/components/molecules/ProgressInfo";
import React from "react";

const StatusSection = () => {
  return (
    <div>
      <div className="flex justify-between mb-4">
        <span className="text-text-grey-900">7th Oct 24 - 13th Oct 24</span>
        <Badge size="xs" startColor="#daf6f6" endColor="#b0d6f8">
          CBSE
        </Badge>
      </div>
      <div className="grid grid-cols-12 mb-8">
        <div className="col-span-3">
          <ProgressInfo isClassroom={true} progress={100} label={"School"} />
        </div>
        <div className="col-span-3">
          <ProgressInfo
            isClassroom={false}
            percentage="24"
            progress={54}
            label="nLearn"
          />
        </div>
        <div className="col-span-3">
          <CheckBoxInfo isSelfStudy={true} label="Self-Study" />
        </div>
        <div className="col-span-3">
          <CheckBoxInfo label="Have Doubts" />
        </div>
      </div>
    </div>
  );
};

export default StatusSection;
