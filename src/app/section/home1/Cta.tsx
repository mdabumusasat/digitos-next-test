"use client";
import Link from "next/link";
import React from "react";

export default function CtaSection() {
  return (
    <section className="cta-section">
      <div className="auto-container">
        <div className="outer-box wow fadeInUp" data-wow-delay="300ms">
          <div className="bg-image"><img src="/assets/images/resource/cta1-1.jpg" alt=""/></div>
          <div className="content-box">
            <div className="inner-box">
              <div className="sub-title">Start Your Project</div>
              <div className="h2 title char-animation">Let’s Turn Ideas Into Impact</div>
              <div className="text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a moreIt is </div>
            </div>
          </div>
          <Link className="icon-box" href="/page-contact">
            <div className="icon-one"><img src="/assets/images/icons/cta1-1.png" alt=""/></div>
            <div className="arrow-icon"><img src="/assets/images/icons/cta-arrow.png" alt=""/></div>
          </Link>
        </div>
      </div>
    </section>
  );
}