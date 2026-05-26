"use client";
import Link from "next/link";
import React from "react";

const services = [
  {
    number: "01",
    title: "App Development",
    icon: "/assets/images/icons/service1-1.png",
    image: "/assets/images/resource/service1-1.jpg",
    delay: "200ms",
  },
  {
    number: "02",
    title: "Web Development",
    icon: "/assets/images/icons/service1-2.png",
    image: "/assets/images/resource/service1-2.jpg",
    delay: "300ms",
  },
  {
    number: "03",
    title: "UI/UX Design",
    icon: "/assets/images/icons/service1-3.png",
    image: "/assets/images/resource/service1-3.jpg",
    delay: "400ms",
  },
  {
    number: "04",
    title: "AI Technology",
    icon: "/assets/images/icons/service1-4.png",
    image: "/assets/images/resource/service1-4.jpg",
    delay: "500ms",
  },
];

const ServicesSection = () => {
  return (
    <section className="services-section">
      <div className="outer-box position-relative">
        <div className="bg-image">
          <img
            src="/assets/images/background/service1-1-bg.png"
            alt="background"
          />
        </div>
        <div className="auto-container">
          <div className="sec-title-box">
            <div className="sec-title">
              <div className="h6 sub-title">Our Service</div>
              <h2 className="title char-animation">
                What We are Offering to Our Potential Client
              </h2>
            </div>
            <div className="text">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using
            </div>
          </div>
        </div>
        <div className="outer-container">
          <div className="row gx-4">
            {services.map((service, index) => (
              <div
                className="service-block col-xxl-3 col-xl-4 col-md-6 wow fadeInUp"
                data-wow-delay={service.delay}
                key={index}>
                <div className="inner-block">
                  <div className="number">
                    {service.number}
                    <span>.</span>
                  </div>
                  <Link
                    className="plus-icon"
                    href="/page-service-details">
                    <i className="fa-solid fa-plus"></i>
                  </Link>
                  <div className="content">
                    <div className="icon">
                      <img
                        src={service.icon}
                        alt={service.title}
                      />
                    </div>
                    <h4 className="title">
                      <Link href="/page-service-details">
                        {service.title}
                      </Link>
                    </h4>
                    <div className="text">
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout.
                    </div>
                  </div>
                  <div className="image">
                    <img
                      src={service.image}
                      alt={service.title}
                    />
                    <img
                      src={service.image}
                      alt={service.title}
                    />
                  </div>
                  <Link
                    className="btn-more"
                    href="/page-service-details">
                    <span>View Details</span>
                    <img
                      src="/assets/images/icons/arrow2.png"
                      alt="arrow"
                    />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div
            className="bottom-box wow fadeInUp"
            data-wow-delay="600ms">
            <div className="dot"></div>
            <Link
              href="/page-services"
              className="theme-btn btn-style-one">
              View all service
              <span>
                <img
                  src="/assets/images/icons/arrow.png"
                  alt="arrow"
                />
              </span>
            </Link>
            <div className="dot"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;