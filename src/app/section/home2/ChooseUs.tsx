"use client";
import React from "react";
import Link from "next/link";
import CounterUp from "../../components/elements/CounterUp";

export default function ChooseUsSectionTwo() {
  return (
    <section className="why-choose-us-section-two">
      <div className="auto-container">
        <div className="row gx-4 align-items-center">
          <div className="image-column col-lg-5">
            <div className="inner-column wow fadeInUp" data-wow-delay="200ms">
              <div className="image"><img src="/assets/images/resource/wcu2-1.jpg" alt=""/></div>
              <div className="funfact-box">
                <div className="count-box"><CounterUp end={98} />%</div>
                <div className="text">Clients Satisfied <br/>and Repeating</div>
              </div>
            </div>
          </div>
          <div className="content-column col-xl-7 col-lg-9">
            <div className="inner-column wow fadeInUp" data-wow-delay="400ms">
              <div className="sec-title">
                <div className="h6 sub-title">why choose us</div>
                <div className="h2 title char-animation">The Digital Partner Trusted by Global Innovators</div>
                <div className="text">We create purposeful digital solutions designed to solve real business challenges and deliver measurable results. By combining strategy, creativity, and technology, we help brands build strong digital foundations that drive growth.</div>
              </div>
              <div className="info-box">
                <div className="info one">
                  <div className="icon"><img src="/assets/images/icons/wcu2-1.png" alt=""/></div>
                  <div className="content">
                    <div className="h5 title">Experience Professional</div>
                    <div className="text">We learn about your business, audience objectives</div>
                  </div>
                </div>
                <div className="info">
                  <div className="icon"><img src="/assets/images/icons/wcu2-2.png" alt=""/></div>
                  <div className="content">
                    <div className="h5 title">Creative Logo Design</div>
                    <div className="text">We learn about your business, audience objectives</div>
                  </div>
                </div>
              </div>
              <div className="bootom-box">
                <Link href="/page-contact" className="theme-btn btn-style-one">Contact Us <span><img src="/assets/images/icons/arrow.png" alt=""/></span></Link>
                <div className="image"><img src="/assets/images/resource/wcu2-1.png" alt=""/></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}