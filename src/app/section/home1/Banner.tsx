"use client";
import Link from "next/link";
import React from "react";


export default function BannerSection() {
  return (
    <section className="banner-section">
      <div className="shape-2"><img src="/assets/images/icons/shape-2.png" alt=""/></div>
      <div className="shape-3"><img src="/assets/images/icons/shape-3.png" alt=""/></div>
      <div className="style-text">Digital</div>
      <div className="outer-box">
        <div className="outer-container">
          <div className="shape-1 bounce-x"><img src="/assets/images/icons/shape-1.png" alt=""/></div>
          <div className="row align-items-center">
            <div className="banner-content col-lg-7">
              <div className="inner-content">
                <div className="sub-title wow fadeInUp" data-wow-delay="200ms">A full-service digital agency helping startups</div>
                <div className="h1 title wow fadeInUp" data-wow-delay="400ms">We Design Digital Experiences That Grow Brands</div>
                <div className="bottom-box wow fadeInUp" data-wow-delay="600ms">
                  <Link href="/page-about" className="theme-btn btn-style-one">Discover More <span><img src="/assets/images/icons/arrow.png" alt=""/></span></Link>
                  <div className="text">A full-service digital agency helping startups and businesses build high-converting websites, strong brands</div>
                </div>
              </div>
            </div>
            <div className="image-column col-lg-5">
              <div className="inner-column wow fadeInUp" data-wow-delay="600ms">
                <div className="image"><img src="/assets/images/banner/banner1-1.png" alt=""/></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}