"use client";
import React from "react";
import Link from "next/link";

export default function WorkSectionTwo() {
  return (
    <section className="work-section-two">
      <div className="outer-box">
        <div className="bg-image"><img src="/assets/images/background/work2-1.png" alt=""/></div>
        <div className="auto-container">
          <div className="sec-title text-center">
            <div className="h6 sub-title">How it works</div>
            <div className="h2 title char-animation">Our Proven Process for Building High- Impact Digital Products</div>
          </div>
          <div className="working-outer">
            <div className="work-block-two wow fadeInUp" data-wow-delay="200ms">
              <div className="inner-block">
                <div className="icon-box"><div className="icon"><img src="/assets/images/icons/work2-1.png" alt=""/></div></div>
                <div className="cat">Discovery</div>
                <div className="h4 title">Discover Goals & Define <br/>the Right Strategy</div>
                <div className="text">We learn about your business, audience, and objectives to build a clear direction for the project.</div>
              </div>
            </div>
            <div className="work-block-two wow fadeInUp" data-wow-delay="400ms">
              <div className="inner-block">
                <div className="shape-1"><img src="/assets/images/icons/shape-30.png" alt=""/></div>
                <div className="shape-2"><img src="/assets/images/icons/shape-30.png" alt=""/></div>
                <div className="icon-box"><div className="icon"><img src="/assets/images/icons/work2-2.png" alt=""/></div></div>
                <div className="cat">Design</div>
                <div className="h4 title">Design Engaging Experiences <br/>That Users Love</div>
                <div className="text">We craft modern, user-focused designs that balance beauty, usability, and performance.</div>
              </div>
            </div>
            <div className="work-block-two wow fadeInUp" data-wow-delay="600ms">
              <div className="inner-block">
                <div className="icon-box"><div className="icon"><img src="/assets/images/icons/work2-3.png" alt=""/></div></div>
                <div className="cat">Launch</div>
                <div className="h4 title">Launch, Measure & Continuously <br/>Optimize Growth</div>
                <div className="text">After launch, we track performance, refine the experience, and improve results over time.</div>
              </div>
            </div>
          </div>
          <div className="bottom-box wow fadeInUp" data-wow-delay="800ms">
            <div className="inner-box">
              <i className="icon fa-solid fa-bolt"></i>
              <div className="text">We Strive To Lead The way In  The business </div>
              <Link className="btn-more" href="/page-services">
                <span>Know All Services</span>
                <i className="fa-solid fa-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}