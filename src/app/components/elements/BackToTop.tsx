"use client";

import { useEffect, useState } from "react";

const BackToTop: React.FC = () => {
  const [hasScrolled, setHasScrolled] = useState(false);

  // Handle scroll visibility
  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!hasScrolled) return null;

  return (
    <div className="back-to-top-wrapper">
      <button
        id="back_to_top"
        onClick={scrollToTop}
        className="back-to-top-btn d-block">
        <svg
          width="12"
          height="7"
          viewBox="0 0 12 7"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M11 6L6 1L1 6"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
};

export default BackToTop;