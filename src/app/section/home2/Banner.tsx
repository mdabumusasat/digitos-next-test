"use client";
import React from "react";
import Link from "next/link";

export default function BannerSectionTwo() {
  return (
    <section className="banner-section-two">
      <div className="outer-box">
        <div className="bg-image"><img src="/assets/images/resource/banner2-1.jpg" alt=""/></div>
        <div className="shape-1 wow fadeInUp" data-wow-delay="700ms"><img src="/assets/images/icons/shape-23.png" alt=""/></div>
        <div className="shape-2 wow fadeInUp" data-wow-delay="800ms"><img src="/assets/images/icons/shape-24.png" alt=""/></div>
        <div className="round-icon wow fadeInUp" data-wow-delay="600ms">
          <div className="icon"><img src="/assets/images/icons/banner2-1.png" alt=""/></div>
          <div className="icon-two"><img src="/assets/images/icons/banner2-2.png" alt=""/></div>
        </div>
        <div className="outer-container">
          <div className="banner-content">
            <div className="inner-content">
              <div className="sub-title wow fadeInUp" data-wow-delay="100ms">A full-service digital agency helping startups </div>
              <div className="banner-title wow fadeInUp" data-wow-delay="200ms"><span>Elevating Brands</span>Through Digital  Excellence</div>
            </div>
          </div>
          <div className="info-box">
            <div className="image wow fadeInUp" data-wow-delay="300ms"><img src="/assets/images/resource/bvanner2-2.png" alt=""/></div>
            <div className="text wow fadeInUp" data-wow-delay="400ms">A full-service digital agency helping startups and businesses build high-converting websites, strong brands, and scalable digital products.</div>
            <Link href="/page-about" className="theme-btn btn-style-one wow fadeInUp" data-wow-delay="500ms">Discover More <span><img src="/assets/images/icons/arrow.png" alt=""/></span></Link>
          </div>
        </div>
      </div>
    </section>
  );
}