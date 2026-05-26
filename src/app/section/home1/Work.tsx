"use client";
import Link from "next/link";
import React from "react";

const workData = [
  {
    number: "01",
    title: "Tailored Solutions",
    image: "/assets/images/resource/work1-1.jpg",
    feature: "Strategy Development",
    delay: "200ms",
  },
  {
    number: "02",
    title: "Strategic Planning",
    image: "/assets/images/resource/work1-2.jpg",
    feature: "Client-Focused",
    delay: "400ms",
  },
  {
    number: "03",
    title: "Seamless Execution",
    image: "/assets/images/resource/work1-3.jpg",
    feature: "Client-Focused Approach",
    delay: "600ms",
  },
];

const WorkSection = () => {
  return (
    <section className="work-section">
      <div className="auto-container">
        <div className="sec-title text-center">
          <div className="h6 sub-title">How it works</div>
          <h2 className="title char-animation">
            Our Proven Process for Building High-
            <br />
            Impact Digital Products
          </h2>
        </div>
        <div className="working-outer">
          <div className="row gx-4">
            {workData.map((item, index) => (
              <div
                className="work-block col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay={item.delay}
                key={index}>
                <div className="inner-block">
                  <div className="number">{item.number}</div>
                  <div className="image">
                    <img
                      src={item.image}
                      alt={item.title}
                    />
                  </div>
                  <div className="content-box">
                    <div className="inner-box">
                      <h3 className="title">{item.title}</h3>

                      <div className="text">
                        It is a long established fact that a reader will be
                        distractedby the readable content of a page when looking
                        at its
                      </div>
                    </div>
                    <div className="feature">
                      <img
                        src="/assets/images/icons/work1-1.png"
                        alt="feature-icon"
                      />

                      <span>{item.feature}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="bottom-box">
            <div className="inner-box">
              <i className="icon fa-solid fa-bolt"></i>
              <div className="text">
                We Strive To Lead The way In The business
              </div>
              <Link
                className="btn-more"
                href="/page-services">
                <span>Know All Services</span>
                <i className="fa-solid fa-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;