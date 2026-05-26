"use client";
import React from "react";

const marqueeItems = [
  "Built for Growth",
  "Designed to Convert",
  "Strategy First",
  "Built for Growth",
  "Designed to Convert",
  "Strategy First",
];

const MarqueeSection = () => {
  return (
    <section className="marquee-section overflow-hidden">
      <div className="marquee">
        {[1, 2].map((group) => (
          <div className="marquee-group" key={group}>
            {marqueeItems.map((item, index) => (
              <React.Fragment key={index}>
                <div className="text-divider">
                  <img
                    src="/assets/images/icons/marquee1-1.png"
                    alt="divider"
                  />
                </div>

                <div className="text" data-text={item}>
                  {item}
                </div>
              </React.Fragment>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default MarqueeSection;