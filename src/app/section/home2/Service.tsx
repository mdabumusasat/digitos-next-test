"use client";

import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function ServiceSectionLayout2() {
  return (
    <section className="services-section-two">
      <div className="outer-box">

        <div className="bg-image">
          <img src="/assets/images/background/service2-1-bg.png" alt="" />
        </div>

        <div className="shape-1">
          <img src="/assets/images/icons/shape-28.png" alt="" />
        </div>

        <div className="shape-2">
          <img src="/assets/images/icons/shape-29.png" alt="" />
        </div>

        <div className="auto-container">

          <div className="sec-title-box">
            <div className="sec-title light">
              <div className="h6 sub-title">Our Service</div>
              <div className="h2 title char-animation">
                What We are Offering to Our Potential Client
              </div>
            </div>

            <div className="text">
              It is a long established fact that a reader will be distracted...
            </div>
          </div>

          <div className="outer-container">

            {/* SWIPER */}
            <Swiper
              modules={[Navigation]}
              navigation={{
                nextEl: ".service-two_button-next",
                prevEl: ".service-two_button-prev",
              }}
              spaceBetween={20}
              slidesPerView={3}
              breakpoints={{
                0: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1200: { slidesPerView: 3 },
              }}
              className="service-two_swiper"
            >

              {[1, 2, 3, 4, 5, 6].map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="service-block-two">
                    <div className="inner-block">

                      <div className="icon">
                        <img
                          src={`/assets/images/icons/service2-${(index % 3) + 1}.png`}
                          alt=""
                        />
                      </div>

                      <div className="content">
                        <div className="h4 title">
                          <Link href="/page-services">
                            {index % 3 === 0
                              ? "Website Development"
                              : index % 3 === 1
                              ? "Brand Identity"
                              : "UI/UX Design"}
                          </Link>
                        </div>

                        <div className="text">
                          Fast, responsive, and SEO-friendly websites built with modern tools like Framer and Webflow.
                        </div>
                      </div>

                      <div className="number">
                        {(index + 1).toString().padStart(2, "0")}
                      </div>

                      <div className="arrow-icon">
                        <img src="/assets/images/icons/arrow.png" alt="" />
                      </div>

                    </div>
                  </div>
                </SwiperSlide>
              ))}

            </Swiper>

            {/* NAVIGATION BUTTONS (NOW WORKING) */}
            <div className="service-two_button-prev">
              <img src="/assets/images/icons/arrow3.png" alt="" />
            </div>

            <div className="service-two_button-next">
              <img src="/assets/images/icons/arrow3.png" alt="" />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}