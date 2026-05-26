"use client";
import React from "react";

export default function FeatureSectionTwo() {
  return (
    <section className="feature-section">
      <div className="shape-1"><img src="/assets/images/icons/shape-25.png" alt=""/></div>
      <div className="shape-2 wow fadeInUp" data-wow-delay="100ms"><img src="/assets/images/icons/shape-26.png" alt=""/></div>
      <div className="auto-container">
        <div className="feature-outer">
          <div className="feature-block wow fadeInUp" data-wow-delay="200ms">
            <div className="inner-block">
              <div className="content-box">
                <div className="icon"><img src="/assets/images/icons/feature2-1.png" alt=""/></div>
                <div className="h3 title">Strategy <br/>First Approach</div>
              </div>
              <div className="text">It is a long established fact that a reader will be distracted by the readable content of a </div>
            </div>
          </div>
          <div className="feature-block wow fadeInUp" data-wow-delay="400ms">
            <div className="inner-block">
              <div className="content-box">
                <div className="icon"><img src="/assets/images/icons/feature2-2.png" alt=""/></div>
                <div className="h3 title">Conversion-Focused Design</div>
              </div>
              <div className="text">It is a long established fact that a reader will be distracted by the readable content of a </div>
            </div>
          </div>
          <div className="feature-block wow fadeInUp" data-wow-delay="600ms">
            <div className="inner-block">
              <div className="content-box">
                <div className="icon"><img src="/assets/images/icons/feature2-3.png" alt=""/></div>
                <div className="h3 title">Fast & <br/>Scalable Builds</div>
              </div>
              <div className="text">It is a long established fact that a reader will be distracted by the readable content of a </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}