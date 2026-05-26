"use client";
import React from "react";
import Link from "next/link";

export default function NewsSection() {
  return (
    <section className="blog-section pt-0">
      <div className="shape-1 bounce-x"><img src="/assets/images/icons/shape-21.png" alt=""/></div>
      <div className="auto-container">
        <div className="sec-title text-center">
          <div className="h6 sub-title">Our Blog</div>
          <div className="h2 title char-animation">Check Out Latest News Update & Articles</div>
        </div>
        <div className="row gx-4">
          <div className="blog-block col-xl-4 col-md-6 wow fadeInUp" data-wow-delay="200ms">
            <div className="inner-block">
              <div className="image-box">
                <div className="image">
                  <img src="/assets/images/resource/blog1-1.jpg" alt=""/>
                  <img src="/assets/images/resource/blog1-1.jpg" alt=""/>
                </div>
                <div className="date">20</div>
              </div>
              <div className="content-box">
                <div className="inner-box">
                  <div className="sub-title">Digital Agency</div>
                  <div className="h4 title"><Link href="/news-grid">Designing User Experiences That Actually Convert</Link></div>
                  <Link href="/news-details" className="btn-more">Read More <span><img src="/assets/images/icons/arrow2.png" alt=""/></span></Link>
                  <div className="time-text">3 Mins to Read</div>
                </div>
              </div>
            </div>
          </div>
          <div className="blog-block col-xl-4 col-md-6 wow fadeInUp" data-wow-delay="400ms">
            <div className="inner-block">
              <div className="image-box">
                <div className="image">
                  <img src="/assets/images/resource/blog1-2.jpg" alt=""/>
                  <img src="/assets/images/resource/blog1-2.jpg" alt=""/>
                </div>
                <div className="date">03</div>
              </div>
              <div className="content-box">
                <div className="inner-box">
                  <div className="sub-title">Digital Agency</div>
                  <div className="h4 title"><Link href="/news-grid">Why Your Brand Needs a Strong Online Presence</Link></div>
                  <Link href="/news-details" className="btn-more">Read More <span><img src="/assets/images/icons/arrow2.png" alt=""/></span></Link>
                  <div className="time-text">3 Mins to Read</div>
                </div>
              </div>
            </div>
          </div>
          <div className="blog-block col-xl-4 col-md-6 wow fadeInUp" data-wow-delay="600ms">
            <div className="inner-block">
              <div className="image-box">
                <div className="image">
                  <img src="/assets/images/resource/blog1-3.jpg" alt=""/>
                  <img src="/assets/images/resource/blog1-3.jpg" alt=""/>
                </div>
                <div className="date">05</div>
              </div>
              <div className="content-box">
                <div className="inner-box">
                  <div className="sub-title">Digital Agency</div>
                  <div className="h4 title"><Link href="/news-grid">Brand Identity Essentials for Digital Businesses</Link></div>
                  <Link href="/news-details" className="btn-more">Read More <span><img src="/assets/images/icons/arrow2.png" alt=""/></span></Link>
                  <div className="time-text">3 Mins to Read</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}