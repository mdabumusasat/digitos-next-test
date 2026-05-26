"use client";
import React from "react";
import Link from "next/link";

const services = [
  {
    id: 1,
    number: "01",
    title: "App Development",
    icon: "/assets/images/icons/service1-1.png",
    image: "/assets/images/resource/service1-1.jpg",
    delay: "200ms",
  },
  {
    id: 2,
    number: "02",
    title: "Web Development",
    icon: "/assets/images/icons/service1-2.png",
    image: "/assets/images/resource/service1-2.jpg",
    delay: "300ms",
  },
  {
    id: 3,
    number: "03",
    title: "UI/UX Design",
    icon: "/assets/images/icons/service1-3.png",
    image: "/assets/images/resource/service1-3.jpg",
    delay: "400ms",
  },
  {
    id: 4,
    number: "04",
    title: "AI Technology",
    icon: "/assets/images/icons/service1-4.png",
    image: "/assets/images/resource/service1-4.jpg",
    delay: "500ms",
  },
];

export default function ServicesSection() {
  return (
    <section className="services-section">
      <div className="outer-box pb-90">
        <div className="bg-image">
          <img
            src="/assets/images/background/service1-1-bg.png"
            alt=""
          />
        </div>

        <div className="outer-container">
          <div className="row gx-4">
            {services.map((service) => (
              <div
                key={service.id}
                className="service-block col-xxl-3 col-xl-4 col-md-6 wow fadeInUp"
                data-wow-delay={service.delay}
              >
                <div className="inner-block">
                  <div className="number">
                    {service.number}
                    <span>.</span>
                  </div>

                  <Link
                    href="/page-service-details"
                    className="plus-icon"
                  >
                    <i className="fa-solid fa-plus"></i>
                  </Link>

                  <div className="content">
                    <div className="icon">
                      <img src={service.icon} alt={service.title} />
                    </div>

                    <div className="h4 title">
                      <Link href="/page-service-details">
                        {service.title}
                      </Link>
                    </div>

                    <div className="text">
                      It is a long established fact that a reader will
                      be distracted by the readable content of a page
                      when looking at its layout.
                    </div>
                  </div>

                  <div className="image">
                    <img src={service.image} alt={service.title} />
                    <img src={service.image} alt={service.title} />
                  </div>

                  <Link
                    href="/page-service-details"
                    className="btn-more"
                  >
                    <span>View Details</span>

                    <img
                      src="/assets/images/icons/arrow2.png"
                      alt=""
                    />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}