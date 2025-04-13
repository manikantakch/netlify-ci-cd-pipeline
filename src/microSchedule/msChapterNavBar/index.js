"use client";
import React, { useState, useEffect } from "react";
import NavBarSection from "@/components/templates/navBarSection";
import { chapters } from "./dummydata";
import { chevronLeft, chevronRight } from "../images/microschedule";
import Image from "next/image";

const MsChapterNavBar = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showOnlyTitle, setShowOnlyTitle] = useState(false);

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      setShowOnlyTitle(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % chapters.length);
  };

  const previousSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + chapters.length) % chapters.length);
  };

  return (
    <NavBarSection isPaddingTop="p-0">
      <div className="w-full max-w-6xl mx-auto">
        <div className={"overflow-hidden rounded-lg p-4"}>
          {/* Main carousel container */}
          <div className={"flex items-center justify-center relative"}>
            {/* Slide content */}
            <div
              className={
                "flex flex-col justify-center items-center text-center px-8 w-full"
              }
            >
              <h2
                title={chapters[currentSlide].title}
                className={`px-12 text-2xl font-semibold text-text-grey-900 text-center line-clamp-2 col-span-8 overflow-hidden ${
                  showOnlyTitle ? "text-lg font-bold" : ""
                }`}
              >
                {chapters[currentSlide].title}
              </h2>

              {!showOnlyTitle && (
                <div className="px-12 text-text-grey-700 text-sm font-semibold text-center line-clamp-2 overflow-hidden">
                  <span title={chapters[currentSlide].chapterName}>
                    {chapters[currentSlide].chapterName}&nbsp;|&nbsp;
                  </span>
                  <span title={chapters[currentSlide].subject}>
                    {chapters[currentSlide].subject}
                  </span>
                </div>
              )}
            </div>

            {/* Navigation buttons with margin */}
            <button
              onClick={previousSlide}
              className="absolute left-0 ml-8 top-1/2 -translate-y-1/2 bg-white-900 p-2 rounded-full shadow-md z-10"
              aria-label="Previous slide"
            >
              <Image
                src={chevronRight}
                alt="chevron-right"
                width={24}
                height={24}
              />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-0 mr-8 top-1/2 -translate-y-1/2 bg-white-900 p-2 rounded-full shadow-md z-50"
              aria-label="Next slide"
            >
              <Image
                src={chevronLeft}
                alt="chevron-left"
                width={24}
                height={24}
              />
            </button>
          </div>
        </div>
      </div>
    </NavBarSection>
  );
};

export default MsChapterNavBar;
