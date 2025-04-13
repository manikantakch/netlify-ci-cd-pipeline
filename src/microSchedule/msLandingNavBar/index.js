import "./styles.css";
import Button from "@/components/atoms/button";
import Image from "next/image";
import {
  DownloadIcon,
  DownloadToastIcons,
} from "@/features/library/images/resources";
import { searchGreyIcon } from "@/features/test-prep/images/test-prep-images";
import MicroscheduleDownloadModal from "@/components/templates/modals/microschedule-download-modals";
import { useState } from "react";
import { showToast } from "@/components/molecules/toastify";
import useOffline from "@/hooks/useOffline";
import { useRouter } from "next/navigation";

const MsLandingNavBar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { isOnline } = useOffline();

  const router = useRouter();

  const months = [
    "May 2024",
    "June 2024",
    "July 2024",
    "August 2024",
    "September 2024",
    "October 2024",
    "November 2024",
    "December 2024",
  ];

  // Handler to open the modal
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  // Handler to close the modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  const downloadPDF = (file, month) => {
    if (isOnline) {
      if (file) {
        try {
          // Show "your resource is downloading" toast
          showToast(
            "info",
            "Your resource is downloading...",
            true,
            <Image
              src={DownloadToastIcons}
              alt="Downloading icon"
              width={16}
              height={16}
            />,
            2000
          );

          // Simulate a slight delay before triggering the actual download
          setTimeout(() => {
            // const link = document.createElement("a");
            // link.href = file;
            // link.download = "document.pdf"; // Customize the filename
            // document.body.appendChild(link);
            // link.click();
            // document.body.removeChild(link);
            window.open(file, "_blank");

            // Show "successfully downloaded" toast
            showToast("success", `${month} microschedule has been downloaded`);
          }, 3000);
        } catch (error) {
          showToast("error", "Failed to download the PDF. Please try again.");
        }
      } else {
        showToast("error", "No PDF file available for download.");
      }
    } else {
      showToast(
        "error",
        "You are offline. Please check your internet connection."
      );
    }
  };

  const handleDownload = (month) => {
    // Map each month to a random PDF URL
    let fileUrl = "";

    switch (month) {
      case "June 2024":
        fileUrl =
          "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf";
        break;
      case "July 2024":
        fileUrl =
          "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf";
        break;
      case "August 2024":
        fileUrl =
          "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf";
        break;
      case "September 2024":
        fileUrl =
          "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf";
        break;
      case "October 2024":
        fileUrl =
          "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf";
        break;
      default:
        fileUrl =
          "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf";
    }
    // Trigger download immediately
    downloadPDF(fileUrl, month);
  };

  return (
    <div>
      <div className="flex justify-between items-center">
        <h2 className="text-text-grey-900 font-bold text-[24px]">
          Microschedule
        </h2>
        <div className="buttons_wrap">
          <Button
            variant="primary"
            outliner={true}
            rounded={true}
            btnHeight={"h-[36px]"}
            btnWidth={"h-[103px]"}
            onClick={() => router.push("/microschedule/my-study")}
          >
            My Study
          </Button>
          <div className="download_Search_icons" onClick={handleOpenModal}>
            <Image src={DownloadIcon} alt={"download"} width={20} height={20} />
          </div>
          <div
            className="download_Search_icons"
            onClick={() => alert("search")}
          >
            <Image src={searchGreyIcon} alt={"search"} width={20} height={20} />
          </div>
        </div>
      </div>
      <span className="text-[#00000033] font-medium text-[14px]">
        Track weekly topics and check your study progress.
      </span>

      {/* 4. Render the modal conditionally */}
      <MicroscheduleDownloadModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onDownload={handleDownload}
        months={months}
        title="Download Microschedule"
      />
    </div>
  );
};

export default MsLandingNavBar;
