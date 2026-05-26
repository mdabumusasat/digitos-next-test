"use client";
import Link from "next/link";
import React from "react";

export default function AboutSection() {
  return (
    <section className="about-section">
      <div className="shape-1 animate-circle"><img src="/assets/images/icons/shape-22.png" alt=""/></div>
      <div className="auto-container">
        <div className="row gx-4">
          <div className="image-column col-xl-6 col-lg-9">
            <div className="inner-column">
              <div className="icon"><img src="/assets/images/icons/shape-4.png" alt=""/></div>
              <div className="row gx-4">
                <div className="col-md-6">
                  <div className="images-box wow fadeInUp" data-wow-delay="200ms">
                    <div className="image one"><img src="/assets/images/resource/about1-1.jpg" alt=""/></div>
                    <div className="image two"><img src="/assets/images/resource/about1-2.jpg" alt=""/></div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="images-box two wow fadeInUp" data-wow-delay="400ms">
                    <div className="image three"><img src="/assets/images/resource/about1-3.jpg" alt=""/></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content-column col-xl-6 col-lg-8">
            <div className="inner-column">
              <div className="sec-title">
                <div className="h6 sub-title">Who we are</div>
                <div className="h2 title char-animation">A Creative Digital Agency Focused on Real Results</div>
                <div className="text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using </div>
              </div>
              <div className="about-block-box">
                <div className="about-block wow fadeInUp" data-wow-delay="200ms">
                  <div className="inner-block">
                    <div className="icon"><img src="/assets/images/icons/about1-1.png" alt=""/></div>
                    <div className="content">
                      <div className="h4 title">Creative Branding</div>
                      <div className="text">It is a long established fact that read will be </div>
                    </div>
                  </div>
                </div>
                <div className="about-block wow fadeInUp" data-wow-delay="400ms">
                  <div className="inner-block">
                    <div className="icon"><img src="/assets/images/icons/about1-2.png" alt=""/></div>
                    <div className="content">
                      <div className="h4 title">Smart Strategy</div>
                      <div className="text">It is a long established fact that read will be </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="list-style-box">
                <div className="shape"><img src="/assets/images/icons/shape-5.png" alt=""/></div>
                <ul className="list-style-one">
                  <li>
                    <i className="icon fa-solid fa-check"></i>
                    <span>Creativity Meets Strategy</span>
                  </li>
                  <li>
                    <i className="icon fa-solid fa-check"></i>
                    <span>Design. Develop. Deliver</span>
                  </li>
                </ul>
                <ul className="list-style-one">
                  <li>
                    <i className="icon fa-solid fa-check"></i>
                    <span>Innovative Development</span>
                  </li>
                  <li>
                    <i className="icon fa-solid fa-check"></i>
                    <span>Unleashing Digital Power.</span>
                  </li>
                </ul>
              </div>
              <div className="bottom-box">
                <Link href="/page-about" className="theme-btn btn-style-one">Discover More <span><img src="/assets/images/icons/arrow.png" alt=""/></span></Link>
                <div className="author-info">
                  <img src="/assets/images/icons/about1-3.png" alt=""/>
                  <div className="info">
                    <div className="h6 name">Emily Carter</div>
                    <div className="designation">C0O, Solutions</div>
                  </div>
                </div>
                <div className="icon-box">
                  <div className="icon"><img src="/assets/images/icons/about1-5.png" alt=""/></div>
                  <div className="h3 year">25</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}