import SubjectSelector from "@/components/molecules/subject-selector";
import NavBarSection from "@/components/templates/navBarSection";
import { BackArrow } from "@/features/library/images/practice";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const MsMyStudyNavBar = ({ selectedSubject, onSelectSubject }) => {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };
  return (
    <NavBarSection isPaddingTop="pt-0">
      <div
        className="font-bold flex  justify-between px-6"
        style={{ fontSize: "20px" }}
      >
        <div className="flex gap-2 items-center">
          <Image
            src={BackArrow}
            alt="backArrow"
            width={24}
            height={24}
            className={"cursor-pointer"}
            onClick={handleBack}
          />
          My Study
        </div>
        <div className="w-fit relative z-auto">
          <SubjectSelector
            selectedSubject={selectedSubject}
            onSelectSubject={onSelectSubject}
          />
        </div>
      </div>
    </NavBarSection>
  );
};
export default MsMyStudyNavBar;
